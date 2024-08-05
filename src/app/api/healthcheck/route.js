// app/api/healthcheck/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Status OK', code: 200 });
}
