# Pro4Ex Consulting – Website-Anforderungsliste v1.0

**Erstellungsdatum:** 28. Juni 2026  
**Status:** Review & Feedback  
**Ziel:** Moderne Website-Überarbeitung (pro4ex.consulting)

---

## 📋 EXECUTIVE SUMMARY

### Status Quo (Aktuell)
- ❌ Design veraltet (WordPress + Elementor)
- ❌ Farbschema Mismatch (Pink #E5D6D6, nicht zur CI)
- ❌ Keine Case Studies / Testimonials
- ❌ Schwache CTAs
- ⚠️ Performance suboptimal

### Best Practice (Allgaier Reference)
- ✅ Modernes, klares Design
- ✅ Starke Hero Section + Storytelling
- ✅ Effektive Conversion Strategy
- ✅ Gute Information Architecture
- ✅ Performant & wartungsarm (Wix)

### Ziel (Neu)
- ✅ Moderne Website (Webflow/Next.js)
- ✅ Pro4Ex CI integriert (#0057CC Blue, #121212 Soft Black)
- ✅ Dark Mode + Light Mode Support
- ✅ Case Studies & Testimonials
- ✅ Starke Conversion Paths
- ✅ Lighthouse Score ≥90

---

## 🎯 WEBSITE-STRUKTUR & SITEMAP

### Empfohlene Seiten

```
www.pro4ex.consulting/
├── / (Home)
├── /about (Über Jan Michaelsen)
├── /services (Leistungen)
│   ├── /services/supply-chain
│   ├── /services/supplier-management
│   ├── /services/process-improvement
│   └── /services/strategic-consulting
├── /case-studies (Erfolgsgeschichten)
├── /blog (Insights & Artikel)
├── /contact (Kontakt)
├── /impressum
├── /datenschutz
└── /api/subscribe (Newsletter)
```

### Alternative: Flat Structure (Empfohlen)
```
Nur 5 Hauptseiten für schnellere Navigation:
/ → /about → /services → /case-studies → /contact
```

---

## 🎨 DESIGN-ANFORDERUNGEN

### Farbpalette (Pro4Ex CI)

| Element | Farbe | Verwendung |
|---------|-------|-----------|
| Primary | #0057CC | Links, Buttons, Accents |
| Soft Black | #121212 | Headlines, Dark Mode BG |
| Dark Navy | #0F172A | Dark Mode Background |
| Neutral Gray | #6B7280 | Secondary Text |
| White | #FFFFFF | Light Mode BG |

### Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1200px+

### Dark Mode
- ✅ Automatic (@prefers-color-scheme)
- ✅ Manual Toggle (Optional)
- ✅ WCAG AAA Compliance (7:1+ Kontrast)

---

## 📄 SEITEN-ANFORDERUNGEN

### 1. HOME (Hero-fokussiert)

**Layout:**
```
[Header/Nav]
[Hero Section]
  - Großes Hintergrundbild oder Video
  - Tagline: "Proficiency for Execution"
  - Subheader: "Supply Chain Excellence für die Automobilindustrie"
  - Primary CTA: "Kostenlose Konsultation"
  - Secondary CTA: "Case Studies anschauen"
[3-4 Service Cards]
  - Supply Chain Optimization
  - Supplier Management
  - Process Improvement
  - Strategic Consulting
[Testimonial/Social Proof]
  - 3-4 Kundenzitate
  - Stars + Names
[CTA Section]
  - "Bereit für Veränderung?"
  - Kontakt-Button
[Footer]
```

**Content-Anforderungen:**
- ~400-500 Wörter
- 1-2 Hero Bilder (hochwertig)
- Icon Set (40+ aus CI verfügbar)
- Video optional (3-5 min über Leistungen)

**SEO:**
- Meta Description: ~155 Zeichen
- H1: "Proficiency for Execution"
- Alt-Text für alle Bilder

---

### 2. ABOUT (Persönlich + Credibility)

**Layout:**
```
[Header: "Über Jan Michaelsen"]
[Photo + Bio]
  - Professionelles Headshot
  - 3-4 Absätze über Hintergrund
  - 15+ Jahre Erfahrung
[Expertise Areas]
  - Supply Chain Management
  - Cost Optimization
  - Risk Mitigation
  - Change Management
[Credentials]
  - Zertifikationen
  - Branchenkenntnis
  - Unique Selling Points
[Awards/Recognition]
  - Optional: Branchenpreise, Publikationen
```

**Content:**
- ~800-1000 Wörter
- 1 großes Foto
- 3-4 Expertise-Icons

---

### 3. SERVICES (Detailliert)

**Layout A: Card Grid**
```
4 Service Cards:
1. Supply Chain Optimization
2. Supplier Management
3. Process Improvement
4. Strategic Consulting

Jede Card:
- Icon (40px)
- Titel (20pt)
- Kurzbeschreibung (100-150 Wörter)
- "Learn More" Link
```

**Layout B: Expanded (Recommended)**
```
Hero Section: "Unsere Leistungen"
4 Tabs/Sections:

[Tab 1: Supply Chain Optimization]
- Beschreibung (300 Wörter)
- Benefits Bullet Points
- Methodik/Prozess (3-5 Schritte)
- CTA: "Kontakt"

[Tab 2: Supplier Management]
[Tab 3: Process Improvement]
[Tab 4: Strategic Consulting]
```

**Content:**
- 1200-1500 Wörter (gesamt)
- Icons für jede Service
- Optional: Grafiken/Diagramme

---

### 4. CASE STUDIES (Conversion-fokussiert)

**Struktur:**
```
[Overview: 3-5 Case Studies als Cards]
- Client Name (anonym oder nicht)
- Industry
- Challenge (1-2 Zeilen)
- Result (Metrics: X% Einsparung, Y% Effizienz)
- "Read Full Story" CTA

[Detailed Case Study Pages] (Optional)
/case-studies/client-a/
- Full Story (1500-2000 Wörter)
- Challenge + Context
- Solution/Methodik
- Results + Metrics
- Testimonial-Quote
- "Next Steps" CTA
```

**Content-Anforderungen:**
- 3-5 Case Studies (konkrete Zahlen!)
- Quantifizierbare Ergebnisse
- Authentische Storys (nicht generisch)
- Client Logos (optional)
- Testimonial-Zitate

---

### 5. BLOG (Thought Leadership)

**Struktur:**
```
/blog/
- 6-8 Artikel (Initial)
- Blog Post Template:
  - Hero Image
  - Meta Info (Date, Author, Read Time)
  - H1 Title
  - 1500-2000 Wörter
  - Subheadings (H2, H3)
  - Formatting: Bold, Lists, Quotes
  - Related Articles (3-4)
  - Author Bio
  - CTA am Ende
```

**Artikel-Ideen:**
- "5 Supply Chain Trends 2026"
- "Kostenoptimierung in der Automobilindustrie"
- "Risk Management für Zulieferer"
- "Lean & Six Sigma Implementierung"
- "Supplier Diversity im Supply Chain"

**SEO:**
- Keyword-fokussiert
- Internal Linking
- Meta Descriptions
- Schema Markup (Article)

---

### 6. CONTACT (Conversion-Focused)

**Layout:**
```
[Header: "Kontakt"]
[Contact Form]
  - Name (required)
  - Email (required)
  - Telefon
  - Nachricht/Anfrage (required)
  - Consent Checkbox (GDPR)
  - Submit Button

[Kontaktinformationen]
  - E-Mail: jan.michaelsen@pro4ex.consulting
  - Telefon: +49 (0) XXX XXXX
  - Adresse (Optional)
  - LinkedIn: @jan-michaelsen
  - Office Hours: Mo-Fr 9-17 Uhr

[Optional: Calendar Integration]
  - Calendly für Direkttermine
  - "Termin buchen" CTA
```

**Backend:**
- Form-Submission → Email
- Spam-Protection: reCAPTCHA v3
- Autoresponder Email (Thank You)

---

## ✨ FEATURES & FUNKTIONALITÄT

### MUSS (Must-Have)
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Contact Form (mit Validation)
- ✅ Dark Mode & Light Mode
- ✅ Fast Performance (Lighthouse ≥90)
- ✅ SEO Optimized (Meta, Schema, Sitemap)
- ✅ GDPR Compliant (Privacy Policy, Cookies)
- ✅ WCAG AAA Accessible

### SOLLTE (Should-Have)
- ✅ Blog/CMS
- ✅ Newsletter Signup
- ✅ LinkedIn Integration
- ✅ Analytics (Google Analytics 4)
- ✅ Heatmap/Session Recording (Hotjar optional)
- ✅ Social Meta Tags (og:image, og:title)

### KANN (Nice-to-Have)
- 🔄 Video Background (Hero)
- 🔄 Chatbot (AI Chat)
- 🔄 Testimonial Carousel
- 🔄 Multilingual (EN/DE)
- 🔄 Case Study Filter

---

## 🛠️ TECHNICAL STACK EMPFEHLUNGEN

### Option A: Webflow (Empfohlen für Speed)

**Vorteile:**
- Visual Builder (No Code)
- Hosting + CDN inklusive
- CMS integriert
- SEO Tools built-in
- Responsive Design leicht

**Nachteile:**
- Monthly Cost: €230-300
- Weniger Custom Code
- Vendor Lock-in

**Timeline:** 4-6 Wochen  
**Cost:** €1500-2500 (Setup)

---

### Option B: Next.js (Empfohlen für Customization)

**Vorteile:**
- Vollständige Kontrolle
- Extrem performant (SSG/SSR)
- React Components
- Deployable auf Vercel (kostenfrei)
- Skalierbar

**Nachteile:**
- Mehr Entwicklungszeit
- Benötigt Developer
- Hosting: €70-150/Monat (Vercel)

**Timeline:** 6-8 Wochen  
**Cost:** €3500-5500 (Entwicklung)

---

### Option C: WordPress (Nicht empfohlen)

**Problem:** Zu schwer für diese Website, Performance-Probleme, veraltet

---

## 🎨 5 DESIGN-SZENARIEN

### Design 1: "The Authority" (Modern Dark)
- **Vibe:** Professionell, dunkel, minimalistisch
- **Hero:** Full-Width Dark Image + weiße Schrift
- **Farben:** #0057CC Blue, #121212 Soft Black, White
- **Typography:** Bold Headlines, Clean Body Text
- **Best For:** B2B Consulting, Executive Appeal
- **Reference:** McKinsey.com, BCG.com

**Mockup Skizze:**
```
[Dark Header mit Logo]
[Full Hero: Bild + "Proficiency for Execution"]
[Dark Background, White Text, Blue CTAs]
[Service Cards mit Icons]
[Testimonials im Dark Theme]
```

---

### Design 2: "The Minimalist" (Light + Blue)
- **Vibe:** Clean, modern, luftig
- **Hero:** Simple Text-Based, kein großes Bild
- **Farben:** White, #0057CC Blue, Light Gray
- **Typography:** Elegant, Roboto Flex
- **Best For:** Eleganz, Performance, Accessibility

**Mockup Skizze:**
```
[Weiß Header mit Logo]
[Minimale Hero: Text + Blue CTA]
[Viel Whitespace]
[Gray Divider zwischen Sections]
[Light Mode nur]
```

---

### Design 3: "The Storyteller" (Content-fokussiert)
- **Vibe:** Narrative, bildreich, emotional
- **Hero:** Großes Hero Image + Story
- **Farben:** Dynamic (#0057CC, Orange Accent #F97316)
- **Layouts:** Alternating Text/Image
- **Best For:** Case Studies, Storytelling

**Mockup Skizze:**
```
[Hero Image + Overlay Text]
[Text Blocks mit eingebetteten Bildern]
[Zitate in großer Schrift]
[Customer Photos + Testimonials]
```

---

### Design 4: "The Corporate" (Enterprise)
- **Vibe:** Formal, strukturiert, vertrauenswürdig
- **Grid:** 3-Column Layout für Services
- **Farben:** Navy #0F172A, Blue #0057CC, Gray
- **Elements:** Badges, Certificates, Stats
- **Best For:** Large Corporations, Credibility

**Mockup Skizze:**
```
[Formal Header]
[Hero mit Company Stats/Badges]
[Service Grid (3 Column)]
[Case Studies als Timeline]
[Trust Badges/Certifications am Ende]
```

---

### Design 5: "The Interactive" (Modern + Engaging)
- **Vibe:** Dynamisch, interaktiv, modem
- **Animations:** Smooth Scrolling, Hover Effects
- **Farben:** Blue #0057CC, Purple #7C3AED (Optional)
- **Interaktivität:** Interactive Charts, Service Selector
- **Best For:** Engagement, Conversion

**Mockup Skizze:**
```
[Animated Hero (Parallax)]
[Interactive Service Selector (Click to reveal)]
[Animated Icons on Scroll]
[Testimonial Carousel (Auto-Rotate)]
[Dynamic Stats Counter]
```

---

## 📊 EMPFOHLENES DESIGN (HYBRID)

**Kombination: "The Authority" + "The Storyteller"**

- **Hero:** Dark Image + Overlay (Authority)
- **Services:** Clean Cards mit Icons (Authority)
- **Case Studies:** Storytelling mit Bildern (Storyteller)
- **Colors:** #0057CC + #121212 (Pro4Ex CI)
- **Dark Mode:** Default (Professional)
- **Light Mode:** Optional Toggle

**Begründung:**
- Moderne, professionelle Ausstrahlung (Authority)
- Gutes Storytelling für Conversion (Storyteller)
- Passt zur Pro4Ex CI
- B2B Consulting Standard

---

## 🎯 ZIELGRUPPE & CONVERSION STRATEGY

### Primäre Zielgruppe
- **Supply Chain Manager** (40-60 Jahre)
- **Procurement Directors** (35-55 Jahre)
- **Operations Leads** (30-50 Jahre)
- **C-Suite Executives** (45+ Jahre)
- **Branchen:** Automobilzulieferer, Logistik, Manufacturing

### User Journey

```
1. AWARENESS (Google / LinkedIn)
   ↓
2. LANDING (pro4ex.consulting)
   ↓
3. ENGAGEMENT (Case Studies / Services)
   ↓
4. CONSIDERATION (About / Blog)
   ↓
5. DECISION (Contact Form / Call)
   ↓
6. CONVERSION (Konsultation buchen)
```

### CTAs nach Seite

| Seite | Primary CTA | Secondary CTA |
|-------|-------------|---------------|
| Home | "Kostenlose Konsultation" | "Case Studies" |
| Services | "Jetzt kontaktieren" | "Mehr erfahren" |
| Case Studies | "Ähnliches Projekt?" | "Blog lesen" |
| Blog | "Beratung anfragen" | "Newsletter" |
| Contact | "Nachricht senden" | "Termin buchen" |

### Conversion Goals (KPIs)
- Contact Form Submissions: 5-10/Monat
- Newsletter Signups: 50-100/Monat
- Calendar Bookings: 3-5/Monat
- Page Views: 300-500/Monat
- Bounce Rate: <40%
- Avg. Session Duration: >2:30min

---

## 📝 CONTENT-ANFORDERUNGEN (GESAMT)

| Seite | Wörter | Bilder | Icons | Videos |
|-------|--------|--------|-------|--------|
| Home | 400-500 | 1-2 Hero | 4 | 1 optional |
| About | 800-1000 | 1 Porträt | 4 | – |
| Services | 1200-1500 | 4 (1 pro Service) | 4 | 1 optional |
| Case Studies | 4000-5000 | 12-16 | – | 2 optional |
| Blog (6 Articles) | 9000-12000 | 18 | 12 | – |
| Contact | 200-300 | – | 2 | – |
| **TOTAL** | **15400-20300** | **32-40** | **24** | **2-3** |

### Asset-Checklist

**Bilder:**
- 1x Hero Image (1920x1080px)
- 1x Jan Michaelsen Portrait (400x400px)
- 4x Service Images (1200x600px)
- 12x Case Study Images (800x600px)
- 18x Blog Feature Images (1200x600px)
- **Total: ~40 high-quality images**

**Icons:** 24 aus Pro4Ex Icon Library ✓ (bereits vorhanden)

**Videos:** 2-3 optional
- 1x Hero Video Background (10-15 sec)
- 1x Services Overview (2-3 min)
- 1x Testimonial Video (30-60 sec)

---

## ⚡ TECHNICAL REQUIREMENTS

### Performance
- Lighthouse Score: ≥90/100
- Core Web Vitals: All Green
- Page Load Time: <2.5 seconds
- Image Optimization: WebP, Responsive
- Minified CSS/JS

### SEO
- Sitemap.xml
- robots.txt
- Meta Descriptions (all pages)
- Schema Markup (Organization, LocalBusiness, BlogPosting)
- Open Graph Tags
- Canonical URLs

### Security
- HTTPS (SSL)
- GDPR Compliant (Privacy Policy, Cookies)
- CCPA Ready (optional)
- reCAPTCHA v3 on Forms
- No Tracking Cookies (Privacy First)

### Analytics
- Google Analytics 4
- Google Search Console
- Hotjar (optional heatmaps)
- LinkedIn Pixel

### Accessibility (WCAG AAA)
- 7:1+ Color Contrast
- Keyboard Navigation
- Alt Text on Images
- Semantic HTML
- Focus Visible Indicators
- Screen Reader Compatible

---

## 📅 IMPLEMENTIERUNGS-ROADMAP

### Phase 1: Planning & Design (Weeks 1-2)
- ✓ Content Audit (bestehende Website)
- ✓ Information Architecture finalisieren
- ✓ Wireframes erstellen
- ✓ Design System (Colors, Fonts, Components)

### Phase 2: Content Creation (Weeks 2-4)
- ✓ Copy Writing (alle Texte)
- ✓ Image Sourcing (40+ Bilder)
- ✓ Case Study Interviews
- ✓ Blog Article Writing (6 Artikel)

### Phase 3: Development (Weeks 4-6)
- ✓ Setup Webflow/Next.js
- ✓ Build Homepage
- ✓ Build Services Page
- ✓ Build About Page
- ✓ Build Contact Form
- ✓ Responsive Testing

### Phase 4: Content Population & Optimization (Weeks 6-8)
- ✓ Case Studies hinzufügen
- ✓ Blog Posts veröffentlichen
- ✓ SEO Optimization (Meta, Keywords)
- ✓ Image Optimization (WebP, Lazy Loading)
- ✓ Performance Testing (Lighthouse)

### Phase 5: Testing & Launch (Weeks 8-10)
- ✓ Cross-Browser Testing
- ✓ Mobile Testing
- ✓ Accessibility Audit (WAVE)
- ✓ Security Audit
- ✓ Load Testing
- ✓ UAT & Feedback Incorporation
- ✓ Domain Setup
- ✓ Analytics Setup
- ✓ DNS Migration (soft launch)
- ✓ Go Live!

### Post-Launch (Ongoing)
- 📊 Monitor Analytics
- 📝 Blog Content Calendar (1-2 Artikel/Monat)
- 🔄 Case Study Updates
- 🎯 A/B Testing CTAs
- 📧 Newsletter Strategy

---

## 💰 BUDGET-ÜBERSICHT

### Option A: Webflow (All-in-One)

| Item | Cost |
|------|------|
| Webflow Setup & Design | €1500 |
| Content Creation (Copy, Images) | €800 |
| Webflow Monthly Plan | €230 × 3 months = €690 |
| Domain & Email | €50 |
| **Total (3 months)** | **€3040** |
| **Laufend/Monat** | **€230-300** |

---

### Option B: Next.js (Custom Development)

| Item | Cost |
|------|------|
| Development (Weeks 4-8) | €3500-5000 |
| Design & UX (Weeks 1-2) | €1000 |
| Content Creation | €800 |
| Hosting Setup (Vercel) | €100 |
| Domain & Email | €50 |
| **Total (One-time)** | **€5450-6950** |
| **Hosting/Monat** | **€70-150** |

---

### Content Creation Breakdown

| Task | Cost | Time |
|------|------|------|
| Copy Writing (all pages + blog) | €400 | 2 weeks |
| Image Sourcing/Editing | €300 | 1 week |
| Photography (if needed) | €500 | 1 day |
| Case Study Interviews | €200 | 2 weeks |
| **Total Content** | **€1400** | **6 weeks** |

---

## 🚀 GO/NO-GO CHECKLIST

Vor Launch überprüfen:

### Design & UX
- [ ] Design in CI branding implementiert (#0057CC, #121212)
- [ ] Dark Mode & Light Mode getestet
- [ ] Responsive auf Mobile/Tablet/Desktop
- [ ] All CTAs prominent + konvertierend
- [ ] No broken images/links

### Content
- [ ] Alle Texte final & proof-read
- [ ] High-quality images (40+)
- [ ] Case Studies mit Zahlen
- [ ] Blog Articles SEO-optimiert
- [ ] Meta Descriptions auf allen Seiten

### Technical
- [ ] Lighthouse Score ≥90
- [ ] All Core Web Vitals Green
- [ ] HTTPS/SSL funktioniert
- [ ] Contact Form getestet
- [ ] Analytics configured (GA4, GSC)
- [ ] reCAPTCHA working

### Security & Compliance
- [ ] Privacy Policy veröffentlicht
- [ ] GDPR-compliant (Cookie Consent)
- [ ] No Sensitive Data exposed
- [ ] SSL Certificate valid

### SEO
- [ ] Sitemap.xml vorhanden
- [ ] robots.txt konfiguriert
- [ ] Schema Markup implementiert
- [ ] Open Graph Tags gesetzt
- [ ] Google Search Console verified

### Performance
- [ ] Images WebP/Optimiert
- [ ] Lazy Loading implementiert
- [ ] CSS/JS minified
- [ ] CDN/Caching konfiguriert
- [ ] <2.5 second load time

---

## 📞 NÄCHSTE SCHRITTE

1. **Review diese Anforderungsliste** (Jan & Team)
2. **Feedback & Anpassungen** (Design Preferences?)
3. **Design-Mockup erstellen** (basierend auf gewähltem Design)
4. **Content Interviews** (Jan für personliche Texte)
5. **Bildquellen klären** (Shooting? Stock Photos? Existierende?)
6. **CMS wählen** (Webflow vs. Next.js vs. andere?)
7. **Kickoff & Development starten**

---

## 📎 ANHANG: REFERENZEN & INSPIRATIONEN

**Good Practice Websites (Consulting):**
- allgaier-consulting.de (Reference)
- mckinsey.com (Design Authority)
- bcg.com (Information Architecture)
- bain.com (Content Strategy)

**Tools für Website:**
- Webflow.com (Visual CMS)
- Vercel.com (Next.js Hosting)
- Figma.com (Design Mockups)
- Hotjar.com (User Analytics)

---

**Website-Anforderungsliste v1.0 – Ready for Review ✓**

*Contact: jan.michaelsen@pro4ex.consulting*
