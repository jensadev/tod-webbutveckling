---
title: Vad är HTML
eleventyNavigation:
    key: vad är html
    parent: html
    order: 0
    excerpt: Hypertext Markup Language, webbens språk.
---

{% intro %}

Hypertext Markup Language(HTML) är ett märkspråk som används för att märka upp webbsidor. HTML strukturerar upp text och märker upp den med taggar. Det för att en webbläsare ska kunna tolka texten och visa den som en webbsida.

HTML dokument är träd av noder, där noderna är element eller text.

HTML är en standard som styrs av [World Wide Web Consortium](https://www.w3.org/).

### Tänk på

-   Filändelsen för HTML dokument är .html.
-   Startsidan på webben är alltid index.html.
-   Använd små bokstäver, undvik specialtecken `()@'"&%/&åäö` och mellanslag i filnamn för att undvika problem.
-   Använd en [IDE](https://sv.wikipedia.org/wiki/Integrerad_utvecklingsmilj%C3%B6) som [Visual Studio Code](https://code.visualstudio.com/) för att skapa och redigera dina dokument.

{% endintro %}

{% instruktioner %}

Skapa en fil, `index.html` och öppna den för redigering. Du kan använda ett valfritt textredigeringsprogram, men det underlättar om det stöder HTML.

Prova sedan att skriva text i filen och spara den. Öppna sedan filen i en webbläsare, leta reda på filen på din dator och dubbelklicka på den för att öppna (förutsatt att du sparat med filändelsen `.html`).

Du kommer se att texten visas som vanlig text.

```html
Hej på dig! Det här är text i en html fil.
```

Fortsätt redigera filen, prova nu att skriva en rubrik med hjälp av en `h1` tagg.

```html
<h1>Det här är en rubrik</h1>
```

Du kan även redigera den text du skrev tidigare. Prova att använda dig av en `p` tagg för att skapa en paragraf.

```html
<h1>Hej på dig!</h1>
<p>Det här är text i en html fil.</p>
```

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Vad är HTML?

#### Uppgift 2

Hur bör du namnge dina HTML dokument? Vilken filändelse ska du använda?

{% endbas %}

{% enduppgifter %}
