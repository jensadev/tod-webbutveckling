---
title: Dokumentstruktur
eleventyNavigation:
    key: dokumentstruktur
    parent: html
    order: 1
    excerpt: Strukturen på ett HTML dokument är viktig. Den påverkar hur webbläsaren tolkar dokumentet.
---

{% instructions %}

## Introduktion

HTML dokument består av en grundstruktur som är densamma för alla dokument. Det är viktigt att följa grundstrukturen för att webbläsaren ska kunna tolka dokumentet korrekt.

## Instruktioner

Skapa ett nytt dokument, `dokumentstruktur.html` och öppna det i din textredigerare.

Här nedan ser du grundstrukturen för ett HTML dokument. Kopiera in den i ditt dokument.

```html
<!DOCTYPE html>
<html lang="sv">
    <head></head>
    <body></body>
</html>
```

Dokumentet börjar alltid med en `<!DOCTYPE html>` tagg. Det anger vilken version av HTML som används. Efter detta så kommer `<html>` taggen, det är root noden i den trädstruktur som dokumentet är. `html` taggen innehåller ett attribut som anger vilket språk sidan är på.

I `<html>` taggen finns två andra taggar, `<head>` och `<body>`.

-   `head` taggen innehåller information om dokumentet, den är inte synlig för användaren.
-   `body` taggen innehåller allt som ska visas för användaren.

Prova att ladda sidan i din webbläsare, dokumentet fungerar men är tomt.

### Taggar som måste vara i `<head>`

I `<head>` taggen finns det taggar som måste finnas för att dokumentet ska fungera korrekt. Det är taggar som anger vilken typ av teckenkodning som används, vilken titel som ska visas i fliken i webbläsaren och vilken stil som ska användas.

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Titel på sidan</title>
</head>
```

`<meta>` taggen används för att ange information om dokumentet. I exemplet ovan så anger vi att teckenkodningen är `utf-8` och att sidan ska anpassas till skärmens bredd.

`title` taggen anger titeln på sidan som visas i fliken i webbläsaren.

Prova nu att ladda om ditt dokument i webbläsaren. Nu ska du se en flik med titeln `Titel på sidan`. Sidan är dock fortfarande tom eftersom vi inte har något innehåll i `<body>` taggen.

### Innehåll i `<body>`

I `<body>` taggen lägger vi in allt innehåll som ska visas för användaren. Det kan vara text, bilder, länkar, tabeller, formulär och mycket mer.

```html
<body>
    <h1>Titel</h1>
    <p>Text</p>
</body>
```

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vilket element är root noden i HTML dokumentet?

#### Uppgift 2

Vilket element innehåller information om dokumentet?

#### Uppgift 3

Vilket element innehåller allt innehåll som ska visas för användaren?

{% endbase %}

{% endquestions %}

{% extra "Tips" %}

Om du använder Visual Studio så får du med verktyget [Emmet](https://emmet.io/). Emmet underlättar otroligt mycket för att skriva HTML.

Ett exempel är att du kan skriva `html:5`, tabba &#11134; och direkt få ut grundstrukturen i ett HTML dokument.

[Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)

{% endextra %}
