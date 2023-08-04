import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

export interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await resend.emails.send({
      from: "LukeJ Portfolio <lukejportfolio@resend.dev>",
      to: ["luke.ab.johnson@gmail.com"],
      subject: "A New Email From Your Portfolio",
      react: EmailTemplate({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        message: body.message,
      }),
      text: "If you see this please tell Chase and let him know where I can't figure out what it is for.",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
