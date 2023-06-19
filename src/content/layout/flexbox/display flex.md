---
title: Display flex
eleventyNavigation:
    key: display flex
    parent: flexbox
    order: 1
    excerpt: Webblayoutens silvertejp.
---

{% instructions %}

## Introduktion

Flexbox är ett layout-system som används med CSS för att styra layouten på en webbplats. I ett element med `display: flex` kan element placeras i valfri ordning.

Elementens ordning kan styras och elementen kan placeras i rader eller kolumner.

### Tänk på

-   Syntax, `display: flex`
-   Flex är ofta lösningen™

## Instruktioner

Skapa två dokument, `flex.html` och `flex.css`. HTML filen ska innehålla den grundläggande HTML strukturen med en länk till .css filen

Skapa ett `<main>` element i dokumentets `<body>`. Skapa sedan följande struktur för en navigation:

```html
<nav>
    <ul>
        <li>
            <a href="#">Hem</a>
        </li>
        <li>
            <a href="#">Om</a>
        </li>
        <li>
            <a href="#">Kontakt</a>
        </li>
    </ul>
</nav>
```

Strukturen består av en lista i ett `<nav>` element, detta är vanligt förekommande på webbsidor. Flex kan nu användas på listan för att placera navigationen på en rad.

Testa även egenskapen `flex-direction` och sätt dess värde till `row` eller `column`.

```css
nav > ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}
```

Viktigt är att flex sätts på `<ul>` elementet och inte `<nav>` då nav enbart innehåller ett element, `<ul>`.

Men om vi exempelvis behöver en logo eller en rubrik för sidan så kan flex användas på `<nav>` elementet.

```html
<nav>
    <h1>Sidans titel</h1>
    <!-- Listan -->
</nav>
```

För att centrera innehållet vertikalt kan `align-items` användas. För att kontrollera den horisontella placeringen kan `justify-content` användas.

Men den riktning som styrs av dessa genskaper ändras om `flex-direction` ändras. Testa även det.

```css
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

Testa olika varianter av flex egenskaperna. Du hittar mer på [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

Prova att ladda in tidigare dokument och använd `.container` klassen tillsammans med en navigation.

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad händer när ett element har display flex till skillnad från block?

#### Uppgift 2

Hur fungerar flex-direction? Hur påverkar det align-items och justify-content?

{% endbase %}

{% endquestions %}

{% extra "Tips" %}

Tänk på att gruppera dina element i containers. För att förstå och kunna skapa bra layouter med kontroll i HTML och CSS så behöver du kunna arbeta med detta.
Gruppera liknande innehåll för att styra dess position.

Följande exempel visar hur du kan styra innehållet med flex, placera följande element i en flex-container och studera skillnaden:

```html
<h1>Exempelrubrik</h1>
<p>Detta är en paragraf med text</p>

<div>
    <h1>Exempelrubrik</h1>
    <p>Detta är en paragraf med text</p>
</div>
```

Ett ytterligare exempel med en bild som skapar en layout med två kolumner.

```html
<div class="flex">
    <img src="https://picsum.photos/200/300" alt="placerholder image" />
    <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
    </ul>
</div>
```

{% endextra %}
