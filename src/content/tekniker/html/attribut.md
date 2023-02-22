---
title: Attribut
eleventyNavigation:
    key: attribut
    parent: html
    order: 4
    excerpt: Element kan ha attribut, de ger extra information om elementet.
---

{% intro %}

Element kan ha attribut (egenskaper). Ett attribut är en egenskap som tillhör ett element. Det ger webbläsaren ytterligare instruktioner om hur elementet ska visas.

Ett attribut skrivs med ett `namn`, likhetstecken `=` och värde. Värdet skrivs mellan dubbel-fnuttar `"värdet"`.

```html
attribut="värde"
```

Attribut skrivs alltid i öppningstaggen.

![HTML element med egenskap](/assets/images/attributes@2x.png){.w-100}

### Tänk på

-   Att alltid sätta fnuttar runt ett attributs värde.
-   Att alltid avsluta fnuttarna, de skrivs i par.
-   Attribut skrivs enbart i öppningstaggen.

{% endintro %}

{% instruktioner %}

Skapa ett nytt dokument, `attribut.html` med korrekt HTML-grundstruktur.

Skriv följande kod i dokumentet. [Ankar-elementet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) `<a>` används för att visa länkar i ditt dokument. Använd attributet `href` för att ange länkens adress. Det text som användaren ser är innehållet i `<a>` taggen.

Du kan även använda ankar element till att länka till andra filer i samma mapp.

```html
<a href="element.html">Element</a>
```

Det går även att länka till andra webbsidor. Använd attributet `target` för att öppna länken i ett nytt fönster.

```html
<p>
    Delar av den här guiden är översättningar från,
    <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
        >kom igång med HTML på MDN</a
    >. Läs gärna mer där.
</p>
```

Det finns väldigt många olika attribut som kan användas på olika element. Läs mer om attribut på [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

Bland de vanligaste attributen är `class` och `id`. De används för att identifiera element i CSS och JavaScript.

```html
<p class="text-red">Det här är en röd text.</p>
<button id="accept-button">Ok</button>
```

Klassens namn är kopplat till en CSS-regel. Men för att det ska fungera så måste du även skriva en CSS-regel. CSS-regler kan skrivas inuti `<style>` taggen i `<head>` taggen.

```html
<style>
    .text-red {
        color: red;
    }
</style>
```

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Förklara vad ett attribut är.

#### Uppgift 2

Ge exempel på vilka delar som ett attribut består av.

{% endbas %}

{% extra %}

#### Uppgift 3

Vad gör attributet `target` på ett `a` element? Vilka värden kan det ha?

#### Uppgift 4

Hur används attribut för att peka till andra filer?

Jämför `<a>` element och `<img>` element.

{% endextra %}

{% enduppgifter %}

{% facit "Extra" %}

Använd `<img>` elementet i index.html. `<img src="fil.typ">` använder `src` attributet för att peka till en bild. Likt `href` attributet så är det viktigt att sökvägen är korrekt om det är en lokal fil.

Kopiera in en bildfil i samma mapp som index.html. Använd sedan `<img>` taggen för att visa bilden på index.html.

Det går även att länka till bilder med en URL.

{% endfacit %}
