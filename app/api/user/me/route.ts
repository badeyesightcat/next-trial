import { connect } from "@/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userInfo = getDataFromToken(request);
    const user = await User.findOne({ _id: userInfo.id }).select("-password");
    return NextResponse.json(
      {
        message: "User found successfully",
        data: { user },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
