---
title: Selektorer
eleventyNavigation:
    key: selektorer
    parent: css
    order: 2
    excerpt: Selektorer används för att skriva regler och välja element.
---

{% intro %}

En CSS selektor bestämmer vilket eller vilka element som en CSS-regel påverkar. Det finns ett antal olika typer av selektorer.

-   typ (eng. type) selektor, väljer ett element `p`.
-   klass (eng. class) selektor, väljer ett element med en specifik klass `.class`.
-   id selektor, väljer ett element med en specifik id `#id`.

Selektorer används även av javascript för att välja element.

### Tänk på

-   Använd främst klass selektorer ```.class```.
-   Selektorer kan kombineras ```p.class```.
-   ID selektorer är unika, det vill säga två element kan inte ha samma id ```#unik```.
- Ett element kan använda flera klasser, separera dem med ett blanksteg ```<p class="class1 class2">```.

{% endintro %}

{% instruktioner %}

Skapa två dokument, `selektorer.html` och en tillhörande css fil. HTML filen behöver innehålla den grundläggande HTML strukturen.

```html
<main id="main-content">
    <h1 id="start">Lorem ipsum</h1>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>
        Suspendisse sollicitudin id lacus at tristique. Aenean sem neque, mollis
        eu cursus et, vulputate ut mauris. Quisque eu placerat justo. Etiam
        risus lectus, porttitor vitae aliquam in, laoreet eget sem. Morbi mollis
        efficitur rhoncus. Fusce dapibus orci vitae est ullamcorper viverra.
        Aenean a neque elit.
    </p>
    <p>
        Vestibulum tristique luctus tellus non porttitor. Morbi a nibh non odio
        tincidunt mattis eu laoreet lectus. Interdum et malesuada fames ac ante
        ipsum primis in faucibus.
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

Skapa ett CSS-dokument, `selektorer.css` och länka till det i HTML dokumentet.

En bra start är att se till att dokumentet är läsbart för alla. Detta kan göras med bland annat att centrera innehållet, inte göra det "för brett", det vill säga begränsa radlängden.

```css
body {
    width: min(80ch, 100vw - 2rem);
    margin-inline: auto;

    color: #121212;
    font-family: sans-serif;
    font-size: 1rem;
}
```

Ett nästa steg efter detta är att arbeta med text, storlek, typsnitt och färg. Skapa en eller flera regler för text. En ingress (eng. lead) är en inledning till en artikel, den kan oftast identifieras visuellt.

```css
.lead {
    font-size: 1.4rem;
}
```

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Skapa `selektorer.html` samt `selektorer.css` och länka samman dem.

Studera html koden och identifiera de olika selektorer som kan användas i dokumentet.

#### Uppgift 2

Testa olika selektorer i dokumentet.
Skriv CSS-regler för text, rubriker samt paragrafer `h1 h2 p`:

-   storlek
-   typsnitt
-   färg

{% endbas %}

{% extra %}

#### Uppgift 3

Skapa en CSS-regel för länken med `.backto` klassen.

{% endextra %}

{% enduppgifter %}

{% facit "Tips: länkar" %}

Element kan ha olika states. Detta ses framförallt på länkar. Ett state är tillexempel `hover` och state skrivs `regel:state`.

```css
a {
    color: red;
}

a:hover {
    color: blue;
}
```

{% endfacit %}
