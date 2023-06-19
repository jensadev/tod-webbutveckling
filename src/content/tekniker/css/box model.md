---
title: Box model
eleventyNavigation:
    key: box model
    parent: css
    order: 4
    excerpt: Box model är det som omger varje element i HTML.
---

{% instructions %}

## Introduktion

Allt i CSS är boxar. Boxen kan förenklat vara av två typer, block och inline. Block element har en höjd och bredd som är lika stor som dess innehåll. Inline element har ingen höjd eller bredd, så dessa måttenheter fungerar inte på dessa element.
Utöver detta så är storleken på elementets box en summa av flera delar.

1. Innehållet
2. Padding
3. Border
4. Margin

### Tänk på

-   Måttet på en padding/border/margin dubblas, detta eftersom den finns på båda sidorna av ett element.
-   Se till att dina element har innehåll.

## Instruktioner

I utvecklingsverktygen i din webbläsare (F12) kan du inspektera element för att undersöka boxen. Leta efter Styles >> Computed. Prova detta verktyg för att undersöka elements storlek.

{% image "content/images/boxmodel.png", "Box model" %}

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

Elementen du arbetat med här ovan är block element. Prova att göra några av dessa till inline element. Vad händer med storleken?

```css
main {
    display: inline;
}
```

Skapa sedan ett `<p>` element. Märk upp en del av texten med `<span>`, testa sedan att sätta `width` och `height` för `span` elementet.

```html
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Ut enim ad minim veniam</span>, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
</p>
```


{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Förklara vad boxmodellen är och hur den fungerar.

#### Uppgift 2

Ge exempel på CSS-egenskaper som påverkar boxmodellen.

{% endbase %}

{% endquestions %}

{% extra "Tips" %}

Webbläsaren har ett antal inbyggda stilar för att göra "ostilat" HTML-innehåll mer läsbart. De grundstilarna sätter padding och margin på element samt ändrar text-storlekar. Det är bra att känna till då detta påverkar hur dina element ser ut.

För att ta bort inbyggd padding och margin på alla element kan du använda:

```css
* {
    padding: 0;
    margin: 0;
}
```

Mer sofistikerade varianter på detta brukar kallas för en [CSS-reset](https://meyerweb.com/eric/tools/css/reset/).

{% endextra %}
