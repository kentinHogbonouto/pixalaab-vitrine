"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

interface SendMailResponse {
  success: boolean;
  message: string;
}

const sendMail = async (data: ContactFormData): Promise<SendMailResponse> => {
  const response = await fetch("/api/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'envoi du message");
  }

  return response.json();
};

export const useSendMail = () => {
  return useMutation({
    mutationFn: sendMail,
    onSuccess: () => {
      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les 24h.",
        duration: 5000,
      });
    },
    onError: () => {
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer ou nous contacter directement.",
        duration: 5000,
      });
    },
  });
};
