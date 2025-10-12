// pages/api/test.ts or app/api/test/route.ts
import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email;


    const client = await clientPromise
    const db = client.db(process.env.DB_NAME)
    let user = await db.collection("users").findOneAndUpdate(
      { email },         // Filter
      { $set: { isOnline: false } },        // Update operation
      { returnDocument: "after" }            // Options (return updated doc)
    );

    return NextResponse.json({ message: "Logout" }, { status: 200 });


  } catch (err) {
    console.error("Error Retrieving Employee from DB !!", err);
    return NextResponse.json({ error: "Error Retrieving Employee from DB !!" }, { status: 500 });
  }
}
