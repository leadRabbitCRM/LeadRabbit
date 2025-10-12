import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('appToken')?.value;
    console.log(token)
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ role: (decoded as any).role });
  } catch (err) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
  }
}