import { sendContactEmail } from './lib/sendContactEmail';

type VercelRequest = {
  method?: string;
  body?: {
    name?: string;
    user_email?: string;
    message?: string;
    company?: string;
    service?: string;
  };
};

type VercelResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, user_email, message, company, service } = req.body ?? {};

  if (!name?.trim() || !user_email?.trim() || !message?.trim() || !company?.trim() || !service?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await sendContactEmail({
      name: name.trim(),
      user_email: user_email.trim(),
      message: message.trim(),
      company: company.trim(),
      service: service.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}
