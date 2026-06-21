export interface ContactFormPayload {
  name: string;
  user_email: string;
  message: string;
  company: string;
  service: string;
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = process.env.MAIL_PORTER_API_KEY;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
  const apiUrl =
    process.env.MAIL_PORTER_API_URL ??
    'https://mail-porter-navy.vercel.app/api/email/send-email/gmail';
  const brand = process.env.MAIL_PORTER_BRAND ?? 'irb_technology';

  if (!apiKey) {
    throw new Error('MAIL_PORTER_API_KEY is not configured');
  }

  if (!recipientEmail) {
    throw new Error('CONTACT_RECIPIENT_EMAIL is not configured');
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      name: payload.name,
      email: recipientEmail,
      user_email: payload.user_email,
      message: payload.message,
      company: payload.company,
      service: payload.service,
      brand,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email send failed (${response.status}): ${text}`);
  }

  return response.json();
}
