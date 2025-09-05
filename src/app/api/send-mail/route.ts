import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validation des données
    if (!data.firstName || !data.lastName || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { success: false, message: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_APP_SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.NEXT_PUBLIC_APP_SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_APP_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_APP_SMTP_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: data.email,
      to: process.env.NEXT_PUBLIC_APP_SMTP_USER,
      subject: `Nouveau message de contact - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom complet:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Entreprise:</strong> ${data.company}</p>` : ''}
            <p><strong>Service souhaité:</strong> ${data.service}</p>
          </div>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site Pixalaab Technologie.</p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact
        
        Nom complet: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        ${data.company ? `Entreprise: ${data.company}` : ''}
        Service souhaité: ${data.service}
        
        Message:
        ${data.message}
        
        Date: ${new Date().toLocaleString('fr-FR')}
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
