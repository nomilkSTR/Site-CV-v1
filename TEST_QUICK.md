# 🚀 Test Rapide - Sélecteur de langue

## ⚡ Lancement rapide

```bash
cd "C:\Users\Famille\Desktop\mon_site"
npm run dev
```

Ouvrez : `http://localhost:4321`

## ✅ Checklist de test (5 min)

### 1. Navigation visible
- [ ] Le sélecteur **FR | EN | DE** apparaît à droite, avant CONTACT
- [ ] Les 3 langues sont séparées par des lignes verticales subtiles
- [ ] La langue FR est en **couleur dorée** (#c8a96e)

### 2. Interactions hover
- [ ] Survolez **EN** → Le texte devient blanc + soulignement doré apparaît
- [ ] Survolez **DE** → Le texte devient blanc + soulignement doré apparaît
- [ ] Les transitions sont **fluides** (0.3s)

### 3. Changement de langue
- [ ] Cliquez sur **EN** → URL devient `/en/` et page change en anglais
- [ ] EN devient **doré** (langue active)
- [ ] Cliquez sur **DE** → URL devient `/de/` et page change en allemand
- [ ] DE devient **doré** (langue active)
- [ ] Cliquez sur **FR** → URL redevient `/` et page change en français
- [ ] FR redevient **doré** (langue active)

### 4. Responsive mobile
- [ ] Réduisez la largeur du navigateur < 640px
- [ ] Le sélecteur reste visible et fonctionnel
- [ ] L'espacement est optimisé pour mobile

### 5. Scroll
- [ ] Scrollez vers le bas
- [ ] La navigation reste **fixe** en haut
- [ ] Le sélecteur reste **toujours visible**
- [ ] Le fond devient opaque avec blur

## 🎨 Aperçu visuel attendu

### État normal
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [≡ MENU]            CORENTIN BOISSELIER            FR│EN│DE  [CONTACT] │
└─────────────────────────────────────────────────────────────────────────┘
     ↑                        ↑                         ↑         ↑
   Gauche                  Centre                  Sélecteur   Droite
```

### État hover sur "EN"
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [≡ MENU]            CORENTIN BOISSELIER            FR│EN│DE  [CONTACT] │
│                                                          ──              │
└─────────────────────────────────────────────────────────────────────────┘
                                                          ↑
                                              Soulignement doré
```

### Page anglaise (/en/)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [≡ MENU]            CORENTIN BOISSELIER            FR│EN│DE  [CONTACT] │
│                                                          ──              │
└─────────────────────────────────────────────────────────────────────────┘
                                                          ↑
                                              EN en couleur dorée + souligné
```

## 🐛 Problèmes possibles

### Le sélecteur n'apparaît pas
**Solution** : Vérifiez que vous êtes bien dans le bon dossier
```bash
pwd  # Doit afficher: C:\Users\Famille\Desktop\mon_site
```

### Les langues ne changent pas
**Solution** : Vérifiez la console du navigateur (F12)
- Pas d'erreurs JavaScript ?
- Les fichiers sont bien dans `/en/` et `/de/` ?

### Le style ne correspond pas
**Solution** : Videz le cache du navigateur (Ctrl + Shift + R)

### Erreur 404 sur /en/ ou /de/
**Solution** : Vérifiez que les fichiers existent
```bash
ls src/pages/en/index.astro
ls src/pages/de/index.astro
```

## 🎯 Résultat attendu

Après ces tests, vous devriez avoir :

✅ Un sélecteur de langue **élégant et discret**
✅ Des **animations fluides** au hover
✅ Un **changement de langue instantané**
✅ Un design **cohérent** avec votre site (style Bugatti)
✅ Une navigation **responsive** qui fonctionne sur mobile

## 📱 Test sur mobile (optionnel)

### Option 1 : Mode responsive du navigateur
1. F12 (outils développeur)
2. Cliquez sur l'icône mobile 📱
3. Sélectionnez iPhone ou Android
4. Testez le sélecteur

### Option 2 : Sur votre téléphone
1. Trouvez votre IP locale : `ipconfig` (Windows)
2. Ouvrez `http://[VOTRE-IP]:4321` sur votre téléphone
3. Testez le sélecteur

## ⏱️ Temps estimé

- **Installation** : 30 secondes
- **Test complet** : 5 minutes
- **Test mobile** : 2 minutes

**Total** : ~7-8 minutes

## 🆘 Besoin d'aide ?

Consultez les fichiers :
- `IMPLEMENTATION_MULTILINGUE.md` → Guide complet
- `I18N_GUIDE.md` → Documentation i18n
- `MIGRATION_I18N.md` → Plan de migration

---

**Tout fonctionne ? Passez au déploiement !** 🚀

```bash
git add .
git commit -m "feat: add multilingual language selector (FR/EN/DE)"
git push
```
