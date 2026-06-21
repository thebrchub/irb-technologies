export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name,
      user_email: data.email,
      company: data.company,
      service: data.service,
      message: data.message,
    }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? 'Failed to submit form');
  }
}
