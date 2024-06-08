import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const userInfo = getDataFromToken(request);
    return NextResponse.json({
      message: "Successfully got user id",
      data: { userInfo },
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
