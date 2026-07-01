# Pro4Ex Assets - Bilder & Logos

## 📁 Ordnerstruktur

```
04-Assets/
├── images/                 # Bilder und Logos
│   ├── logo/
│   │   ├── pro4ex-logo-full.png      (841x646px) - Hauptlogo
│   │   ├── pro4ex-logo-full.webp     (modern format)
│   │   ├── pro4ex-logo-medium.png    (400x400px) - Mittelgroß
│   │   ├── pro4ex-logo-small.png     (200x200px) - Klein
│   │   └── pro4ex-logo-favicon.png   (32x32px) - Favicon
│   └── screenshots/        # Website-Screenshots
│
├── icons/                  # Icons (zukünftig)
│   └── (z.B. Tabler Icons)
│
├── fonts/                  # Custom Fonts (zukünftig)
│   ├── Roboto-Regular.ttf
│   └── Cambria.ttf
│
└── ASSETS_README.md        # Diese Datei
```

---

## 🏷️ Logo-Dateien

### Hauptlogo (Full Version)
- **pro4ex-logo-full.png** – Originale PNG (841×646px)
- **pro4ex-logo-full.webp** – WebP Format (moderne Browser)
- **Verwendung:** Header, große Flächen, Print

### Medium Logo
- **pro4ex-logo-medium.png** – 400×400px
- **Verwendung:** Social Media, Dokumentationen

### Small Logo
- **pro4ex-logo-small.png** – 200×200px
- **Verwendung:** Favicon, kleine Flächen

### Favicon
- **pro4ex-logo-favicon.png** – 32×32px
- **Verwendung:** Browser-Tab, Lesezeichen

---

## 🔧 Installation des echten Logos

**Das echte Logo wurde von hier heruntergeladen:**
```
URL: https://pro4ex.consulting/wp-content/uploads/2023/09/Weiss-zentriert-Web-Page-Logo.png
```

### Anleitung zum Hinzufügen:

1. **Logo manuell downloaden:**
   - Öffne: https://pro4ex.consulting/wp-content/uploads/2023/09/Weiss-zentriert-Web-Page-Logo.png
   - Speichere als: `pro4ex-logo-full.png`

2. **In den Assets-Ordner kopieren:**
   ```
   04-Assets/images/logo/pro4ex-logo-full.png
   ```

3. **Verschiedene Größen erstellen (mit ImageMagick):**
   ```bash
   # WebP Version
   cwebp pro4ex-logo-full.png -o pro4ex-logo-full.webp
   
   # Kleine Versionen
   convert pro4ex-logo-full.png -resize 400x400 pro4ex-logo-medium.png
   convert pro4ex-logo-full.png -resize 200x200 pro4ex-logo-small.png
   convert pro4ex-logo-full.png -resize 32x32 pro4ex-logo-favicon.png
   ```

4. **In HTML einbinden:**
   ```html
   <!-- Header Logo -->
   <img src="assets/images/logo/pro4ex-logo-full.png" alt="Pro4Ex Consulting" class="logo">
   
   <!-- Favicon -->
   <link rel="icon" href="assets/images/logo/pro4ex-logo-favicon.png" sizes="32x32">
   ```

---

## 📋 Logo-Verwendungsrichtlinien

### ✅ Erlaubt
- Logo mit Padding um Inhalte
- Logo in verschiedenen Größen
- Logo in Graustufen (falls notwendig)
- Logo auf weißem oder dunklem Hintergrund

### ❌ Nicht erlaubt
- Logo verzerren/verformen
- Logo in anderen Farben
- Logo zu klein (<32px)
- Logo zu nah an Text platzieren

### Mindest-Abstände
- Oben: 20px
- Unten: 20px
- Links: 20px
- Rechts: 20px

---

## 🖼️ Screenshot-Speicherung

Screenshots der Website sollten hier gespeichert werden:
```
04-Assets/images/screenshots/
├── homepage-desktop.png
├── homepage-mobile.png
├── services-section.png
└── footer-section.png
```

---

## 🔗 Externe Ressourcen

### Schriftarten (Google Fonts)
- **Roboto:** https://fonts.google.com/specimen/Roboto
- **Cambria:** System Font (Windows, Mac)

### Icons (Tabler Icons)
- **URL:** https://tabler-icons.io
- **Nutzung:** Kostenlos, Open Source
- **Format:** SVG, PNG

---

## 📝 Datei-Namenkonvention

Alle Assets folgen dieser Namenskonvention:

```
[Brand]-[Type]-[Size/Variant].[Format]

Beispiele:
- pro4ex-logo-full.png
- pro4ex-logo-small.png
- pro4ex-icon-32.svg
- pro4ex-screenshot-desktop.png
```

---

## 🚀 Verwendung in HTML

```html
<!-- Favicon im Header -->
<link rel="icon" href="assets/images/logo/pro4ex-logo-favicon.png" sizes="32x32">

<!-- Logo im Header -->
<header>
  <img src="assets/images/logo/pro4ex-logo-medium.png" alt="Pro4Ex Consulting" class="logo">
</header>

<!-- Modern WebP mit Fallback -->
<picture>
  <source srcset="assets/images/logo/pro4ex-logo-full.webp" type="image/webp">
  <img src="assets/images/logo/pro4ex-logo-full.png" alt="Pro4Ex Consulting">
</picture>
```

---

## 📦 GitHub Upload

Beim Upload auf GitHub:

```bash
git add assets/
git commit -m "Add Pro4Ex logo and assets"
git push origin main
```

Die Assets werden dann unter `/assets/images/` verfügbar sein.

---

**Zuletzt aktualisiert:** 27. Juni 2026  
**Format:** Markdown  
**Maintainer:** Jan Michaelsen
