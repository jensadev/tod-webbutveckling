---
title: Vad är CSS
eleventyNavigation:
    key: vad är css
    parent: css
    order: 1
    excerpt: Cascading Style Sheets, språket som styr presentationen av HTML.
---

{% intro %}

Cascading Style Sheets(CSS) är ett kompletterande språk till HTML som används för att skapa stil och layout. CSS kan bland annat användas för att byta färger, sätta marginaler och dela upp ditt innehåll.

### Tänk på

-   Filändelsen för CSS-dokument är .css.
-   CSS skrivs med regler.
-   En regel har en selektor (eng. selector) för att välja vilka(et) element som ska påverkas av regeln.
-   Alla CSS regler ska öppnas och stängas, det görs med måsvingar `{ ... }`.

{% endintro %}

{% instruktioner %}

Öppna ett tidigare HTML dokument, ```index.html```. Du kan skriva CSS direkt i HTML-dokumentet med `<style>` taggen. Style taggen skrivs oftast nästlad i `<head>`, men det är inte ett måste.

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

Kopiera CSS koden till ett eget dokument, döp dokumentet till `style.css`.

```css
h1 {
    color: blue;
}
p {
    color: yellow;
}
```

Skapa sedan en länk till stilmallen från ditt HTML-dokument. Detta görs som tidigare nästlat i HTML-dokumentets `<head>` tagg.

```html
<head>
    <!-- tidigare kod -->
    <link rel="stylesheet" href="style.css" />
</head>
```

Du kan även skriva CSS inline, det vill säga direkt i taggen.

```html
<p style="color: grey;"></p>
```

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Redigera ```index.html``` och skriv CSS i med ```<style>``` i dokumentet.

#### Uppgift 2

Skapa ett CSS-dokument, kopiera koden. Länka sedan CSS filen från ```index.html```. Ladda om i webbläsaren, vilka stilar är det som används?

Ta bort style taggen från ```index.html```.

#### Uppgift 3

Prova att skriva CSS inline i HTML-dokumentet.

{% endbas %}

{% extra %}

#### Uppgift 4

Länka ditt CSS-dokument från ett annat HTML-dokument.

{% endextra %}

{% enduppgifter %}

{% facit "CSS cascade" %}

CSS cascade, det som styr vilken CSS-regel som används.

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

{% endfacit %}
