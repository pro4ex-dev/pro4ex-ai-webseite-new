# Pro4Ex Consulting - Corporate Identity Templates

**Version:** 2.0  
**Datum:** 27. Juni 2026  
**Entwickler:** Jan Michaelsen

---

## 📋 Überblick

Dieses Paket enthält eine vollständige Corporate Identity (CI) für Pro4Ex Consulting mit allen notwendigen Templates und Richtlinien für:

- ✅ PowerPoint-Präsentationen
- ✅ Webseiten (HTML/CSS)
- ✅ CI-Dokumentation
- ✅ Design-Richtlinien

---

## 📁 Ordnerstruktur

```
Pro4Ex-CI-Templates/
├── 01-PowerPoint/              # PowerPoint-Vorlagen
│   ├── Pro4Ex-CI-Master-Template.pptx
│   └── Pro4Ex-CI-Uebersicht-OPTIMIERT.pptx
│
├── 02-HTML-CSS/                # Website-Vorlagen
│   ├── index-ci-optimiert.html
│   └── ci-design-system.css
│
├── 03-CI-Documentation/        # Richtlinien & Konfiguration
│   ├── CI-GUIDELINES.md
│   └── ci-config.json
│
├── 04-Assets/                  # Zusätzliche Ressourcen
│   └── (Bilder, Icons, etc.)
│
└── README.md                   # Diese Datei
```

---

## 🎨 01 - PowerPoint Templates

**Inhalt:**
- `Pro4Ex-CI-Master-Template.pptx` – Master-Vorlage mit 10 vordefinierenten Layouts
- `Pro4Ex-CI-Uebersicht-OPTIMIERT.pptx` – CI-Übersichtspräsentation

**Verwendung:**
1. `Pro4Ex-CI-Master-Template.pptx` als Basis öffnen
2. Gewünschtes Layout wählen
3. Text/Bilder anpassen
4. Speichern unter neuem Namen

**Enthaltene Layouts:**
- Title Slide (Titelfolien)
- Standard Content (Inhaltsfolien mit Bullet Points)
- Two Column (Zwei-Spalten Layout)
- Call-to-Action (Handlungsaufforderungen)
- Table (Tabellenformat)
- Image + Text (Bild mit Text)
- Quote (Zitate/Highlights)
- Section Divider (Abschnittstrennfolien)
- Ending Slide (Abschlussfolien)
- Color Reference (Farb-Referenz)

---

## 🌐 02 - HTML & CSS Templates

**Inhalt:**
- `index-ci-optimiert.html` – Komplette responsive Website
- `ci-design-system.css` – CSS-Variablen & Utility-Klassen

**Verwendung:**
1. `index-ci-optimiert.html` in den Browser öffnen oder hochladen
2. Text-Inhalte anpassen
3. Farben via CSS-Variablen anpassen (optional)
4. Auf GitHub Pages oder eigenen Server hochladen

**Features:**
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Vollständiges CSS mit CI-Variablen
- ✅ Keine externen Dependencies (außer Google Fonts)
- ✅ WCAG AA Accessibility Standards
- ✅ Optimiert für SEO

**CSS-Variablen:**
```css
--color-primary: #000000
--color-secondary: #1e73be
--color-dark-gray: #595959
--color-pale-beige: #E5D6D6
--color-white: #FFFFFF
```

---

## 📖 03 - CI Documentation

**Inhalt:**
- `CI-GUIDELINES.md` – Ausführliche CI-Richtlinien (7 KB)
- `ci-config.json` – Strukturierte CI-Konfiguration im JSON-Format

**Verwendung:**
- `CI-GUIDELINES.md` für umfassende Dokumentation lesen
- `ci-config.json` in Anwendungen einbinden für konsistente Styling-Werte
- Beide Dateien als Single Source of Truth verwenden

**Dokumentierte Elemente:**
- Farbpalette mit Hex-Codes
- Typografie (Schriftarten, Größen, Gewichte)
- Spacing Scale (4px bis 64px)
- Border Radius & Shadows
- Buttons & Komponenten
- Responsive Breakpoints
- Accessibility Standards

---

## 🎯 Schnelleinstieg

### PowerPoint-Präsentation erstellen
1. Öffne `01-PowerPoint/Pro4Ex-CI-Master-Template.pptx`
2. Wähle ein Layout (z.B. "Standard Content")
3. Ersetze den Placeholder-Text
4. Speichern als neue `.pptx`-Datei

### Website hochladen
1. Kopiere `02-HTML-CSS/index-ci-optimiert.html` auf GitHub
2. Aktiviere GitHub Pages in Repository-Settings
3. Deine Website ist live unter `username.github.io/repo-name`

### CI-Farben in eigenen Projekten verwenden
```json
{
  "colors": {
    "primary": "#000000",
    "secondary": "#1e73be",
    "darkGray": "#595959",
    "paleBeige": "#E5D6D6"
  }
}
```

---

## 🔧 Technische Spezifikationen

### PowerPoint
- **Format:** .pptx (Microsoft PowerPoint 2010+)
- **Größe:** 150 KB
- **Aspekt:** 16:9
- **Schriften:** Calibri, Cambria
- **Kompatibilität:** Windows, Mac, Online

### HTML/CSS
- **Format:** HTML5 + CSS3
- **Browser:** Chrome, Firefox, Safari, Edge (aktuelle Versionen)
- **Responsive:** 320px – 1920px
- **Font:** Roboto (Google Fonts)
- **Kompatibilität:** Alle modernen Browser

### JSON
- **Format:** JSON (UTF-8)
- **Größe:** 4.7 KB
- **Struktur:** Hierarchisch organisiert
- **Nutzung:** Import in Anwendungen, Design-Tools, Entwicklung

---

## 📝 Verwendungsrichtlinien

### Farben
- **Schwarz (#000000):** Primärer Text, Buttons, Headings
- **Blau (#1e73be):** Hover-States, Links, Akzente
- **Dunkelgrau (#595959):** Header, Navigation, Hintergründe
- **Blasses Beige (#E5D6D6):** Sekundär-Akzente, Light-Backgrounds

### Typografie
- **Überschriften:** Cambria Bold (Headlines, Titles)
- **Text:** Calibri Regular (Body, Small Text)
- **Größen:** 48px (h1) → 16px (Body) → 12px (Small)
- **Zeilenabstand:** 1.2 (Headlines), 1.75 (Body)

### Abstände
- **Extra Small:** 4px
- **Small:** 8px
- **Medium:** 16px (Standard)
- **Large:** 24px
- **Extra Large:** 32px – 64px (Sections)

---

## 🚀 GitHub Repository Setup

```bash
# Clone Repository
git clone https://github.com/yourusername/pro4ex-website.git
cd pro4ex-website

# Struktur
pro4ex-website/
├── index.html              # Hauptseite
├── css/
│   └── ci-design-system.css
├── templates/
│   ├── presentations/      # PowerPoint-Dateien
│   └── guides/             # Dokumentation
└── README.md
```

---

## 📞 Kontakt & Support

**Pro4Ex Consulting**
- **E-Mail:** jan.michaelsen@pro4ex.consulting
- **Website:** https://pro4ex.consulting
- **GitHub:** [pro4ex-ai-webseite]

---

## 📄 Lizenz

© 2026 Pro4Ex Consulting – Jan Michaelsen  
Alle Rechte vorbehalten.

Dieses CI-System ist für Pro4Ex Consulting bestimmt. Eine Verwendung durch Dritte ohne Genehmigung ist nicht gestattet.

---

**Version History:**
- v2.0 (27.06.2026) – Master-Template & optimierte HTML-Website hinzugefügt
- v1.0 (27.06.2026) – Initiale CI-Dokumentation erstellt
