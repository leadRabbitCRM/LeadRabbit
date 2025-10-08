// pages/api/test.ts or app/api/test/route.ts
import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    // const email = req.nextUrl.searchParams.get("email");
    const body = await req.json();
    const password = body.password;
    const email = body.email;
    console.log("first")
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    const client = await clientPromise
    const db = client.db("Ticketing-App")
    let user = await db.collection("users").findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "UserID not found !!" }, { status: 404 });
    }
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return NextResponse.json({ message: "Invalid credentials !!" }, { status: 401 });
    }

    const token = jwt.sign(
      { email, role: user.role }, // payload
      process.env.JWT_SECRET!,   // secret
      { expiresIn: "1h" }        // token valid for 1 hour
    );
    const res = NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    res.cookies.set("token", token, {
      httpOnly: true,
      sameSite: 'strict',
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      path: "/",
    });
    await db.collection("users").findOneAndUpdate(
      { email },         // Filter
      { $set: { isOnline: true } },        // Update operation
      { returnDocument: "after" }            // Options (return updated doc)
    );
    return res;
    // if (user.mfaEnabled == "false") {
    //   const secret = speakeasy.generateSecret({
    //     name: `MyApp ${user.email}`,
    //   });
    //   const qr = await QRCode.toDataURL(secret.otpauth_url);
    //   return NextResponse.json({
    //     secret: secret.base32,
    //     otpauth_url: secret.otpauth_url,
    //     qr,
    //     mfaSetupRequired: true
    //   });
    // }

  } catch (err) {
    console.error("Error Retrieving Employee from DB !!", err);
    return NextResponse.json({ error: "Error Retrieving Employee from DB !!" }, { status: 500 });
  }
}
