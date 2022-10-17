---
title: Attribut
eleventyNavigation:
    key: attribut
    parent: html
    order: 2
    excerpt: Element kan ha attribut, de ger extra information om elementet.
---

{% intro %}

Element kan ha attribut(egenskaper). Ett attribut är en egenskap som låter oss skriva extra information om ett element.

Ett attribut skrivs med ett namn, följt av ett likhetstecken. Efter det följer attributets värde skrivet mellan enkel- `'...'` eller dubbel-fnuttar `"..."`.

### Tänk på

-   Att alltid sätta fnuttar runt ett attributs värde.
-   Att avsluta fnuttarna, annars kommer följdfel.
-   Attribut skrivs enbart i öppningstaggen.
-   Du kan använda enkel- eller dubbel-fnuttar, men var konsekvent i ditt dokument.

{% endintro %}

{% instruktioner %}

Skapa ett nytt dokument, ```attribut.html``` med korrekt grundstruktur.

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

Redigera dina tidigare dokument, ```index.html```, ```element.html``` och ```attribut.html```.

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

Skapa ```attribut.html``` och skriv av koden.
#### Uppgift 2

Redigera dina HTML-sidor och inkludera navigationen i samtliga.

{% endbas %}

{% extra %}

#### Uppgift 3

Använd `<img>` elementet i index.html.
`<img src="fil.typ">` använder `src` attributet för att peka till en
bild. Likt `href` attributet så är det viktigt att sökvägen är korrekt
om det är en lokal fil.

Kopiera in en bildfil i samma mapp som index.html. Använd `img` för att visa bilden på index.html.

Det går även att länka till bilder med en url.

{% endextra %}

{% enduppgifter %}
