# Migration i18n - Récapitulatif et prochaines étapes

## ✅ Ce qui a été fait

### 1. Configuration Astro
- ✅ `astro.config.mjs` modifié avec la configuration i18n
  - defaultLocale: 'fr'
  - locales: ['fr', 'en', 'de']
  - prefixDefaultLocale: false (FR sans préfixe)

### 2. Fichiers i18n créés
- ✅ `src/i18n/ui.ts` - Dictionnaire de traductions
- ✅ `src/i18n/utils.ts` - Fonctions helper (getLangFromUrl, useTranslations)

### 3. Composants créés
- ✅ `src/components/LanguagePicker.astro` - Sélecteur de langue

### 4. Layout de base créé
- ✅ `src/layouts/BaseLayout.astro` - Layout avec SEO multilingue (hreflang)

### 5. Documentation
- ✅ `I18N_GUIDE.md` - Guide complet d'utilisation
- ✅ `EXEMPLE_PAGE.astro` - Exemple de page multilingue

## 📋 Structure actuelle des pages

```
src/pages/
├── index.astro       ✅ Version FR (existe)
├── en/
│   └── index.astro   ✅ Version EN (existe)
└── de/
    └── index.astro   ✅ Version DE (existe)
```

## 🚀 Prochaines étapes

### 1. Intégrer le sélecteur de langue dans vos pages existantes

Ouvrez `src/pages/index.astro` et ajoutez le composant LanguagePicker dans votre navigation :

```astro
---
import LanguagePicker from '../components/LanguagePicker.astro';
---

<nav class="nav" id="main-nav">
  <button type="button" class="nav-menu-btn">MENU</button>
  <a href="#hero" class="nav-logo">CORENTIN BOISSELIER</a>
  
  <!-- Ajoutez le sélecteur de langue ici -->
  <div style="display: flex; gap: 20px; align-items: center;">
    <LanguagePicker />
    <button type="button" class="nav-contact-btn">CONTACT</button>
  </div>
</nav>
```

Répétez pour `/en/index.astro` et `/de/index.astro`.

### 2. Vérifier les balises HTML lang

Assurez-vous que chaque page a la bonne balise `lang` :

- `src/pages/index.astro` : `<html lang="fr">`
- `src/pages/en/index.astro` : `<html lang="en">`
- `src/pages/de/index.astro` : `<html lang="de">`

### 3. Ajouter les balises hreflang pour le SEO

Dans le `<head>` de chaque page, ajoutez :

```astro
<head>
  <!-- ... autres balises ... -->
  
  <!-- SEO multilingue -->
  <link rel="alternate" hreflang="fr" href="https://votresite.com/" />
  <link rel="alternate" hreflang="en" href="https://votresite.com/en/" />
  <link rel="alternate" hreflang="de" href="https://votresite.com/de/" />
  <link rel="alternate" hreflang="x-default" href="https://votresite.com/" />
</head>
```

> **Note** : Remplacez `https://votresite.com` par votre vraie URL de production.

### 4. Tester le site

```bash
npm run dev
```

Visitez :
- `http://localhost:4321/` → Version française
- `http://localhost:4321/en/` → Version anglaise
- `http://localhost:4321/de/` → Version allemande

### 5. Créer d'autres pages (optionnel)

Si vous avez d'autres pages à créer (À propos, Contact, etc.), suivez cette structure :

```
src/pages/
├── about.astro        # FR
├── contact.astro      # FR
├── en/
│   ├── about.astro    # EN
│   └── contact.astro  # EN
└── de/
    ├── about.astro    # DE
    └── contact.astro  # DE
```

### 6. Utiliser les traductions dans vos pages

Exemple d'utilisation dans une page :

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.subtitle')}</h1>
<p>{t('hero.location')}</p>
```

### 7. Ajouter de nouvelles traductions

Dans `src/i18n/ui.ts`, ajoutez vos clés :

```typescript
export const ui = {
  fr: {
    'about.title': 'À propos de moi',
    // ... autres clés
  },
  en: {
    'about.title': 'About me',
    // ... autres clés
  },
  de: {
    'about.title': 'Über mich',
    // ... autres clés
  },
} as const;
```

## 📁 Fichiers à consulter

1. **Guide complet** : `I18N_GUIDE.md`
2. **Exemple de page** : `EXEMPLE_PAGE.astro`
3. **Layout de base** : `src/layouts/BaseLayout.astro`
4. **Dictionnaire** : `src/i18n/ui.ts`
5. **Utils** : `src/i18n/utils.ts`

## 🔧 Configuration du chatbot (API)

Si votre chatbot doit détecter la langue, ajoutez un paramètre `lang` dans la requête :

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    message: text.trim(), 
    history: chatHistory.slice(-20),
    lang: 'fr' // ou 'en' ou 'de'
  }),
})
```

Votre API `src/pages/api/chat.ts` pourra alors adapter la réponse selon la langue.

## 🎯 URLs finales

Votre site sera accessible via :
- `https://votresite.com/` → Français (par défaut)
- `https://votresite.com/en/` → Anglais
- `https://votresite.com/de/` → Allemand

## ⚠️ Important

- **Commit votre code** : N'oubliez pas de commit vos modifications
- **Testez en local** : Vérifiez que tout fonctionne avant de déployer
- **Mettez à jour Vercel** : Redéployez sur Vercel après vos modifications

## 🤝 Besoin d'aide ?

Consultez :
1. `I18N_GUIDE.md` - Guide détaillé d'utilisation
2. [Documentation Astro i18n](https://docs.astro.build/en/guides/internationalization/)
3. Exemple fourni dans `EXEMPLE_PAGE.astro`

---

**Votre site est maintenant prêt pour le multilingue !** 🎉
