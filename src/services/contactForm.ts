export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const MAIL_PORTER_API_URL =
  import.meta.env.VITE_MAIL_PORTER_API_URL ??
  'https://mail-porter-navy.vercel.app/api/email/send-email/gmail';

const MAIL_PORTER_API_KEY = import.meta.env.VITE_MAIL_PORTER_API_KEY;

const CONTACT_RECIPIENT_EMAIL =
  import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL ?? 'irbtechnology25@gmail.com';

const MAIL_PORTER_BRAND = import.meta.env.VITE_MAIL_PORTER_BRAND ?? 'irb_technology';

export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (!MAIL_PORTER_API_KEY) {
    throw new Error('Email service is not configured');
  }

  const response = await fetch(MAIL_PORTER_API_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': MAIL_PORTER_API_KEY,
    },
    body: JSON.stringify({
      name: data.name,
      email: CONTACT_RECIPIENT_EMAIL,
      user_email: data.email,
      message: data.message,
      company: data.company,
      service: data.service,
      brand: MAIL_PORTER_BRAND,
    }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
    throw new Error(body.error ?? body.message ?? 'Failed to submit form');
  }
}
