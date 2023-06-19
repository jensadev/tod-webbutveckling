---
title: Selektorer
eleventyNavigation:
    key: selektorer
    parent: css
    order: 2
    excerpt: Selektorer används för att skriva regler och välja element.
---

{% instructions %}

## Introduktion

En CSS-selektor bestämmer vilket eller vilka element som en CSS-regel påverkar. Det finns ett antal olika typer av selektorer.

-   typ (eng. type) selektor, väljer ett element `p`, `h1`, `main` osv.
-   klass (eng. class) selektor, väljer ett element med en specifik klass `.class-name`.
-   id selektor, väljer ett element med en specifik id `#id-name`.

### Tänk på

-   Använd främst klass selektorer `.class`.
-   Selektorer kan kombineras `p.class`.
-   ID selektorer är unika, det vill säga två element kan inte ha samma id `#unik`.
- Ett element kan använda flera klasser, separera dem med ett blanksteg `<p class="class1 class2">`.
- För att identifiera selektorns typ så titta på hur den börjar, bokstav är element, punkt är klass och hashtag är id. 

## Instruktioner

Skapa två dokument, `selektorer.html` och en tillhörande css fil, ```selektorer.css```. HTML filen behöver innehålla den grundläggande HTML strukturen och en länk till CSS-dokumentet.

Skriv följande HTML i dokumentet.

```html
<main id="main-content" class="container">
    <h1 id="start">Lorem ipsum</h1>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>
        Suspendisse sollicitudin id lacus at tristique. Aenean sem neque, mollis
        eu cursus et, vulputate ut mauris. Quisque eu placerat justo. Etiam
        risus lectus, porttitor vitae aliquam in, laoreet eget sem. Morbi mollis
        efficitur rhoncus. Fusce dapibus orci vitae est ullamcorper viverra.
        Aenean a neque elit.
    </p>
    <h2>Vivamus sed</h2>
    <p>
        Vivamus sed ante molestie dolor vehicula tempor at ut diam. Aenean in
        aliquam neque. Ut venenatis facilisis tempor. Curabitur semper ipsum sit
        amet nibh vulputate vulputate.
    </p>
    <blockquote cite="https://www.lipsum.com/">
        Aenean id tristique justo.
    </blockquote>
    <p>
        Etiam efficitur orci ac arcu varius fringilla. Nam laoreet eget nunc ut
        interdum. Quisque rutrum tempus consectetur. Duis pharetra sollicitudin
        rhoncus.
    </p>
    <a class="backto" href="#start">Back to top</a>
</main>
```

En bra start är att se till att dokumentet är läsbart för alla. Detta kan göras med bland annat att centrera innehållet, inte göra det "för brett", det vill säga begränsa radlängden.

Skriv de två följande CSS reglerna i dokumentet. De använder typ selektorer och heter `body` och `.container`.

- `body` regeln sätter färg, typsnitt och storlek på text. Det påverkar alla element i `body` elementet.
- `.container` regeln begränsar innehållets bredd och centrerar det, denna klass går att använda på alla element där du önskar detta. Används på `main` med klassen.

```css
body {
    color: #121212;
    font-family: sans-serif;
    font-size: 1rem;
}
.container {
    width: min(80ch, 100vw - 2rem);
    margin-inline: auto;
}
```

Du har nu en start för en layout. Fortsätt med att skapa fler regler. Använd dig av egenskaperna `color` och `font-size`. Skapa regler för `h1`-elementet samt använd klassen `.lead`. Lead är engelska för ingress och det är en inledning till en text. En ingress kan oftast identifieras visuellt.

```css
h1 {
    // ...
}
.lead {
    font-size: 1.4rem;
}
```

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad är en selektor?

#### Uppgift 2

Ge exempel på två eller fler olika typer av selektorer.

#### Uppgift 3

Hur kan du använda flera css regler för ett element?

{% endbase %}

{% advanced %}

#### Uppgift 4

Vad kan du använda pseudo-klasser till?

{% endadvanced %}

{% endquestions %}

{% extra "Tips: länkar" %}

Element kan ha olika states. Detta ses framförallt på länkar. Ett state är tillexempel `hover` och state skrivs `regel:state`. Detta kallas för pseudo-klasser (eng. pseudo-classes).

```css
a {
    color: red;
}

a:hover {
    color: blue;
}
```

Använd `:hover` för att skapa en stil för `.backto` länken.

Det finns väldigt många fler pseudo-klasser. På [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) hittar du en lista.

{% endextra %}
