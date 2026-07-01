# Pro4Ex Logo Installation Guide

## 📍 AKTUELLE SITUATION

Die Assets-Ordnerstruktur wurde erstellt:

```
Pro4Ex-CI-Templates/
└── 04-Assets/
    └── images/
        └── logo/  ← Logo-Dateien gehören hier hin
```

Die HTML-Datei wurde aktualisiert, um auf lokale Logo-Dateien zu verweisen:
- `index-ci-optimiert.html` sucht nach: `assets/images/logo/`

---

## 🎯 NÄCHSTE SCHRITTE

### OPTION 1: Logo von pro4ex.consulting downloaden (EMPFOHLEN)

**Logo-URL:**
```
https://pro4ex.consulting/wp-content/uploads/2023/09/Weiss-zentriert-Web-Page-Logo.png
```

**Schritte:**
1. Öffne die URL oben in deinem Browser
2. Klick Rechts → "Bild speichern unter"
3. Speichern als: `pro4ex-logo-full.png`
4. Kopiere die Datei nach: `Pro4Ex-CI-Templates/04-Assets/images/logo/`

---

### OPTION 2: Verschiedene Größen erstellen

Nachdem du `pro4ex-logo-full.png` gespeichert hast, erstelle die anderen Größen:

**Mit Windows (Paint / Photoshop):**
1. Öffne `pro4ex-logo-full.png`
2. Speichere als → Größe anpassen:
   - 400×400px → `pro4ex-logo-medium.png`
   - 200×200px → `pro4ex-logo-small.png`
   - 32×32px → `pro4ex-logo-favicon.png`

**Mit Linux/Mac (ImageMagick):**
```bash
cd Pro4Ex-CI-Templates/04-Assets/images/logo/

# WebP Version (optional, für moderne Browser)
cwebp pro4ex-logo-full.png -o pro4ex-logo-full.webp

# Verschiedene Größen
convert pro4ex-logo-full.png -resize 400x400 pro4ex-logo-medium.png
convert pro4ex-logo-full.png -resize 200x200 pro4ex-logo-small.png
convert pro4ex-logo-full.png -resize 32x32 pro4ex-logo-favicon.png
```

**Mit Online-Tools:**
- https://tinypng.com (Kompression)
- https://www.iloveimg.com/resize-image (Größenänderung)
- https://convertio.co (Format-Konvertierung)

---

## 📁 FINALE ORDNERSTRUKTUR

Nach der Installation sollte es so aussehen:

```
Pro4Ex-CI-Templates/
└── 04-Assets/
    └── images/
        └── logo/
            ├── pro4ex-logo-full.png       (841×646px) ← ORIGINAL
            ├── pro4ex-logo-full.webp      (WebP Version)
            ├── pro4ex-logo-medium.png     (400×400px)
            ├── pro4ex-logo-small.png      (200×200px)
            └── pro4ex-logo-favicon.png    (32×32px)
```

---

## 🌐 HTML INTEGRATION

Die `index-ci-optimiert.html` referenziert jetzt die Logos so:

```html
<!-- Favicon im Header -->
<link rel="icon" href="assets/images/logo/pro4ex-logo-favicon.png" sizes="32x32">

<!-- Logo im Header -->
<img src="assets/images/logo/pro4ex-logo-medium.png" alt="Pro4Ex Consulting">

<!-- Mit WebP Fallback (modern approach) -->
<picture>
  <source srcset="assets/images/logo/pro4ex-logo-full.webp" type="image/webp">
  <img src="assets/images/logo/pro4ex-logo-full.png" alt="Pro4Ex Consulting">
</picture>
```

---

## 🚀 GitHub Upload

Nachdem alle Logos installiert sind:

```bash
# Navigiere zum Ordner
cd Pro4Ex-CI-Templates/

# Erstelle Git Repository
git init
git add .
git commit -m "Initial commit: Pro4Ex CI Templates with Assets"
git push origin main
```

**GitHub-Struktur:**
```
pro4ex-website/
├── index.html              # Deine Website
├── assets/                 # NEUE Assets
│   └── images/
│       └── logo/
│           ├── pro4ex-logo-full.png
│           ├── pro4ex-logo-medium.png
│           ├── pro4ex-logo-small.png
│           └── pro4ex-logo-favicon.png
├── 01-PowerPoint/          # Templates
├── 02-HTML-CSS/
├── 03-CI-Documentation/
└── README.md
```

---

## ✅ CHECKLIST

- [ ] Logo heruntergeladen
- [ ] Logo in `04-Assets/images/logo/` gespeichert
- [ ] Verschiedene Größen erstellt
- [ ] HTML-Datei kopiert/aktualisiert
- [ ] Lokale Tests durchgeführt (Browser-Tab Favicon anschauen)
- [ ] Auf GitHub hochgeladen
- [ ] GitHub Pages aktiviert
- [ ] Website ist live!

---

## 🔧 TROUBLESHOOTING

### Favicon wird nicht angezeigt
- Cache leeren: `Ctrl+F5` (Windows) / `Cmd+Shift+R` (Mac)
- Browser-Neustart
- SVG statt PNG versuchen

### Logo ist unscharfgeteilt
- Größere Datei verwenden (nicht zu klein skalieren)
- PNG statt WebP versuchen

### Pfade funktionieren nicht
- Sicherstellen, dass Ordnerstruktur korrekt ist:
  ```
  assets/images/logo/pro4ex-logo-*.png
  ```
- Relative Pfade verwenden (wie oben gezeigt)

---

## 📧 FRAGEN?

Kontakt: jan.michaelsen@pro4ex.consulting

---

**Zuletzt aktualisiert:** 27. Juni 2026
