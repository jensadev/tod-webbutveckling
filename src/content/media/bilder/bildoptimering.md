---
title: Bildoptimering
eleventyNavigation:
    key: bildoptimering
    parent: bilder
    order: 4
    excerpt: ...
---

{% instructions %}

## Introduktion

Optimering av bilder är viktigt. Det är ditt ansvar som utvecklare att se till att dina användare inte behöver ladda ner stora bilder som de inte behöver.

### Tänk på

- Anpassa dina bilders storlek och kvalitet till användningsområdet.
- Redigera bilderna så att de är så stora som de visas på webbplatsen. Undvika att sätta storleken med CSS.
- Dina användares surfpotter, batteri och prestanda. Du har ett ansvar som utvecklare.

## Instruktioner

För att arbeta med bilder och optimera dem så kan du använda programvara som MS Paint eller Photoshop. Men oftast är det enklare att förlita sig på den uppsjö av webbverktyg som finns tillgängliga. Verktygen hjälper dig att komprimera, ändra storlek och konvertera bilder mellan olika format.

En [sökning på Google](https://www.google.com/search?q=image+optimizer) ger dig ett stort antal verktyg att testa.

{% hint "danger" %}
Var noga med att kontrollera verktygens användaravtal så att du inte bryter mot några regler, men också så att du är medveten om vad som händer med din bild.
{% endhint %}

Använd dig av en bild du har eller tar. Sök reda på en eller flera tjänster för bildoptimering och bearbeta bilden.

Testa att spara bilden i några olika format.

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad innebär det att optimera en bild?

#### Uppgift 2

Ge exempel på bildformat och vad de passar för.

{% endbase %}

{% endquestions %}

{% extra "Övning" %}

Skapa ett HTML-dokument ```optimering.html```.
Använd dig av din bild. Optimera bilden i ett antal olika format, kvalitetsinställningar och storlekar. Lägg sedan in bilderna i HTML-dokumentet med hjälp av ```<img>```-elementet.

Ett rutnät av bilder är ett utmärkt tillfälle att öva på CSS olika display-modeller.  Med `display: grid` kan du skapa detta. Följande kod ger dig ett rutnät som upprepas med 3 lika stora kolumner.

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
```

{% endextra %}


