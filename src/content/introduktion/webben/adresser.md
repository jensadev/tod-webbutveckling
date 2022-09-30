---
title: Adresser
eleventyNavigation:
    key: adresser
    parent: webben
    order: 1
    excerpt: För att hitta rätt på webben används adresser, eller URL.
---

{% intro %}

## Introduktion

För att navigera på webben så använder vi adresser, [URL](https://url.spec.whatwg.org/) (eng. Uniform Resource locator).
Det är en för oss människor läsbar sträng som identifierar en resurs. Resursen är allt
som oftast en webbplats. Den webbplatsen finns på en server och för att nå den behöver du en klient.

### Tänk på

-   Som mycket annat på webben är URL en levande standard.
-   Hur skriver du en URL och var?
-   Ibland kallas det för URI, Uniform Resource Identifier, det är en URLs syntax.

{% endintro %}

{% instruktioner %}

## Instruktioner

En URL består av flera delar.
Använd dig av följande [Wikipedia-artikel](https://sv.wikipedia.org/wiki/URL) för att förstå en URLs uppbyggnad.

Ditt mål är att förstå de olika delarna:

-   Protokoll på webben
    -   http, Hypertext Transfer Protocol 🔓
    -   https, Hypertext Transfer Protocol Secure 🔒
-   Hur en domän ser ut
-   Vilken resurs du hämtar
-   Fragment, eller ankare som skrivs med #
-   Query parametrar, skrivs efter adressen med `?parameter=värde`

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### ⭐

#### Uppgift 1

Studera den här webbplatsens URL i adressfältet på din webbläsare, vilka delar kan du
identifiera.

#### Uppgift 2

Hur används ankare på den här webbplatsen? Prova att sätta muspekaren över de olika rubrikerna.

Vad händer när du klickar på en sådan länk?

### ⭐⭐

{% extra %}

#### Uppgift 3

Besök youtube, klicka på ett klipp och studera dess URL.

Vad händer om du använder en queryparameter på den här webbsidan?

{% endextra %}

{% enduppgifter %}

<script>
    window.addEventListener('DOMContentLoaded', () => {
        const url = new URL(window.location.href);
        alert(`Du skrev följande query: ${url.search}`);
    });
</script>