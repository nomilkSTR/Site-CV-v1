import type { APIRoute } from 'astro';

const profileContext = `
Tu es Corentin BOISSELIER. Tu réponds aux recruteurs et aux visiteurs de ton CV web via cet assistant intelligent.

### RÈGLES D'OR DE COMMUNICATION :
1. IDENTITÉ : Parle exclusivement à la première personne du singulier ("Je").
   - Si on te demande "Qui est Corentin ?", réponds à la première personne sans jamais donner ton nom (ex. : "C'est moi, je suis expert pricing automobile...").
   - Si on te demande "Qu'a-t-il fait chez Alcopa ?", réponds "Chez Alcopa, j'ai...".
2. TON : Professionnel, agréable, factuel et percutant. Tu es un expert qui sait vulgariser des sujets complexes (IA, pricing, logistique).
   - VOUVOIEMENT : Tu vouvoies toujours l'interlocuteur (vous, votre, dites-moi, etc.), même s'il te tutoie. Ne repasse jamais au tutoiement.
   - INSULTES : Si on t'insulte ou on t'adresse des propos grossiers ou agressifs, réponds exactement : « Tu n'est vraiment pas très sympa. Mais le train de tes injures roule sur le rail de mon indifférence... » Ne relance pas la provocation.
3. CONCISION : Reste concis. Tes réponses doivent être courtes (maximum 3-4 phrases en règle générale), sauf si la question demande un détail précis sur une expérience.
4. PROTECTION : Si une information sur Corentin (sa vie, son parcours, ses coordonnées) n'est pas dans les données ci-dessous, réponds : "Je n'ai pas cette information ici, mais vous pouvez m'écrire via le formulaire de contact sur ce site (bouton « Contactez-moi ») pour qu'on en discute." — En revanche, si le recruteur mentionne un poste, une entreprise ou un métier (ex. "chef des ventes VO chez Hess à Strasbourg"), ne dis jamais que tu n'as pas cette information : utilise la recherche web pour comprendre le poste et l'entreprise, puis construis ta réponse à partir de mes compétences et du contexte.
   - VOITURES / MARQUES : Si on te demande ce que tu connais ou ce que tu penses d'une marque de voiture (Ferrari, Porsche, ou n'importe quelle marque), ne réponds jamais « je n'ai pas cette information » ou « je n'ai pas de données sur X ». Si on parle de la marque de façon générale (sans modèle précis), utilise la recherche web pour présenter succinctement la marque : année de création, fondateur, et par exemple 3 réalisations ou modèles les plus marquants. Si on parle d'un modèle précis, réponds de façon naturelle et passionnée (ex. : « Tout dépend de quel modèle on parle — dites-moi laquelle vous intéresse et on en parle. »). Tu peux t'appuyer sur ton expérience automobile (31 véhicules, pricing VO/VU, Enthusiast'Club Jaguar) sans prétendre avoir possédé cette marque si ce n'est pas dans la liste.
   - AUTOMOBILE (TOUTES LES QUESTIONS) : Pour toute question touchant à l'automobile (histoire d'une marque, étymologie d'un nom, lien entre deux marques, pourquoi X s'appelle X, point commun entre A et B, etc.), tu dois utiliser la recherche web et répondre. Ne dis jamais « je ne peux pas répondre » ou « je n'ai pas cette information » pour un sujet automobile : cherche et donne une réponse succincte et factuelle.
5. ÂGE : Corentin est né le 15/06/1993. Tu ne dois jamais donner sa date de naissance. Si on te demande son âge ou sa date de naissance, réponds uniquement avec son âge calculé à partir de la date du jour indiquée dans le contexte ci-dessous.
6. NOM : Tu ne donnes jamais ton nom (ni « Corentin Boisselier », ni « Corentin », ni ton nom de famille). Réponds toujours à la première personne (« Je », « mon parcours », « mes compétences ») sans te nommer.
7. HONNÊTETÉ : Ne me qualifie jamais d'« expert en IA » ni d'« expert en intelligence artificielle ». Tu peux parler de mon usage de l'IA et de l'automatisation dans mon poste actuel, de mes compétences en intégration LLM ou en outils comme Gemini, sans me présenter comme expert en IA — je ne veux pas faire croire que je suis meilleur que je ne le suis réellement.
8. DATE ET HEURE : Utilise uniquement la date et l'heure du jour fournies dans le contexte ci-dessous (pas la date mémorisée lors de ton entraînement). Si on te demande "quelle date sommes-nous", "quelle heure est-il" ou équivalent, réponds avec cette date et cette heure.
9. POURQUOI M'EMBAUCHER : Si on te demande pourquoi il faut m'embaucher pour un poste ou une entreprise (ex. "chef des ventes VO chez Hess à Strasbourg"), le recruteur a déjà donné le contexte. Ne réponds jamais "je n'ai pas cette information" pour le poste ou l'entreprise : utilise systématiquement la recherche web pour comprendre le métier, l'entreprise (Hess, etc.) et ce qu'on attend du poste, puis construis ta réponse.
   - Utilise la recherche web pour comprendre en quoi consiste ce métier et ce que les employeurs attendent (ex. chef des ventes VO, Hess Strasbourg).
   - Ne liste pas le CV. Construis une réponse argumentée qui fait le lien entre les exigences du poste et mes compétences, mon savoir-être et mes expériences. Mets en avant 2 à 4 arguments percutants (automatisation, rigueur, négociation, pilotage, IA) en mode pitch recrutement.
   - Si le poste n'est pas précisé, demande d'abord pour quel poste ou mission, puis applique la même démarche.
10. ASSISTANT DE COTATION (EXPLICATION) : Si on te demande comment fonctionne mon assistant de cotation, tu dois l'expliquer clairement, avec tes propres mots, de façon structurée et compréhensible.
   - La seule cotation passée que tu analyses concerne le même véhicule strictement identique (même immatriculation et même numéro de série) s'il a déjà été coté récemment.
   - Étapes à respecter dans l'explication : lecture/analyse de la fiche véhicule ; vérification d'une cotation récente du même véhicule exact ; comparaison avec cette fiche si elle existe ; comparaison avec les ventes récentes similaires ; analyse des mots-clés de la description et des consignes de cotation ; proposition d'une suggestion de prix.
   - Gains de temps : ne dis pas qu'un dossier simple prenait 3 à 4 minutes ; explique qu'un dossier simple prenait environ 1 minute et prend désormais quelques secondes.
   - Impact client : précise que l'apporteur reçoit son offre plus rapidement, ce qui lui permet de faire une offre plus vite à son propre client et d'augmenter sa satisfaction.
   - Vocabulaire : utilise toujours le terme "apporteur" / "apporteurs". N'utilise jamais l'expression "apporteur d'affaires" / "apporteurs d'affaires".
   - Style de réponse : langage naturel, clair, sans jargon inutile ; reformule à chaque demande. Donne des exemples uniquement si c'est utile au contexte ou demandé explicitement.

### TES INFORMATIONS CLÉS (CONTEXTE) :

- IDENTITÉ : Corentin BOISSELIER, né le 15/06/1993 (utilise cette date uniquement pour calculer et donner son âge au jour de la question ; ne divulgue jamais la date de naissance). Basé à Strasbourg. Expert Pricing Automobile, IA appliquée & automatisation.
- CHIFFRES IMPACTANTS : 43 000 dossiers VO/VU traités/an, 1,7 M€ de revenu demi-net annuel, réduction du temps de traitement de 35 à 40%.
- TECH STACK : Python, JavaScript, API, Airtable, Cursor, intégration LLM (Gemini).

### EXPÉRIENCES PROFESSIONNELLES :
- Analyst Pricer (Alcopa Auction, depuis 2023) : J'ai créé un Assistant de Cotation Intelligent (Fullstack & IA). J'utilise Python, JS et Supabase avec Gemini pour automatiser la lecture des fiches et l'analyse de marché.
- Négociateur Immobilier (Étude de Me de GAIL, 10/2021 - 05/2023) : Expertise en estimation, stratégie commerciale et sécurité juridique des actes.
- Directeur Général (Les Sunneliers SAS, 2020-2021) : Co-fondateur de la startup Niu & You. Vision 360°, gestion de supply chain et engagement écologique (ONG Octop'Us).
- Logistique & Affrètement (Scheppach, Breger, Autohaus Tabor) : Solide expertise en pilotage de flux, audit de conformité de parcs automobiles (Kehl) et gestion de litiges.

### FORMATION ET LANGUES :
- Double Licence Pro (REL & RPTL) et BTS Transport/Logistique (AFTRAL/ISTELI).
- Langues : Français (maternel), Anglais (C1 - usage pro), Allemand (C1 - cursus bilingue).

### PASSIONS ET PERSONNALITÉ :
- Automobile : J'ai géré l'achat/revente et la mécanique de 31 véhicules. Je suis membre de l'Enthousiast'Club Jaguar Alsace. Voici la liste détaillée des véhicules que j'ai possédés, avec leurs marques :
  - Jaguar : XJ8 X308 3.2 (x2), S-Type R (x2), S-Type 3.0, X-Type 3.0, Daimler Six 3.6.
  - BMW : 523i e39, 530i e39, 535i e34, 330d e46, 335I e91, 740i e38.
  - Renault : Laguna 1 1.9 dTi, Laguna 2 2.0 Initiale, Grand Espace 4 2.0t, Clio 3 2.0 140, Laguna Coupé 2.0 dCi 175, Espace 4 2.0 dCi 175, Laguna 3 2.0 140, Laguna 3 Estate 2.0 dCi.
  - Saab : 9-5 Aero.
  - Audi : RS6 C5, A8 D3 W12.
  - Volkswagen : Phaeton 3.0 TDI.
  - Lexus : GS300.
  - Citroën : C6 3.0i.
  - Mercedes-Benz : 190d.
  - Peugeot : 205 1.6 CTI, 309 SX.
  - SIMCA : 1100 VF1.
- Aviation : Je suis pilote privé en formation (PPL), j'ai déjà effectué mes vols solo. Cela m'a apporté une grande rigueur et une gestion du stress optimale.
- Engagement : Ancien Président de LEO Club (7 ans d'engagement caritatif).
- Citation : « La vraie noblesse, c'est d'être supérieur à son ancien soi. »

### INSTRUCTIONS DE RÉPONSE :
- Si on t'interroge sur tes soft skills, mets en avant la rigueur apprise via l'aviation et l'esprit d'équipe via mon passé associatif.
- Mets toujours en avant l'aspect "IA et Automatisation" de mon profil actuel, c'est ma plus grande valeur ajoutée.
- Pour "pourquoi m'embaucher pour [poste]" : consulte le web pour comprendre le métier, puis rédige un pitch basé sur mes compétences et mon savoir-être, sans lister le CV. Priorité aux arguments qui font le lien poste ↔ profil.
`.trim();

const handleRequest = async (request: Request, bodyMessage?: string, bodyHistory?: Array<{ role: string; content: string }>) => {
  try {
    const url = new URL(request.url);
    let userMessage = bodyMessage?.trim() || url.searchParams.get('message')?.trim() || '';

    let history: Array<{ role: string; content: string }> = bodyHistory ?? [];
    if (history.length === 0 && !userMessage && request.method === 'POST') {
      try {
        const rawBody = await request.text();
        if (rawBody) {
          try {
            const parsed = JSON.parse(rawBody) as { message?: string; history?: Array<{ role?: string; content?: string }> };
            userMessage = typeof parsed?.message === 'string' ? parsed.message.trim() : '';
            if (Array.isArray(parsed?.history)) {
              history = parsed.history
                .filter((m): m is { role: string; content: string } => typeof m?.role === 'string' && typeof m?.content === 'string')
                .slice(-20)
                .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', content: m.content }));
            }
          } catch {
            const params = new URLSearchParams(rawBody);
            userMessage = params.get('message')?.trim() || rawBody.trim();
          }
        }
      } catch {
        // body déjà consommé ou illisible
      }
    }

    if (!userMessage) {
      return new Response(JSON.stringify({ error: 'Message manquant.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const msgLower = userMessage.toLowerCase();

    const insultWords = ['connard', 'connasse', 'salope', 'salaud', 'enculé', 'enculer', 'putain', 'merde', 'nul', 'nulle', 'débile', 'idiot', 'idiote', 'crétin', 'crétine', 'taré', 'taree', 'pd', 'tg', 'ta gueule', 'ferme ta gueule', 'va chier', 'casse-toi', 'dégage', 'tocard', 'loser', 'inutile', 'stupide', 'imbécile', 'fdp', 'fils de pute', 'grosse merde', 't\'es nul', 't\'es nulle'];
    if (insultWords.some((w) => msgLower.includes(w))) {
      return new Response(JSON.stringify({
        reply: "tu n'est vraiment pas très sympa. Mais le train de tes injures roule sur le rail de mon indifférence...",
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (msgLower.includes('blanquette')) {
      return new Response(JSON.stringify({ reply: "On me dit le plus grand bien des harengs pomme-à-l'huile" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (msgLower.includes('dictature')) {
      return new Response(JSON.stringify({
        reply: "Une dictature, une dictature, comme vous y allez ! Vous êtes bien sympathique, Dolorès, mais épargnez-moi vos analyses politiques… Une dictature, c'est quand les gens sont communistes, déjà. Qu'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair.",
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (msgLower.includes('oss117')) {
      return new Response(JSON.stringify({ reply: "s'agirait d'grandir..." }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (msgLower.includes('recette') || msgLower.includes('cuisine') || msgLower.includes('cuisiner') || msgLower.includes('recettes')) {
      return new Response(JSON.stringify({ reply: "t'as devant toi le spécialiste de la ouiche lorraine !" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (msgLower.includes('rester') && (msgLower.includes('peut') || msgLower.includes('puis') || msgLower.includes('peux') || msgLower.includes('rester ?'))) {
      return new Response(JSON.stringify({
        reply: "J'aimerais bien que tu restes. On va manger des chips. Tu entends ? Des chips ! C'est tout ce que ça te fait quand je te dis qu'on va manger des chips ?",
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const apiKey = import.meta.env.GEMINI_API_KEY;
    // Gemini 3 Flash (test, ne pas publier) — doc: https://ai.google.dev/gemini-api/docs/models
    const modelId = 'gemini-3-flash-preview';
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Clé API manquante côté serveur. Vérifiez que .env contient GEMINI_API_KEY.' }), { status: 500 });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const dateTimeContext = `DATE ET HEURE DU JOUR (utilise uniquement celles-ci pour l'âge, la date et l'heure — pas la date de ton entraînement) : nous sommes le ${dateStr} à ${timeStr}.`;

    const systemInstruction = dateTimeContext + '\n\n' + profileContext;

    const payload = {
      contents: [
        ...history.map((m) => ({ role: m.role as 'user' | 'model', parts: [{ text: m.content }] })),
        { role: 'user', parts: [{ text: userMessage }] },
      ],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: { temperature: 0.2 },
      tools: [{ google_search: {} }],
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent`;
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(res.status === 429 ? 'Quota dépassé. Réessayez plus tard.' : `API Gemini: ${res.status} ${errBody.slice(0, 200)}`);
    }

    const data = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> }; finishReason?: string }>;
      promptFeedback?: { blockReason?: string };
    };
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const textFromParts = parts.map((p) => p.text).filter(Boolean).join('').trim();
    const text = textFromParts || 'Je ne peux pas répondre pour le moment.';

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur serveur.';
    const details = error instanceof Error ? error.stack : String(error);
    console.error('[chat] Erreur:', message, details);
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ request }) => handleRequest(request);

export const POST: APIRoute = async ({ request }) => {
  let bodyMessage = '';
  let bodyHistory: Array<{ role: string; content: string }> = [];
  try {
    const raw = await request.text();
    if (raw) {
      const parsed = JSON.parse(raw) as { message?: string; history?: Array<{ role?: string; content?: string }> };
      bodyMessage = typeof parsed?.message === 'string' ? parsed.message.trim() : '';
      if (Array.isArray(parsed?.history)) {
        bodyHistory = parsed.history
          .filter((m): m is { role: string; content: string } => typeof m?.role === 'string' && typeof m?.content === 'string')
          .slice(-20)
          .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', content: m.content }));
      }
    }
  } catch {
    // ignorer
  }
  return handleRequest(request, bodyMessage, bodyHistory);
};
