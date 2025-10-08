// pages/api/test.ts or app/api/test/route.ts
import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const client = await clientPromise
    const db = client.db("Ticketing-App")
    const leadData = { ...body, assignedTo: "", status: "New" };
    const result = await db.collection("Leads").insertOne(leadData);
    if (result.acknowledged){
      console.log("Lead inserted with ID:", result.insertedId);
      return NextResponse.json({ message: "Lead inserted with ID: " + result.insertedId }, { status: 200 });
    }else{
      console.error("Failed to insert lead");
      return NextResponse.json({ error: "Failed to insert lead" }, { status: 500 });
    }

  } catch (err) {
    console.error("Error Retrieving Employee from DB !!", err);
    return NextResponse.json({ error: "Error Retrieving Employee from DB !!" }, { status: 500 });
  }
}
