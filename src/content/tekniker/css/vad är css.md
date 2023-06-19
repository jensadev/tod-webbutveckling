---
title: Vad är CSS
eleventyNavigation:
    key: vad är css
    parent: css
    order: 1
    excerpt: Cascading Style Sheets, språket som styr presentationen av HTML.
---

{% instructions %}

## Introduktion

Cascading Style Sheets(CSS) är ett kompletterande språk till HTML som används för att skapa stil och layout. CSS kan bland annat användas för att byta färger, sätta marginaler och dela upp ditt innehåll.

### Tänk på

-   Filändelsen för CSS-dokument är `.css`.
-   CSS skrivs med regler.
-   En regel har en selektor (eng. selector) för att välja vilka(et) element som ska påverkas av regeln.
-   Alla CSS regler ska öppnas och stängas, det görs med måsvingar `{ ... }`.

## Instruktioner

Öppna ett tidigare HTML dokument, ```index.html```. CSS kan skrivas direkt i HTML-dokumentet med hjälp av `<style>` taggen. Style taggen skrivs oftast nästlad i `<head>`, men det är inte ett måste.

```html
<head>
    <!-- tidigare kod -->
    <style>
        h1 {
            color: red;
        }
        p {
            color: green;
        }
    </style>
</head>
```

För att separera HTML och CSS så skrivs CSS oftast i en separat fil. Det gör att du kan använda samma CSS på flera HTML dokument och det blir lättare att felsöka.

För att använda en separat CSS-fil skapa en ny fil, ```style.css```. Kopiera sedan in CSS-reglerna från HTML-dokumentet.

```css
h1 {
    color: blue;
}
p {
    color: yellow;
}
```

För att använda ett separat CSS-dokument så måste du länka till det i HTML-dokumentet. Länkningen sker med `<link>` elementet. Skriv länk-elementet nästlat i HTML-dokumentets `<head>` tagg. 

```html
<head>
    <!-- tidigare kod -->
    <link rel="stylesheet" href="style.css" />
</head>
```

Ta sedan bort `<style>` taggen från HTML-dokumentet.

CSS kan även skrivas inline, med det menas att CSS-reglerna skrivs direkt i HTML-elementet. Detta är inte rekommenderat eftersom det blir svårare att felsöka.

```html
<p style="color: purple;"></p>
```

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad är CSS?

#### Uppgift 2

Vad bör du tänka på när du namnger CSS-dokument? Vilken filändelse ska du använda?

#### Uppgift 3

Ge exempel på hur du kan skriva CSS-regler för att använda i HTML-dokument.

{% endbase %}

{% advanced %}

#### Uppgift 4

Förklara vad cascade är och hur det fungerar.

{% endadvanced %}

{% endquestions %}

{% extra "CSS cascade" %}

För CSS är det viktigt i vilken ordning de olika reglera skrivs. Det kallas för cascade (en del av namnet). Cascade styr vilken CSS-regel som används.

Ordningen för det är:

1. Inline CSS
2. CSS-dokument
3. Style tagg

Om du ska tvinga en regel att gälla över andra kan du använda `!important` efter CSS-egenskapen.

```css
h1 {
    color: red !important;
}
```

Var försiktig med `!important` eftersom det kan göra din kod svår att felsöka.

Cascade påverkas av flera faktorer, du kan läsa mer om [Cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) på MDN.

{% endextra %}
