---
title: En webbsida
eleventyNavigation:
    key: en webbsida
    parent: html
    order: 5
    excerpt: Här får du testa att sätta ihop delarna du lärt dig till en webbsida.
---

{% intro %}

Du har lärt dig att skapa en grundstruktur för en webbsidaoch de element som används för att skapa rubriker, paragrafer punktlistor.

Du ska nu använda dina kunskaper för att skapa en webbsida med innehåll.

### Tänk på

-   Börja alltid med HTML grundstrukturen.
-   HTML är otroligt robust, det låter dig göra fel.
-   Öppna och stäng alla taggar du använder.

{% endintro %}

{% instruktioner %}

Skapa ett nytt dokument, `index.html` och öppna det i din textredigerare.

Börja med att skapa grundstrukturen för en webbsida. Var noga med att du får med alla taggar som behövs.

Med strukturen på plats kan du nu skapa en navigationslista överst i `<body>` taggen. Navigationslistan ska innehålla tre länkar, en till startsidan och två till andra sidor på webbplatsen.

Listan är nästlad i det semantiska elementet `nav` för att indikera att det är en navigation.

```html
<nav>
    <ul>
        <li><a href="index.html" title="Tillbaka till startsidan">Hem</a></li>
        <li><a href="element.html">Element</a></li>
        <li><a href="attribut.html">Attribut</a></li>
    </ul>
</nav>
```

Efter detta så följer sidans huvudinnehåll. Huvudinnehållet är nästlat i `<main>` taggen.

```html
<main>
    <h1>Detta är en rubrik, med rubriknivå 1</h1>
    <p>Detta är en paragraf med text.</p>
    <!-- Fyll på med ditt eget innehåll -->
</main>
```

Använd dig av en bild. Du lägger till bilder med `<img>` taggen. `img` taggens attribut `src` anger vilken bild som ska visas (sökvägen till bilden) och `alt` anger en beskrivning av bilden.

Följande kod visar hur du kan använda dig av en bild från [picsum.photos](https://picsum.photos/).

```html
<img src="https://picsum.photos/800/600" alt="Bild från picsum.photos" />
```

Använd dig sedan av flera HTML-element för att skapa en sida med innehåll. Du kan hitta fler exempel på HTML-element på [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Validering

Avsluta ditt arbete med att validera din kod. Du kan validera din kod på [HTML Checker](https://validator.w3.org/nu/). Att validera koden berättar för dig om du har gjort några fel i din kod och ger dig tips på hur du kan lösa problemen.

{% endinstruktioner %}
