🎯 PRO4EX LOGO INSTALLATION - WICHTIG!

Das echte Logo befindet sich hier:
https://pro4ex.consulting/wp-content/uploads/2023/09/Weiss-zentriert-Web-Page-Logo.png

═══════════════════════════════════════════════════════════════

SCHRITT 1: Logo manuell downloaden
───────────────────────────────────

1. Öffne diese URL in deinem Browser:
   https://pro4ex.consulting/wp-content/uploads/2023/09/Weiss-zentriert-Web-Page-Logo.png

2. Klick mit Rechtsklick auf das Bild

3. Wähle "Bild speichern unter"

4. Speichern als: pro4ex-logo-full.png

5. Speicherort: Dieser Ordner
   (Pro4Ex-CI-Templates/04-Assets/images/logo/)

═══════════════════════════════════════════════════════════════

SCHRITT 2: Verschiedene Größen erstellen
─────────────────────────────────────────

OPTION A - Online-Tool (EINFACH & EMPFOHLEN):
─────────────────────────────────────────────
1. Gehe zu: https://www.iloveimg.com/resize-image
2. Lade pro4ex-logo-full.png hoch
3. Stelle diese Größen ein und downloade:
   * 400x400 Pixel → speichern als: pro4ex-logo-medium.png
   * 200x200 Pixel → speichern als: pro4ex-logo-small.png
   * 32x32 Pixel → speichern als: pro4ex-logo-favicon.png

OPTION B - Windows (Paint/Photoshop):
──────────────────────────────────────
1. Öffne pro4ex-logo-full.png in Paint oder Photoshop
2. Gehe zu: Bild → Größe ändern
3. Erstelle für jede Größe eine neue Version:
   - 400x400px → Speichern als pro4ex-logo-medium.png
   - 200x200px → Speichern als pro4ex-logo-small.png
   - 32x32px → Speichern als pro4ex-logo-favicon.png

OPTION C - Mac/Linux (Terminal):
────────────────────────────────
Kopiere diese Befehle ins Terminal:

cd "Pro4Ex-CI-Templates/04-Assets/images/logo"

convert pro4ex-logo-full.png -resize 400x400 pro4ex-logo-medium.png
convert pro4ex-logo-full.png -resize 200x200 pro4ex-logo-small.png
convert pro4ex-logo-full.png -resize 32x32 pro4ex-logo-favicon.png

═══════════════════════════════════════════════════════════════

SCHRITT 3: Finale Ordnerstruktur überprüfen
────────────────────────────────────────────

Dieser Ordner sollte dann so aussehen:

✅ FERTIG:
  ├── pro4ex-logo-full.png           (841 × 646px) ← ORIGINAL
  ├── pro4ex-logo-medium.png         (400 × 400px)
  ├── pro4ex-logo-small.png          (200 × 200px)
  ├── pro4ex-logo-favicon.png        (32 × 32px)
  └── README-LOGO-INSTALLATION.txt   (Diese Datei)

❌ ZU LÖSCHEN:
  └── pro4ex-logo-placeholder.svg    (Nur Platzhalter)

═══════════════════════════════════════════════════════════════

🚀 NACH DER INSTALLATION
─────────────────────────

1. Lösche: pro4ex-logo-placeholder.svg
2. Lösche: README-LOGO-INSTALLATION.txt (optional)
3. Die HTML-Datei (index-ci-optimiert.html) findet die Logos automatisch
4. Teste im Browser: Favicon sollte im Browser-Tab sichtbar sein
5. Upload auf GitHub - fertig!

═══════════════════════════════════════════════════════════════

📞 HILFE & FRAGEN
─────────────────
E-Mail: jan.michaelsen@pro4ex.consulting
Website: https://pro4ex.consulting

═══════════════════════════════════════════════════════════════

Erstellt: 27. Juni 2026
Version: 1.0
