---
title: Box model
eleventyNavigation:
    key: box model
    parent: css
    order: 4
    excerpt: Box model är det som omger varje element i HTML.
---

{% intro %}

## Introduktion

Ett elements position i en CSS-konstruktion är en box. Boxen är lika stor som elementets innehåll, vilket i sin tur kan vara andra element.
Utöver detta så är storleken på elementets box en summa av flera delar.

1. Innehållet
2. Padding
3. Border
4. Margin

### Tänk på

-   En padding på 8 pixlar resulterar att elementets box blir 16 pixlar större, det vill säga den dubblas
-   Se till att dina element innehåller sitt innehåll, att det inte är tomt

{% endintro %}

{% instruktioner %}

## Instruktioner

I utvecklingsverktygen i din webbläsare (F12) kan du inspektera element för att undersöka boxen. Leta efter Styles >> Computed.

Prova detta verktyg för att undersöka elements storlek.

{% image "./src/images/boxmodel.png", "Box model" %}

Skapa ett nytt html dokument, `index.html`.
Börja med att skapa grundläggande HTML-element.
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
    height: 100%;
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

## Uppgifter

### ⭐

#### Uppgift 1

Undersök och studera boxmodellen.

#### Uppgift 2

Koda, testa och undersök elementens storlek.

{% enduppgifter %}

{% facit %}

Notera att ett HTML dokument har ett par inbyggda stilar för att göra det läsbar. Det finns en inbyggd padding och margin samt att text har olika storlekar. Förekomsten av detta kan ställa till arbetet med layout och boxmodellen.

För att ta bort inbyggd padding och margin på alla element:

```css
* {
    padding: 0;
    margin: 0;
}
```

{% endfacit %}
