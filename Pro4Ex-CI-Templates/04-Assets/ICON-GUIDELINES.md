# Pro4Ex Icon Library Guidelines v1.0

**Version:** 1.0  
**Status:** ✅ Complete (40+ Icons)  
**Last Updated:** 28. Juni 2026

---

## 📚 ICON LIBRARY OVERVIEW

**Total Icons:** 40+ SVG Icons (modular, skalierbar)

### Kategorien

#### Navigation (6)
- `arrow-up` – Pfeil nach oben
- `arrow-down` – Pfeil nach unten
- `arrow-left` – Pfeil nach links
- `arrow-right` – Pfeil nach rechts (existing)
- `menu` – Hamburger Menu (existing)
- `close` – Close/X Button (existing)

#### Settings & Control (4)
- `settings` – Einstellungen (Rad-Icon)
- `gear` – Zahnrad-Icon
- `user` – Einzelner Benutzer
- `users` – Mehrere Benutzer
- `bell` – Benachrichtigungen

#### Data & Analytics (4)
- `chart` – Linien-Diagramm
- `bar-chart` – Säulendiagramm
- `trending-up` – Aufwärts-Trend
- `trending-down` – Abwärts-Trend

#### Filters & Sorting (2)
- `filter` – Filteroptionen
- `sort` – Sortierfunktion

#### Common Actions (4)
- `expand` – Erweitern
- `collapse` – Zusammenfalten
- `copy` – Kopieren
- `share` – Teilen

#### Status & Validation (3)
- `circle` – Leerer Kreis
- `square` – Leeres Quadrat
- `checkbox` – Markiert (existing: `check`)

#### Essential (2)
- `refresh` – Aktualisieren
- `loader` – Ladesymbol/Spinner

#### Existing Icons (7)
- `home`, `services`, `about`, `contact`, `email`, `phone`, `search`
- `download`, `star`, `heart`, `info`, `warning`

---

## 🎨 DESIGN STANDARDS

### Icon Size & Spacing

| Context | Size | Padding |
|---------|------|---------|
| UI Buttons | 20×20px | 4px padding |
| Navigation | 24×24px | 6px padding |
| Header/Footer | 16×16px | 2px padding |
| Large Callouts | 32×32px | 8px padding |
| Print/Export | 48×48px+ | Responsive |

### Color Usage

**Primary (Interactive):** #0057CC (Pro4Ex Blue)  
**Secondary (Inactive):** #6B7280 (Gray)  
**Danger (Alerts):** #DC2626 (Red)  
**Success (Valid):** #059669 (Green)  
**Warning (Caution):** #F59E0B (Orange)

### Stroke & Fill

- **Fill Icons:** Für einfache, kompakte Darstellung (empfohlen)
- **Outline Icons:** Für höhere Sichtbarkeit in Dense UIs
- **Stroke Width:** 2px für Outlines (konsistent)

---

## 🚀 IMPLEMENTATION

### SVG in HTML

```html
<!-- Direct SVG -->
<svg class="icon icon-24" viewBox="0 0 24 24">
  <use href="assets/icons/arrow-right.svg#icon"></use>
</svg>

<!-- With Color -->
<svg class="icon icon-24" style="color: #0057CC;" viewBox="0 0 24 24">
  <use href="assets/icons/arrow-right.svg#icon"></use>
</svg>

<!-- Alternative: Inline SVG -->
<img src="assets/icons/arrow-right.svg" alt="Continue" class="icon icon-24">
```

### CSS Styling

```css
.icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

.icon-16 { width: 16px; height: 16px; }
.icon-20 { width: 20px; height: 20px; }
.icon-24 { width: 24px; height: 24px; }
.icon-32 { width: 32px; height: 32px; }

.icon--primary { color: #0057CC; }
.icon--secondary { color: #6B7280; }
.icon--danger { color: #DC2626; }
.icon--success { color: #059669; }
```

---

## ✅ BEST PRACTICES

1. **Konsistente Größen:** Verwende nur definierte Größen (16, 20, 24, 32px)
2. **Spacing:** Mindestens 4px Padding um Icons (Touch Target mindestens 44×44px)
3. **Kontrast:** Stelle sicher, dass Icon-Farbe 4.5:1 Kontrast hat
4. **Alt-Text:** Für Bilder immer `alt` oder `aria-label` setzen
5. **Responsive:** Icons skalieren mit `viewBox` – kein Pixeling
6. **Dark Mode:** Verwende `currentColor` für automatische Farbumschaltung

---

## 📋 ICON INVENTORY

### Verfügbar (40+)

#### Legacy/Existing (16)
- home, services, about, contact, email, phone, search, menu, close
- arrow-right (existing in CI), check (existing), star, heart, info, warning, download

#### New (24)
- arrow-up, arrow-down, arrow-left, settings, gear, user, users, bell
- chart, bar-chart, trending-up, trending-down, filter, sort
- expand, collapse, copy, share, circle, square, checkbox
- refresh, loader

---

## 🔄 FUTURE ADDITIONS

Icons können jederzeit erweitert werden. Vorschläge für nächste Iteration:

- Soziale Medien: linkedin, twitter, facebook, github
- Dokumente: pdf, csv, file, folder, archive
- Kommunikation: message, notification, comment, reply
- E-Commerce: cart, payment, receipt, shipping
- Sicherheit: lock, unlock, shield, key

---

## 📞 FRAGEN & SUPPORT

**Contact:** jan.michaelsen@pro4ex.consulting  
**Icon Source:** `Pro4Ex-CI-Templates/04-Assets/icons/`

---

**Icon Library v1.0 – Enterprise Ready ✓**
