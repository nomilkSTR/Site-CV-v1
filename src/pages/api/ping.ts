import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ ok: true, app: 'mon_site' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
