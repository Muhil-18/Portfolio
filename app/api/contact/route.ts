import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would integrate Resend or Nodemailer here.
    console.log("Contact form submission received:", { name, email, subject, message });

    return NextResponse.json({ success: true, message: "Message received successfully." });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
