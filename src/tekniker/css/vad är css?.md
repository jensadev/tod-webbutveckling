---
title: Vad är CSS?
eleventyNavigation:
    key: vad är css?
    parent: css
    order: 1
    excerpt: Cascading Style Sheets, språket som presenterar din HTML
---
{% intro %}

## Introduktion
Cascading Style Sheets(CSS) är ett kompletterande språk till HTML som används för 
att skapa stil och layout. CSS kan bland annat användas för att byta färger, 
sätta marginaler och dela upp ditt innehåll.

### Tänk på
 - Filändelsen för CSS är .css 
 - CSS kan skrivas inline(i ett HTML dokument) eller i ett eget dokument
 - CSS skrivs med regler
 - En regel har en selektor(eng. selector) för att välja vilka(et) element som ska påverkas
 - Alla CSS regler ska öppnas och stängas, det görs med ```{ ... }```

{% endintro %}

{% instruktioner %}

## Instruktioner
Öppna ett tidigare HTML dokument. Skriv inline(dvs. i dokumentet) CSS med ```<style>``` taggen.
Style taggen skrivs oftast nästlad i ```<head>```.

```html
<head>
    ...
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

Kopiera CSS koden till ett eget dokument, döp dokumentet till ```style.css```.
```css
h1 {
    color: red;
}
p {
    color: green;
}
```

Skapa sedan en länk till stilmallen från ditt HTML-dokument. Detta görs som tidigare
nästlat i HTML-dokumentets ```<head>``` tagg.
```html
<head>
    ...
    <link rel="stylesheet" href="style.css">
</head>
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Redigera ett HTML-dokument och skriv CSS.

#### Uppgift 2

Skapa ett CSS-dokument och redigera HTML dokumentet.

{% enduppgifter %}