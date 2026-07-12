# Pro4Ex Consulting Website

## 📋 Projekt-Übersicht

**Pro4Ex Consulting** ist eine statische HTML-Website für Executive Management Consulting in der Automotive-Industrie.

- **Domain**: https://pro4ex.consulting
- **Hosting**: GitHub Pages
- **Sprachen**: Deutsch (DE) + Englisch (EN)
- **Status**: Production-ready ✅

---

## 🏗️ Projektstruktur

```
├── index.html              # Home (DE)
├── about.html              # Über mich (DE)
├── services.html           # Leistungen (DE)
├── contact.html            # Kontakt (DE)
├── datenschutz.html        # Datenschutzerklärung (DE)
├── impressum.html          # Impressum (DE)
├── 404.html                # Error Page
├── robots.txt              # SEO robots
├── sitemap.xml             # XML Sitemap (mit hreflang)
│
├── en/                     # English versions (same structure as DE)
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   ├── datenschutz.html
│   └── impressum.html
│
├── css/                    # Stylesheets
│   ├── design-system.css   # Design Tokens & Base Elements
│   └── site.css            # Component Styles
│
├── assets/
│   ├── images/
│   │   ├── hero.jpg        # Home Hero Image (Thomas Rathay)
│   │   ├── portrait.jpg    # About Portrait (Thomas Rathay)
│   │   ├── service-*.jpg   # Services Images (Pexels)
│   │   └── logo/
│   │       ├── pro4ex-favicon.svg      # P4E Icon (Browser Tab)
│   │       ├── pro4ex-logo-dark.svg    # Main Logo
│   │       ├── apple-touch-icon.png    # Mobile Icon
│   │       └── ...
│   ├── icons/              # SVG Icons (27 files)
│   └── fonts/              # Self-hosted Roboto Flex (DSGVO)
│
└── assets/js/
    └── cookie-banner.js    # GA4 Consent Management
```

---

## 🔐 Compliance & Rechtliches

### DSGVO / Privacy
- ✅ Cookie-Banner auf allen Seiten
- ✅ GA4 nur nach Consent geladen
- ✅ LocalStorage-basierte Consent-Speicherung (1 Jahr)
- ✅ Vollständige Datenschutzerklärung (mit GA4 Details)
- ✅ Impressum mit allen Pflichtangaben

### Urheberrecht & Bildquellen
| Bild | Fotograf | Seiten |
|------|----------|--------|
| hero.jpg | Thomas Rathay | Home |
| portrait.jpg | Thomas Rathay | About |
| service-*.jpg (4x) | Pexels | Services |

### SEO & Strukturdaten
- ✅ Meta Tags (Description, OG, Twitter Card)
- ✅ Schema.org JSON-LD (ProfessionalService)
- ✅ Canonical URLs
- ✅ hreflang Tags (DE/EN)
- ✅ Google Site Verification
- ✅ robots.txt + sitemap.xml

---

## 📊 Google Analytics 4 (GA4)

### Konfiguration
- **Measurement ID**: G-X86B8JTDRR
- **Installationsort**: assets/js/cookie-banner.js
- **Consent-Modell**: Explicit Consent (GDPR)
- **Cookies**: _ga (2 years), _ga_* (1 min - 2 years)

### Email-Reports
- **Status**: Konfiguriert & aktiv
- **Häufigkeit**: Wöchentlich
- **Empfänger**: jan.michaelsen@pro4ex.consulting

---

## 🎨 Design System

### Farben (Dark Mode Default)
- **Primary Brand**: #0057CC (Blau)
- **Background**: #000000 (Schwarz)
- **Text Primary**: #FFFFFF (Weiß)
- **Text Secondary**: #999999 (Grau)

### Typografie
- **Font**: Roboto Flex (self-hosted, DSGVO-konform)
- **Subsets**: Latin + Latin-Ext (DE/EN)

### CSS-Architektur
- **design-system.css**: Tokens, Reset, Base Elements
- **site.css**: Components, Layout, Utilities

---

## 🔧 Entwicklung

### Lokale Änderungen committen
```bash
git add <files>
git commit -m "Beschreibung der Änderung"
git push origin main
```

### Wichtige Dateien bearbeiten
- **HTML-Inhalte**: Direkt in .html Dateien bearbeiten
- **Styling**: css/site.css oder css/design-system.css
- **GA4 Verhalten**: assets/js/cookie-banner.js

### Nach Änderungen
1. GitHub Pages deployt automatisch
2. Live unter https://pro4ex.consulting
3. Cache-Clearing möglicherweise nötig (Ctrl+Shift+Delete)

---

## 📱 Responsive Design

- **Mobile First** Ansatz
- **Breakpoints**: via CSS-Grid/Flexbox
- **Image Optimization**: fetchpriority="high", loading="lazy"

---

## 🚀 Letzte Updates

| Commit | Beschreibung |
|--------|--------------|
| 03e3b7e | Bildquellen auf Home- und About-Seite hinzugefügt |
| 1ea0770 | P4E Favicon + Bildquellen auf Services-Seite |
| cebb989 | GA4-Dokumentation DSGVO-konform korrigiert |
| 63dfb6b | GA4 DSGVO-konform mit Cookie-Banner |
| a5d781b | GA4 Aktivierung |

---

## 📞 Kontaktdaten

**Jan Michaelsen**
- Email: jan.michaelsen@pro4ex.consulting
- Telefon: +49 176 7673 9121
- Adresse: Donizettistraße 36, 70195 Stuttgart

---

## ✅ Projekt Ready

Die Website ist **vollständig rechtkonform**, **GA4-ready** und **production-ready**.

Alle Anforderungen erfüllt:
- ✅ DSGVO-Compliance
- ✅ SEO-Optimierung
- ✅ Urheberrecht dokumentiert
- ✅ Barrierefreiheit (a11y)
- ✅ Performance optimiert
