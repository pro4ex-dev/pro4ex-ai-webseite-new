# Pro4Ex Consulting – Website

Statische Website für Pro4Ex Consulting (Jan Michaelsen), gehostet über GitHub Pages.
Staging: `pro4ex.ai` → Production: `pro4ex.consulting`.

## Struktur

```
/
├── index.html              Home
├── about.html               Über Jan Michaelsen
├── services.html            Leistungen
├── contact.html              Kontakt
├── css/
│   ├── design-system.css    CI-Design-Tokens (Farben, Typo, Spacing) – Kopie aus Pro4Ex-CI-Templates
│   └── site.css              Seiten-/Layout-Styles (Header, Footer, Grids, Platzhalter)
├── assets/
│   ├── images/logo/          Logo-Varianten (Platzhalter, siehe Hinweis unten)
│   └── icons/                 Icon-Set
├── docs/
│   ├── anforderungsliste.md  Detaillierte Anforderungen (Seitenstruktur, Content-Vorgaben, Budget)
│   └── roadmap.md             Projekt-Roadmap & Phasenplan
├── archive/                   Frühere Arbeitsstände (nicht löschen, nur Referenz)
└── Pro4Ex-CI-Templates/       CI Source of Truth (PowerPoint, Brand Guidelines, Assets)
```

## Status

Das aktuelle Grundgerüst enthält die vollständige Seitenstruktur und das CI-Design-System,
aber noch **keine finalen Inhalte**. Alle Textstellen und Bilder, die noch fehlen, sind im
HTML als `[TODO: ...]` bzw. als gestrichelte Platzhalter-Box markiert – Details zu Wortzahlen
und Bildgrößen stehen in [`docs/anforderungsliste.md`](docs/anforderungsliste.md).

⚠️ Das aktuelle Logo (`assets/images/logo/pro4ex-logo*.svg`) ist ein **Platzhalter**
(Text-Logo). Das echte Logo muss noch von `pro4ex.consulting` bezogen und ausgetauscht werden.

## Nächste Schritte

1. GitHub-Repository anlegen und dieses Verzeichnis pushen
2. GitHub Pages in den Repo-Settings aktivieren
3. IONOS-DNS auf GitHub Pages zeigen lassen
4. Echten Content (Texte, Bilder, Logo) einpflegen – siehe `docs/roadmap.md`

## Lokale Vorschau

Da die Seite ohne Build-Tools auskommt, reicht es, `index.html` (oder eine der anderen
Seiten) direkt im Browser zu öffnen oder z. B. mit `npx serve` lokal zu servieren.
