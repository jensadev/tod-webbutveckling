---
title: Mått och värden
eleventyNavigation:
    key: mått och värden
    parent: css
    order: 3
    excerpt: CSS använder olika typer av måttenheter för att ange storleken på element, fonter och så vidare.
---

{% intro %}

För att skapa en webbplats med CSS så krävs det ett antal måttenheter. Flera av måtten grundar sig i pixlar. Måtten behövs för att bestämma storleken på allt från fonter, bilder och layouter.
Vanliga måttenheter är:

-   px (pixlar)
-   em (enhet), är relativ till det överliggande elementets storlek, så `16px` om det är `16px`.
-   rem (enhet), är relativ till root elementets storlek, så `16px` om det är `16px`.
-   % (procent), är relativ till det överliggande elementets storlek, så `80%` av elementet.
-   vw (viewport width), är relativ till bredden på webbläsarfönstret.
-   vh (viewport height), är relativ till höjden på webbläsarfönstret.

### Tänk på

-   Måttenheter är relativa och inte absoluta.
-   Måttenheter är relativa till en annan måttenhet, det vill säga ett annat element.
- Inline element kan inte ha en höjd eller bredd, så dessa måttenheter fungerar inte på dessa element.

{% endintro %}

{% instruktioner %}

Skapa två dokument, `units.html` och `units.css`. HTML filen ska innehålla den grundläggande HTML strukturen med en länk till `.css` filen.

Skapa ett `<main>` element i dokumentets `<body>`.
I main elementet ska sedan följande HTML element med text skapas:

-   `h1`, Mått och värden
-   `ul`, med en lista med måttenheter och dess förklaringar
    -   `li`, px
    -   `li`, em
    -   `li`, rem
    -   `li`, %
    -   `li`, vw vh
-   `h2`, Underrubrik
-   `p`, Använd [Lorem ipsum](https://www.lipsum.com/) för att fylla ut text. Du kan skriva `lorem` och sedan tabba i vscode.
-   `h3`, Underrubrik
-   `p` element. Använd [Emmet](https://emmet.io/) i VSCode så kan du skriva ```p*3>lorem``` för att skapa tre stycken `<p>` element med text.

I det tillhörande CSS dokumentet ska följande regler skapas:

-   `body`, `font-size: 1rem;`
-   `.container`, `width: min(80ch, 100vw - 2rem); margin-inline: auto;`
-   Text element med med root relativ storlek
    -   `h1`, `font-size: 3rem;`
    -   `h2`, `font-size: 2rem;`
    -   `h3, ul` `font-size: 1.4rem;`
    -   `p`, `font-size: 1rem;`
    -   `li`, `font-size: 1em;`

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Skapa dokumenten och skriv koden.

Öppna utvecklarverktyget i Chrome och sök reda på Styles>Computed.
Hur har webbläsaren räknat ut måttenheterna?

#### Uppgift 2

Applicera ```container``` klassen på `main` elementet.

Testa att ändra storleksmåtten på elementen. Vad händer?

{% endbas %}

{% extra %}

#### Uppgift 3

Vad händer om du ändrar font storleken på body elementet.

Prova att ändra webbläsarens font storlek, det finns i settings, hur påverkas sidan?

{% endextra %}

{% enduppgifter %}
