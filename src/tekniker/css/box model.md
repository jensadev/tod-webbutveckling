---
title: Box model
eleventyNavigation:
    key: box model
    parent: css
    order: 4
    excerpt: Viktigt
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

- En padding på 8 pixlar resulterar att elementets box blir 16 pixlar större, det vill säga den dubblas
- Se till att dina element innehåller sitt innehåll, att det inte är tomt

{% endintro %}

{% instruktioner %}

## Instruktioner

I utvecklingsverktygen i din webbläsare (F12) kan du inspektera element för att undersöka boxen. Leta efter Styles >> Computed.

Prova detta verktyg för att undersöka elements storlek.

{% image "./src/images/boxmodel.png", "Box model" %}

Skapa ett nytt html dokument, ```index.html```.
Börja med att skapa grundläggande HTML-element. 
I detta skapa sedan en semantisk sidstruktur, ```nav```, ```main```, ```footer```.

```html
<body>
    <nav></nav>
    <main></main>
    <footer></footer>
</body>
```

Undersök elementens storlek utan innehåll. Prova sedan att sätta innehåll och CSS för att påverka elementens storlek.

```css
html, body {
    height: 100%;
}
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Undersök och studera boxmodellen.

#### Uppgift 2



{% enduppgifter %}
