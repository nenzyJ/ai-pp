import AppointmentConfirmationEmail from "@/components/emails/ConfirmationEmail";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // quick fail early if API key missing
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key is not set (RESEND_API_KEY)");
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    } = body;

    // validate required fields
    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      // send the email
      const data = await resend.emails.send({
        from: "DentSpace <no-reply@resend.dev>",
        to: [userEmail],
        subject: "Appointment Confirmation - DentSpace",
        react: AppointmentConfirmationEmail({
          doctorName,
          appointmentDate,
          appointmentTime,
          appointmentType,
          duration,
          price,
        }),
      });

      return NextResponse.json(
        { message: "Email sent successfully", emailId: (data as any)?.id },
        { status: 200 }
      );
    } catch (err: any) {
      // Resend SDK can throw; include message in response for easier debugging in dev
      console.error("Resend error:", err);
      const message =
        err?.message || JSON.stringify(err) || "Failed to send email";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Email sending error:", error);
    const message = error?.message || String(error) || "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
