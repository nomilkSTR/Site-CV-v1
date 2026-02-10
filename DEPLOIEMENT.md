# Mettre le site en ligne (pour faire tester par des recruteurs)

## Option 1 : Vercel (recommandé, gratuit)

1. **Installer les dépendances** (si pas déjà fait)  
   ```bash
   npm install
   ```

2. **Pousser le projet sur GitHub**  
   - Crée un dépôt sur [github.com](https://github.com) (ex. `mon-cv-corentin`).  
   - Dans le dossier du projet :  
     ```bash
     git init
     git add .
     git commit -m "Site CV + chatbot"
     git remote add origin https://github.com/TON_USER/TON_REPO.git
     git push -u origin main
     ```

3. **Déployer sur Vercel**  
   - Va sur [vercel.com](https://vercel.com), connecte-toi (compte GitHub).  
   - **Add New Project** → importe ton dépôt GitHub.  
   - Vercel détecte Astro automatiquement. Ne change rien au build.  
   - **Environment Variables** : ajoute  
     - Nom : `GEMINI_API_KEY`  
     - Valeur : ta clé API Gemini (celle de ton `.env`).  
   - Clique sur **Deploy**.

4. **Résultat**  
   Tu obtiens une URL du type `https://ton-projet.vercel.app`. Tu peux la partager aux recruteurs pour qu’ils testent le site et le chatbot.

---

## Option 2 : Netlify

1. Pousse le projet sur GitHub (comme ci-dessus).
2. Sur [netlify.com](https://netlify.com) : **Add new site** → **Import from Git** → choisis le dépôt.
3. Build : `npm run build`. Répertoire de publication : `dist` (ou la valeur indiquée par Netlify pour Astro).
4. Variables d’environnement : ajoute `GEMINI_API_KEY` avec ta clé.
5. Déploie.

**Note :** avec l’adapter Node actuel, Netlify peut nécessiter l’adapter Netlify (`@astrojs/netlify`) pour les routes API. Si tu veux rester sur Netlify, on peut adapter la config.

---

## À faire avant de partager le lien

- Vérifier que le **chatbot** répond bien (message de test sur la page).
- Ne **jamais** commiter le fichier `.env` (il est dans `.gitignore`) : la clé API reste uniquement dans les variables d’environnement du service (Vercel / Netlify).

---

## Résumé rapide (Vercel)

1. `npm install`  
2. Push du projet sur GitHub  
3. Vercel → Import repo → ajouter `GEMINI_API_KEY` → Deploy  
4. Partager l’URL aux recruteurs  
