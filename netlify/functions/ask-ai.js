// Serveur IA sécurisé : la clé API reste sur Netlify (variable ANTHROPIC_API_KEY), jamais dans le navigateur.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Méthode non autorisée' };
  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: '{"error":"JSON invalide"}' }; }
  const question = String(body.question || '').slice(0, 2000);
  if (!question.trim()) return { statusCode: 400, body: '{"error":"Question vide"}' };

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-5-5',
        max_tokens: 1024,
        system: String(body.system || 'Tu es un professeur du secondaire camerounais. Réponds en français.'),
        messages: [{ role: 'user', content: question }]
      })
    });
    const data = await r.json();
    const answer = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n')
      || "Désolé, je n'ai pas pu répondre. Réessaie.";
    return { statusCode: r.ok ? 200 : 502, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answer }) };
  } catch (e) {
    return { statusCode: 502, headers: { 'Content-Type': 'application/json' }, body: '{"answer":"Le serveur IA est indisponible pour le moment."}' };
  }
};
