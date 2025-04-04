import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb'; // Adjust the import path for your database connection
import User from '@/app/models/user'; // Adjust the import path for your User model

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase(); // Make sure you establish a DB connection

    const { id } = await params;
    const user = await User.findById(id); // Fetch user details by ID

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
