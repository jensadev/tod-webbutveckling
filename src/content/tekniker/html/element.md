---
title: Element
eleventyNavigation:
    key: element
    parent: html
    order: 2
    excerpt: Element är en del av den textstruktur som utgör en webbsida.
---

{% instructions %}

## Introduktion

HTML består av element. Element skrivs med hjälp av `<taggar>` som märker upp text. Webbläsaren tolkar taggarna och vilka element de representerar och visar upp resultatet som en webbsida.

Ett HTML element består av tre delar:

-   En öppningstagg `<p>`
-   Det innehåll som kommer mellan öppnings- och stängningstaggarna
-   En stängningstagg `</p>`

![HTML element](/assets/images/element@2x.png){.w-100}

Ett HTML element kan innehålla andra element, det kallas för nästlade element.

### Tänk på

-   Börja alltid med HTML grundstrukturen.
-   HTML är otroligt robust, det låter dig göra fel.
-   Öppna och stäng alla taggar du använder.
-   Element som har en radbrytning efter sig kallas för **block** element.

## Instruktioner

Skapa ett nytt dokument, `element.html`.

Skriv följande kod i dokumentet. Element som ska visas för användaren skrivs alltid mellan `<body>` taggarna i dokumentet. Det går alltså att säga att följande element ska vara nästlade i `<body>` taggen.

```html
<h1>Detta är en rubrik, med rubriknivå 1</h1>
<p>Detta är en paragraf med text.</p>
<p>Alla dessa element har en efterföljande radbrytning.</p>
<h2>Detta är en rubrik med nivå 2</h2>
<p>
    Notera öppningstaggarna och stängningstaggarna. Stängningen indikeras med
    ett snedsträck(slash).
</p>
<p>
    Du kan nästla element, <strong>det är en väldigt viktig princip</strong> för
    att skapa webbsidor.
</p>
<p>Det finns ett 140 tal olika taggar, leta reda på någon och prova!</p>
```

Redigera dokumentet element.html och gör följande ändringar.

```html
<p>Prova att skapa en punktlista.</p>
<p>Unordered list heter elementet för en oordnad punktlista.</p>
<ul>
    <li>Detta är ett list item</li>
    <li>Varje li tagg nästlat i ul taggen ger oss ett nytt element</li>
</ul>
```

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad är ett HTML element och hur används det?

#### Uppgift 2

Vilka tre delar har en HTML tagg?

#### Uppgift 3

Var skriver du HTML elementen som användaren ska se i ditt dokument?

{% endbase %}

{% advanced %}

#### Uppgift 4

Hur tolkar webbläsaren en HTML tagg som inte finns och vad visas då?

{% endadvanced %}

{% endquestions %}

{% extra "Tips" %}

Testa att skriva ett element med taggar som inte finns.

```html
<hej>Detta är ett element som inte finns</hej>
```

{% endextra %}
