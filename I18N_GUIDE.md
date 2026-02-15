# Guide d'utilisation i18n pour Astro

## Configuration mise en place

Votre site Astro est maintenant configuré en multilingue avec 3 langues :
- **FR** (Français) - langue par défaut, sans préfixe dans l'URL
- **EN** (English) - préfixe `/en/`
- **DE** (Deutsch) - préfixe `/de/`

## Structure des fichiers

```
src/
├── i18n/
│   ├── ui.ts          # Dictionnaires de traduction
│   └── utils.ts       # Fonctions helper (getLangFromUrl, useTranslations)
├── pages/
│   ├── index.astro    # Version FR (par défaut)
│   ├── en/
│   │   └── index.astro # Version EN
│   └── de/
│       └── index.astro # Version DE
└── components/
    └── LanguagePicker.astro # Sélecteur de langue
```

## URLs générées

- Français : `https://votresite.com/`
- Anglais : `https://votresite.com/en/`
- Allemand : `https://votresite.com/de/`

## Comment utiliser les traductions dans vos pages

### 1. Utilisation de base

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.subtitle')}</h1>
<p>{t('hero.location')}</p>
```

### 2. Ajouter le sélecteur de langue

Ajoutez ce composant dans votre navigation :

```astro
---
import LanguagePicker from '../components/LanguagePicker.astro';
---

<nav>
  <!-- Votre navigation existante -->
  <LanguagePicker />
</nav>
```

### 3. Ajouter de nouvelles traductions

Dans `src/i18n/ui.ts`, ajoutez vos clés de traduction :

```typescript
export const ui = {
  fr: {
    'my.new.key': 'Ma nouvelle traduction',
  },
  en: {
    'my.new.key': 'My new translation',
  },
  de: {
    'my.new.key': 'Meine neue Übersetzung',
  },
} as const;
```

## Organisation recommandée des pages

### Pour une page simple (ex: à propos)

```
src/pages/
├── about.astro        # Version FR
├── en/
│   └── about.astro    # Version EN
└── de/
    └── about.astro    # Version DE
```

### Pour des pages dynamiques

```
src/pages/
├── blog/
│   └── [slug].astro   # Version FR
├── en/
│   └── blog/
│       └── [slug].astro # Version EN
└── de/
    └── blog/
        └── [slug].astro # Version DE
```

## API Routes multilingues

Si vous avez des routes API (comme `/api/chat`), elles restent indépendantes des langues :

```
src/pages/
└── api/
    ├── chat.ts
    └── contact.ts
```

## Détection automatique de la langue

Astro gère automatiquement :
- La langue via `Astro.currentLocale`
- Les redirections selon la structure des dossiers
- Le sitemap multilingue (si configuré)

## Balises HTML lang

N'oubliez pas de mettre à jour l'attribut `lang` dans vos fichiers :

```html
<!-- index.astro (FR) -->
<html lang="fr">

<!-- en/index.astro -->
<html lang="en">

<!-- de/index.astro -->
<html lang="de">
```

## Liens internes

Pour créer des liens vers d'autres pages, utilisez toujours les chemins complets :

```astro
---
const lang = getLangFromUrl(Astro.url);
const prefix = lang === 'fr' ? '' : `/${lang}`;
---

<a href={`${prefix}/about`}>À propos</a>
```

## SEO - Balises hreflang

Ajoutez ces balises dans le `<head>` de vos pages pour le SEO multilingue :

```astro
---
const currentPath = Astro.url.pathname.replace(/^\/(en|de)/, '') || '/';
---

<head>
  <link rel="alternate" hreflang="fr" href={`https://votresite.com${currentPath}`} />
  <link rel="alternate" hreflang="en" href={`https://votresite.com/en${currentPath}`} />
  <link rel="alternate" hreflang="de" href={`https://votresite.com/de${currentPath}`} />
  <link rel="alternate" hreflang="x-default" href={`https://votresite.com${currentPath}`} />
</head>
```

## Prochaines étapes

1. ✅ Ajoutez le `<LanguagePicker />` dans votre navigation
2. ✅ Vérifiez que les balises `lang` sont correctes dans chaque page
3. ✅ Testez les 3 versions : `/`, `/en/`, `/de/`
4. ✅ Ajoutez les balises hreflang pour le SEO
5. ✅ Créez d'autres pages si nécessaire dans chaque dossier de langue

## Commandes utiles

```bash
# Développement
npm run dev

# Build
npm run build

# Preview
npm run preview
```

Votre site devrait maintenant être accessible en 3 langues !
