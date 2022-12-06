---
title: Attribut
eleventyNavigation:
    key: attribut
    parent: html
    order: 3
    excerpt: Element kan ha attribut, de ger extra information om elementet.
---

{% intro %}

Element kan ha attribut (egenskaper). Ett attribut är en egenskap som tillhör ett element. Det ger webbläsaren ytterligare instruktioner om hur elementet ska visas.

Ett attribut skrivs med ett `namn`, likhetstecken `=` och värde. Värdet skrivs mellan dubbel-fnuttar `"värdet"`.

```html
attribut="värde"
```


### Tänk på

-   Att alltid sätta fnuttar runt ett attributs värde.
-   Att alltid avsluta fnuttarna, de skrivs i par.
-   Attribut skrivs enbart i öppningstaggen.

{% endintro %}

{% instruktioner %}

Skapa ett nytt dokument, ```attribut.html``` med korrekt HTML-grundstruktur.

Skriv följande kod i dokumentet. [Ankar-elementet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) `<a>` används för att visa länkar i ditt dokument. Använd attributet `href` för att ange länkens adress. Det text som användaren ser är innehållet i `<a>` taggen.

```html
<p>
    Delar av den här guiden är översättningar från,
    <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
        >kom igång med HTML på MDN</a
    >. Läs gärna mer där.
</p>
<p>Det går även att länka till dina andra webbsidor, var noga med sökvägen.</p>
```

Redigera dina tidigare dokument, ```index.html```, ```element.html``` och ```attribut.html```. Se till att dokumenten ligger i samma mapp. 

Skapa en navigationslista överst i `<body>` taggen på varje sida.

```html
<ul>
    <li><a href="index.html" title="Tillbaka till startsidan">Hem</a></li>
    <li><a href="element.html">element</a></li>
    <li><a href="attribut.html">aatribut</a></li>
</ul>
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
