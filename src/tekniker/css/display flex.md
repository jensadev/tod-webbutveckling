---
title: Display flex
eleventyNavigation:
    key: display flex
    parent: css
    order: 5
    excerpt: Webblayoutens silvertejp.
---

{% intro %}

## Introduktion

Flexbox är ett layout-system som används med CSS för att styra layouten på en webbplats. I ett element med `display: flex` kan element placeras i valfri ordning.

Elementens ordning kan styras och elementen kan placers i rader eller kolumner.

### Tänk på

-   Syntax, `display: flex`
-   Flex är nästan alltid lösningen™

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa två dokument, flex.html och flex.css. HTML filen ska innehålla den grundläggande HTML strukturen med en länk till .css filen

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

Strukturen består av en lista i ett `<nav>` element, detta är vanligt förekommande på webbsidor.
Flex kan nu användas på listan för att placera navigationen på en rad.

Testa även egenskapen `flex-direction` och sätt dess värde till `row` eller `column`.

```css
ul {
    display: flex;
    list-style: none;
}
li {
    padding-right: 1rem;
}
```

Viktigt är att flex sätts på `<ul>` elementet och inte `<nav>` då nav enbart innehåller ett element, `<ul>`.

Men om vi exempelvis behöver en logo eller en rubrik för sidan så kan flex användas på `<nav>` elementet.

```html
<nav>
    <h1>Sidans titel</h1>
    ...
</nav>
```

För att centrera innehållet vertikalt kan `align-items` användas. För att kontrollera den horisontella placeringen kan `justify-content` användas.

Men den riktning som styrs av dessa genskaper ändras om `flex-direction` ändras. Testa även det.

```css
nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Skapa dokument och skriv koden.

Öppna utvecklarverktyget i Chrome och sök reda på de element som har egenskapen flex. Undersök verktygen för att testa och arbeta med flex.

#### Uppgift 2

Testa olika varianter av flex egenskaperna.

Du hittar ytterligare läsning på [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

### ⭐⭐

{% extra %}

#### Uppgift 3

Koda en layout med två kolumner. Den första kolumnen ska innehålla din navigation och den andra huvudinnehållet.

{% endextra %}

{% enduppgifter %}

{% facit %}

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

{% endfacit %}
