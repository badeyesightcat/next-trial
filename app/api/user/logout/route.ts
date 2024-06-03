import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: 'Log out successfully',
    success: true
  }, {
    status: 200
  });

  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });

  return response;
}