---
title: Slutuppgift css
eleventyNavigation:
    key: slutuppgift css
    parent: css
    order: 110
    excerpt: För att testa dina kunskaper på området kan du göra denna slutuppgift.
    test: true
---

För att avsluta området så ska du kombinera det du hittills arbetat med i en slutuppgift.

Kopiera ditt HTML-dokument från den tidigare slutuppgiften, `index.html`. Sidan ska innehålla HTML-grundstrukturen samt ett antal element.

```html
...
<header>
    <h1>...</h1>
</header>
<main>
    <p>...</p>
    ...
</main>
<footer>
    <p>...</p>
</footer>
```

Dokumentet innehåller ett antal olika HTML-element som du ska formattera med CSS. Skapa en CSS-regel för body-elementet som ändrar `color`, `background-color`.

### Container

För struktur-elementen på sidan, header, main och footer, ska du använda följande CSS-klass:

```css
.container {
}
```

För `.container` sätt attributen `max-width: 48rem;` och `margin: 0 auto;`.

### Font

Använd en font från [Google Fonts](https://fonts.google.com/). Du kan sätta `font-family` på body-elementet eller text-elementen.

Styla sedan rubriker och paragrafer.

### Border

Skapa en CSS-klass som sätter `border-top` för main elementet.

## 6665Tips

Ett tips för bilder är att sätta `max-width` till `100%` för img-element. Då skalar bilderna efter sidans storlek.
