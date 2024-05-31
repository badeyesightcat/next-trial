import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request, response) {
  try {
    
  } catch (error) {
    return NextResponse.json({ message: 'Login failed' });    
  }
}