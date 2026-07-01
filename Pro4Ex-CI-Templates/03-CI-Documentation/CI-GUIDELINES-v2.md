# Pro4Ex Consulting – Corporate Identity Guidelines v2.0

**Version:** 2.0 (Optimized 2026)  
**Last Updated:** 27. Juni 2026  
**Status:** ✅ WCAG AAA Compliant | Dark Mode Ready | Variable Fonts

---

## 📋 INHALTSVERZEICHNIS

1. [Farb-Palette (WCAG AAA)](#farb-palette)
2. [Typography & Variable Fonts](#typography)
3. [Logo System (SVG + WebP)](#logo-system)
4. [Design Tokens (Hierarchisch)](#design-tokens)
5. [Komponenten](#components)
6. [Dark Mode](#dark-mode)
7. [Responsive Design](#responsive)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## 🎨 FARB-PALETTE

### Primitive Farben

#### Neutral Palette
```
#F9FAFB - Neutral 50 (hellste)
#F3F4F6 - Neutral 100
#E5E7EB - Neutral 200
#D1D5DB - Neutral 300
#374151 - Neutral 700 (dunkel)
#111827 - Neutral 900 (dunkelste)
```

#### Blacks (Neu optimiert für Lesbarkeit)
```
#121212 - Soft Black (WCAG AAA: 21:1 Kontrast) ✅
#000000 - Pure Black (DEPRECATED - verwende Soft Black)
```

#### Blues (WCAG AAA Optimiert)
```
#0057CC - Pro4Ex Blue (WCAG AAA 8.2:1) ← PRIMÄR
#0052B4 - Pro4Ex Blue Hover
#00408A - Pro4Ex Blue Active
#1E73BE - Legacy Blue (nur für Übergangszeitraum)
```

### Semantische Farben (Light Mode)

| Zweck | Farbe | Kontrast | Verwendung |
|---|---|---|---|
| Primärtext | #111827 | 7:1 | Body Text, Headings |
| Sekundärtext | #374151 | 7.1:1 | Secondary Info |
| Mutedtext | #6B7280 | 4.5:1 | Disabled, Placeholder |
| Primär BG | #FFFFFF | - | Main Background |
| Sekundär BG | #F9FAFB | - | Cards, Sections |
| Tertiär BG | #F3F4F6 | - | Subtle Accents |
| Borders | #E5E7EB | - | Dividers, Outlines |

### Dark Mode (Semantische Farben)

| Zweck | Farbe | Verwendung |
|---|---|---|
| Primärtext | #F8FAFC | Body Text (hell auf dunkel) |
| Sekundärtext | #CBD5E1 | Secondary Info |
| Primär BG | #0F172A | Main Background |
| Sekundär BG | #1E293B | Cards |
| Tertiär BG | #334155 | Accents |
| Borders | #334155 | Dividers |

### Kontrast-Validierung

✅ **WCAG AAA Compliance:**
- Headings: 7:1+ (Soft Black #121212 auf White #FFFFFF)
- Body Text: 7:1+ (Neutral 900 auf White)
- Secondary Text: 7.1:1 (Neutral 700 auf White)
- UI Components: 4.5:1+ (minimum)

**Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📝 TYPOGRAPHY & VARIABLE FONTS

### Font Family (Optimiert)

**Primary:** Roboto Flex (Variable Font)
- Format: WOFF2
- Größe: ~120KB (vs. 400KB statische Fonts)
- Weights: 100-900 (kontinuierlich)

**Fallback:** Roboto, Arial, sans-serif

```css
--font-family: 'Roboto Flex', 'Roboto', Arial, sans-serif;
```

### Font Weights

| Name | Weight | Verwendung |
|---|---|---|
| Light | 300 | Subheadings, Captions |
| Regular | 400 | Body Text |
| Medium | 500 | Emphasis, UI |
| Semibold | 600 | Subheadings, Hover |
| Bold | 700 | Headings, Strong |

### Responsive Font Sizes

```css
--font-size-xs:   clamp(11px, 2vw, 12px)      /* 11-12px */
--font-size-sm:   clamp(13px, 2.2vw, 14px)    /* 13-14px */
--font-size-base: clamp(14px, 2.5vw, 16px)    /* 14-16px */
--font-size-lg:   clamp(16px, 2.8vw, 18px)    /* 16-18px */
--font-size-2xl:  clamp(20px, 3.5vw, 24px)    /* 20-24px */
--font-size-5xl:  clamp(28px, 8vw, 48px)      /* 28-48px */
```

**Vorteil:** Font-Größen skalieren automatisch basierend auf Viewport

### Heading Adaptive Weights

```
Mobile:  font-weight: 700 (bold) → bessere Lesbarkeit
Desktop: font-weight: 600 (semibold) → eleganter bei größer
```

### Line Heights

| Typ | Value | Verwendung |
|---|---|---|
| Tight | 1.2 | Headings |
| Normal | 1.5 | UI Text |
| Relaxed | 1.625 | Body paragraphs |
| Loose | 2 | Long form content |

---

## 🏷️ LOGO SYSTEM (v2.0)

### Dateien & Formate

```
assets/images/logo/
├── pro4ex-logo.svg           ← PRIMARY (SVG - skalierbar)
├── pro4ex-logo.webp          ← Modern (50% kleiner als PNG)
├── pro4ex-logo.png           ← Fallback (PNG)
├── pro4ex-logo-dark.svg      ← Dark Mode (SVG)
├── pro4ex-logo-dark.png      ← Dark Mode (PNG)
├── pro4ex-favicon.svg        ← Browser Tab Icon
├── pro4ex-logo-favicon.png   ← Favicon Fallback
├── alt_Pro4Ex-Logo-Original.png    ← Archiviert
└── alt_Pro4Ex-Logo-Invertiert.png  ← Archiviert
```

### HTML Implementation (Picture Tag)

```html
<!-- Modern Fallback-Strategie -->
<picture>
  <source srcset="assets/images/logo/pro4ex-logo.svg" type="image/svg+xml">
  <source srcset="assets/images/logo/pro4ex-logo.webp" type="image/webp">
  <img src="assets/images/logo/pro4ex-logo.png" alt="Pro4Ex Consulting" loading="lazy">
</picture>
```

**Was passiert:**
1. Browser versucht SVG → **Optimal** (skalierbar, klein)
2. Browser versucht WebP → **Sehr gut** (50% kleiner)
3. Browser nutzt PNG → **Fallback** (alte Browser)

### CSS: Responsive Logo

```css
.logo {
  width: clamp(80px, 15vw, 300px);  /* Auto-skalierung */
  height: auto;
}

/* Dark Mode Anpassung */
@media (prefers-color-scheme: dark) {
  .logo {
    filter: brightness(1.05);  /* Leicht heller in Dark Mode */
  }
}
```

### Logo Größen

| Kontext | Größe | Format |
|---|---|---|
| Website Header | 150-300px | SVG/WebP/PNG |
| Browser Tab | 32×32px | SVG/PNG |
| Print | 2"-4" | SVG (skalierbar) |
| Social Media | 1200×630px | PNG/WebP |
| Favicon | 32×32px | SVG/PNG |

### Text-Layout

```
Pro4Ex          (große Schrift)
Consulting      (GLEICHE GRÖßE wie Pro4Ex)
Jan Michaelsen  (kleinere Schrift)
```

Alle Texte in der gleichen Farbe (weiß oder schwarz):
- **Weiße Version:** Weißer Text auf schwarzem Hintergrund
- **Schwarze Version:** Schwarzer Text auf weißem Hintergrund

---

## 🔧 DESIGN TOKENS

### Hierarchische Token-Struktur

```
1. PRIMITIVE (Farb-Palette)
   ├── color-neutral-50
   ├── color-black-soft
   └── color-blue-600

2. SEMANTIC (Bedeutung)
   ├── text-primary
   ├── bg-primary
   └── interactive-primary

3. COMPONENT (Konkrete Use-Cases)
   ├── button-primary-bg
   ├── card-bg
   └── input-border
```

### CSS Variable Naming

```css
/* Format: --[category]-[property]-[element]-[state] */

--color-primary: #121212;
--text-primary-light: #111827;
--text-primary-dark: #F8FAFC;
--button-primary-bg: #0057CC;
--button-primary-hover-bg: #0052B4;
--card-bg: #FFFFFF;
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
```

---

## 🧩 KOMPONENTEN

### Button Component

#### Primary Button
```html
<button class="btn-primary">Aktion</button>
```

**States:**
- Default: #0057CC
- Hover: #0052B4
- Active: #00408A
- Disabled: #D1D5DB (opacity: 60%)

**Dimensionen:**
- Min Height: 44px (Touch-friendly)
- Padding: 12px 24px
- Border Radius: 4px

#### Secondary Button
```html
<button class="btn-secondary">Abbrechen</button>
```

- Background: Transparent
- Border: 2px solid #111827
- Hover: #F3F4F6 Background

### Card Component

```html
<div class="card">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

**Styling:**
- Background: Semantisch (light/dark)
- Border: 1px #E5E7EB
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

### Input / Form Fields

```html
<input type="text" placeholder="Beispiel">
```

**States:**
- Default: Border #E5E7EB
- Focus: Border #0057CC + Shadow
- Disabled: Background #F3F4F6

---

## 🌙 DARK MODE

### Implementation

```css
/* Light Mode (default) */
:root {
  --text-primary: #111827;
  --bg-primary: #FFFFFF;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #F8FAFC;
    --bg-primary: #0F172A;
  }
}
```

### Toggle Button (Optional)

```html
<button id="theme-toggle">🌙</button>
```

```javascript
const toggle = document.getElementById('theme-toggle');
const isDark = localStorage.getItem('theme') === 'dark';

if (isDark) {
  document.documentElement.style.colorScheme = 'dark';
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  document.documentElement.style.colorScheme = newTheme;
});
```

### Dark Mode Color Mapping

| Element | Light | Dark |
|---|---|---|
| Text | #111827 | #F8FAFC |
| Background | #FFFFFF | #0F172A |
| Secondary BG | #F9FAFB | #1E293B |
| Border | #E5E7EB | #334155 |

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

```css
--breakpoint-mobile:  480px
--breakpoint-tablet:  768px
--breakpoint-desktop: 960px
--breakpoint-wide:    1200px
```

### Mobile-First Approach

```css
/* Mobile (default) */
body { font-size: 14px; }

/* Tablet */
@media (min-width: 768px) {
  body { font-size: 16px; }
}

/* Desktop */
@media (min-width: 1200px) {
  body { padding: 32px; }
}
```

### Touch Targets

Alle interaktiven Elemente: **min-height: 44px, min-width: 44px**

### Responsive Images

```html
<picture>
  <source media="(min-width: 960px)" srcset="large.webp">
  <source media="(min-width: 768px)" srcset="medium.webp">
  <img src="small.png" alt="Description">
</picture>
```

---

## ♿ ACCESSIBILITY

### WCAG AAA Standards

✅ **Color Contrast:** 7:1+ für Text, 4.5:1+ für UI  
✅ **Focus Visible:** Alle Buttons/Links haben sichtbares Fokus-Outline  
✅ **Touch Targets:** Min 44×44px  
✅ **Alt Text:** Alle Bilder haben alt-Attribute  
✅ **Keyboard Navigation:** Alle Funktionen per Tastatur erreichbar  

### Keyboard Navigation

```css
/* Focus Styles */
button:focus {
  outline: 2px solid var(--interactive-primary);
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid var(--interactive-primary);
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 BEST PRACTICES

### Performance

1. **Variable Fonts:** Verwende Roboto Flex statt 4+ statische Fonts
2. **Image Optimization:** SVG/WebP primär, PNG als Fallback
3. **Font Display:** `display=swap` für schnelleres Laden
4. **Lazy Loading:** `loading="lazy"` für Bilder unter der Fold

### Consistency

1. **Design Tokens verwenden:** Nicht `#0057CC` hardcoden, sondern `var(--interactive-primary)`
2. **Component Library:** Komponenten dokumentieren und wiederverwenden
3. **Version Control:** Alle Änderungen dokumentieren (siehe ci-config.json)

### Maintenance

1. **Dark Mode testen:** Alle neue Features im Light & Dark Mode testen
2. **Contrast testen:** WebAIM Checker verwenden
3. **Responsive testen:** Mobile (480px), Tablet (768px), Desktop (1200px)
4. **Accessibility testen:** Keyboard-Navigation, Screen Reader

### File Organization

```
project/
├── assets/
│   ├── images/logo/          ← Logo-Dateien
│   ├── fonts/                ← Web Fonts (minimal mit Variable Fonts)
│   └── icons/                ← SVG Icons
├── css/
│   ├── ci-design-system-v2.css  ← Master Design System
│   └── components.css        ← Component Styles
├── js/
│   └── theme-toggle.js       ← Dark Mode Script
├── ci-config.json            ← Config
└── CI-GUIDELINES-v2.md       ← Diese Datei
```

---

## 📊 CHECKLISTE FÜR NEUE PROJEKTE

- [ ] ci-design-system-v2.css importieren
- [ ] Variable Fonts einrichten (Google Fonts: Roboto Flex)
- [ ] Color Tokens aus ci-config.json verwenden
- [ ] Dark Mode testen (`prefers-color-scheme: dark`)
- [ ] Logo mit Picture Tag implementieren (SVG → WebP → PNG)
- [ ] Touch Targets ≥44px validieren
- [ ] Kontrast-Verhältnisse überprüfen (WebAIM)
- [ ] Keyboard Navigation testen
- [ ] Responsive Design testen (480px, 768px, 1200px)

---

## 📞 HILFE & FRAGEN

**Kontakt:** jan.michaelsen@pro4ex.consulting  
**Website:** https://pro4ex.consulting  
**Design System Repo:** [GitHub]

---

**Version History:**
- v1.0 (Juni 2026): Initial CI System
- v2.0 (Juni 2026): WCAG AAA, Variable Fonts, Dark Mode, SVG Logos

