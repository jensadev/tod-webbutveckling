---
title: Box model
eleventyNavigation:
    key: box model
    parent: css
    order: 4
    excerpt: Box model är det som omger varje element i HTML.
---

{% intro %}

Ett elements position i en CSS-konstruktion är en box. Boxen är lika stor som elementets innehåll, vilket i sin tur kan vara andra element.
Utöver detta så är storleken på elementets box en summa av flera delar.

1. Innehållet
2. Padding
3. Border
4. Margin

### Tänk på

-   En padding på 8 pixlar resulterar att elementets box blir 16 pixlar större, det vill säga den dubblas.
-   Se till att dina element har innehåll.
- Block element har en höjd och bredd som är lika stor som dess innehåll.
- Inline element har ingen höjd eller bredd, så dessa måttenheter fungerar inte på dessa element.

{% endintro %}

{% instruktioner %}

I utvecklingsverktygen i din webbläsare (F12) kan du inspektera element för att undersöka boxen. Leta efter Styles >> Computed. Prova detta verktyg för att undersöka elements storlek.

{% image "boxmodel.png", "Box model" %}

Skapa ett nytt html dokument, `box.html`. Börja med att skapa grundläggande HTML-element.
I detta skapa sedan en semantisk sidstruktur, `nav`, `main`, `footer`.

```html
<body>
    <nav></nav>
    <main></main>
    <footer></footer>
</body>
```

Undersök elementens storlek utan innehåll. Prova sedan att sätta innehåll och CSS för att påverka elementens storlek.

```css
html,
body {
    height: 100vh;
}
```

Skapa sedan regler för nav, main eller footer. Prova att sätta margin, padding och border.
Gör sedan liknande på element i dessa för att se effekten.

```css
main {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
}
```

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Undersök och studera boxmodellen med hjälp av webbläsarens utvecklingsverktyg.

#### Uppgift 2

Skapa `box.html` och `box.css` och länka samman dem. Skriv koden och undersöka elements storlek.

{% endbas %}

{% enduppgifter %}

{% facit "Tips" %}

Notera att ett HTML dokument har ett par inbyggda stilar för att göra det mer läsbart. Det finns en inbyggd padding och margin samt att text har olika storlekar. Förekomsten av detta kan ställa till arbetet med layout och boxmodellen.

För att ta bort inbyggd padding och margin på alla element kan du använda:

```css
* {
    padding: 0;
    margin: 0;
}
```

Mer sofistikerade varianter på detta brukar kallas för en [CSS-reset](https://meyerweb.com/eric/tools/css/reset/).

{% endfacit %}
