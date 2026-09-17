# GMA Poster Website – GitHub Pages

Diese kleine statische Website ist für den QR-Code auf dem Poster gedacht. Sie funktioniert ohne Framework und ohne externe Abhängigkeiten.

## Dateien

- `index.html` – Inhalt und Seitenstruktur
- `styles.css` – Design und responsive Darstellung
- `script.js` – Take-home-Pop-up und kleine Interaktionen
- Veröffentlichung/DOI ist direkt in `index.html` verlinkt: `https://doi.org/10.3205/26gma137`
- `assets/poster.pdf` – Poster als PDF
- `assets/poster-preview.webp` – optimierte Vorschau des Posters
- `assets/favicon.svg` – kleines Browser-Icon


## Designfarben

Die Website verwendet als zentrale Farbtöne:

- Blau: `#173240`
- Grün: `#54AF3A`

Abgestufte Blau- und Grüntöne sind in `styles.css` unter `:root` definiert.

## 1. Take-home Message ändern

Die Platzhalter stehen an zwei Stellen:

1. in `index.html` im Abschnitt `#take-home`
2. im Pop-up am Ende von `index.html` (`id="modalText"`)

Am einfachsten nach `TAKE-HOME-PLATZHALTER` bzw. `Platzhalter:` suchen.

## 2. Kontaktbilder einfügen

In `index.html` nach `BILD-PLATZHALTER` suchen. Den jeweiligen Block wie

```html
<div class="portrait-placeholder"><span>LG</span></div>
```

durch z. B.

```html
<img class="contact-photo" src="assets/lena.jpg" alt="Porträt von Lena Giebeler">
```

austauschen. Das Bild dann in `assets/` ablegen.

Optional in `styles.css` ergänzen:

```css
.contact-photo {
  width: 112px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}
```

## 3. LinkedIn-Links

Die LinkedIn-Profile sind bereits eingetragen:

- Lena Giebeler: `https://de.linkedin.com/in/lena-giebeler`
- Lisa M. Rieckmann: `https://de.linkedin.com/in/lisarieckmann`


## 4. Auf GitHub Pages veröffentlichen

1. Neues GitHub-Repository erstellen.
2. Alle Dateien und den Ordner `assets/` in die oberste Ebene des Repositories hochladen.
3. In GitHub unter **Settings → Pages** gehen.
4. Bei **Build and deployment**: **Deploy from a branch** wählen.
5. Branch `main`, Ordner `/ (root)` auswählen und speichern.
6. Nach kurzer Zeit ist die Seite typischerweise unter `https://DEIN-NAME.github.io/REPOSITORY-NAME/` erreichbar.
7. Genau diese URL anschließend für den QR-Code verwenden.

## Hinweise

- Das Pop-up erscheint aktuell bei **jedem Seitenaufruf**.
- Das Poster öffnet sich beim Antippen als PDF, damit auf dem Smartphone hinein gezoomt werden kann.
- Die Seite verwendet Systemschriften und funktioniert daher ohne Google Fonts oder weitere externe Dienste.


## 5. Abstract & DOI

Der veröffentlichte GMA Abstract ist direkt im Abstract-Kasten aufklappbar. Die Veröffentlichung wird über die DOI `10.3205/26gma137` verlinkt.

Im Hero-Bereich steht statt Kennzahlen das Ziel der Arbeit: **Entwicklung eines Akzeptanzframeworks für OSCE und OSPE aus Studierendensicht**.


## Kopfzeile / Logo
Das UKA-Logo liegt als `assets/uka-logo.png` vor. Die Navigation ist in der Reihenfolge Abstract → Poster → Kontakt → Take-home Message aufgebaut.
