// pages/api/test.ts or app/api/test/route.ts
import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"


export async function GET(req: NextRequest) {
  try {

    const client = await clientPromise
    const db = client.db("Ticketing-App")

    const collection =  db.collection("users")
    const leads = await collection.find({ isOnline:true }).toArray();
    if (leads){
      return NextResponse.json(leads, { status: 200 });
    }else{
      return NextResponse.json({ error: "Failed to retrieve leads" }, { status: 500 });
    }

  } catch (err) {
    console.error("Error Retrieving Employee from DB !!", err);
    return NextResponse.json({ error: "Error Retrieving Employee from DB !!" }, { status: 500 });
  }
}
