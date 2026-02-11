import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    return new Response(
      JSON.stringify({ error: 'Configuration contact manquante (RESEND_API_KEY / CONTACT_EMAIL).' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = (await request.json()) as { name?: string; email?: string; message?: string };
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Nom, email et message sont requis.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: 'Contact Site <onboarding@resend.dev>',
    to: toEmail,
    replyTo: email,
    subject: `Contact site CV — ${name}`,
    html: `<p><strong>De :</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p><strong>Message :</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Envoi impossible. Réessayez plus tard.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
