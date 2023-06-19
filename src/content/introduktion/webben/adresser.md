---
title: Adresser
eleventyNavigation:
    key: adresser
    parent: webben
    order: 1
    excerpt: För att hitta rätt på webben används adresser, eller URL.
---

{% instructions %}

## Introduktion

För att navigera på webben så använder vi adresser, [URL](https://url.spec.whatwg.org/) (eng. Uniform Resource locator). Det är en för oss människor läsbar sträng som identifierar en resurs. Resursen är allt som oftast en webbplats. Den webbplatsen finns på en server och för att nå den behöver du en klient.

### Tänk på

-   Som mycket annat på webben är URL en levande standard.
-   Hur skriver du en URL och var?
-   Ibland kallas det för URI, Uniform Resource Identifier, det är en URLs syntax.


## Instruktioner

En URL består av flera delar. Läs det du behöver från Wikipedia artikeln om [URL](https://sv.wikipedia.org/wiki/URL) för att förstå en URLs uppbyggnad.

Ditt mål är att förstå och känna igen de olika delarna:

-   Protokoll:
    -   http, Hypertext Transfer Protocol 🔓
    -   https, Hypertext Transfer Protocol Secure 🔒
-   Vilken del är en domän i en URL?
-   Vilken resurs du hämtar från domänen
-   Fragment, eller ankare som skrivs med #
-   Query parametrar, som skrivs efter adressen med `?parameter=värde`

Studera sedan den här webbplatsens URL i adressfältet på din webbläsare, vilka delar kan du identifiera?

Hur används ankare på den här webbplatsen? Prova att sätta muspekaren över de olika rubrikerna. Vad händer när du klickar på en sådan länk?

Besök youtube, klicka på ett klipp och studera den URL som visas i adressfältet på din webbläsare. Om du vill så testa sedan att använda en query-parameter på den här webbsidan, vad sker då?

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad är ett protokoll? Förklara skillnaden mellan http och https?

#### Uppgift 2

Vad menas med en domän och en resurs?

#### Uppgift 3

Hur används ett fragment och varför används det?

#### Uppgift 4

Vad är query parameterar och vad kan de används till?

{% endbase %}

{% advanced %}

#### Uppgift 5

Hur går det till att registrera en domän?

{% endadvanced %}

{% endquestions %}

{% extra  %}

Domäner behöver registreras för att de ska fungera. Förenklat så går det till så att du betalar en domänregister för att få en domän. Domänen registreras sedan i en databas som alla datorer som är anslutna till internet kan söka i. När en dator söker efter en domän så får den tillbaka en IP-adress som den kan använda för att kommunicera med den domänen.

Du kan prova att söka efter en domän att registrera på [Internetstiftelsen](https://internetstiftelsen.se/domaner/). För andra domäner så kan du använda [Name.com](https://name.com).


{% endextra %}


<script>
    window.addEventListener('DOMContentLoaded', () => {
        const url = new URL(window.location.href);
        if (url.search) {
            alert(`Du skrev följande query: ${url.search}`);
        }
    });
</script>