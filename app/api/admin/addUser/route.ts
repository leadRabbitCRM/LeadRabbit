import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, status, email, password } = body;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection("users");

    // Check if email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = {
      name,
      role,
      status: status || "active",
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json(
      { message: "✅ User added successfully", user: { name, role, email, status } },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Error adding user to DB:", err);
    return NextResponse.json(
      { error: "Server error while adding user" },
      { status: 500 }
    );
  }
}
