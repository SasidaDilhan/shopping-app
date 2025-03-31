import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/models/user";
import { connectToDatabase } from "@/app/lib/mongodb";

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error registering user" }, { status: 500 });
  }
}
