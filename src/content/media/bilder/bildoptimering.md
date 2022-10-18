---
title: Bildoptimering
eleventyNavigation:
    key: bildoptimering
    parent: bilder
    order: 4
    excerpt: ...
---

{% intro %}

Optimering av bilder är viktigt.

### Tänk på

- Dina användares surfpotter, batteri och prestanda. Du har ett ansvar som utvecklare.

{% endintro %}

{% instruktioner %}

För att arbeta med bilder och optimera dem så kan du använda programvara som MS Paint eller Photoshop. Men oftast är det enklare att förlita sig på den uppsjö av webbverktyg som finns tillgängliga. Verktygen hjälper dig att komprimera, ändra storlek och konvertera bilder mellan olika format.

En [sökning på Google](https://www.google.com/search?q=image+optimizer) ger dig ett stort antal verktyg att testa.

{% hint "danger" %}
Var noga med att kontrollera verktygens användaravtal så att du inte bryter mot några regler, men också så att du är medveten om vad som händer med din bild.
{% endhint %}

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Använd dig av bilden du tidigare fotograferat. Sök reda på en eller flera tjänster för bildoptimering och optimera bilden.

#### Uppgift 2

Spara bilden i några olika format. Vilka format är lämpliga för olika bilder och användningsområden?

{% endbas %}

{% extra %}

#### Uppgift 3

Skapa ett HTML-dokument ```optimering.html```.
Använd dig av bilden du tidigare fotograferat. Optimera bilden i ett antal olika format, kvalitetsinställningar och storlekar. Lägg sedan in bilderna i HTML-dokumentet med hjälp av ```<img>```-elementet.

{% endextra %}

{% enduppgifter %}

{% facit "Tips" %}

Ett rutnät av bilder är ett utmärkt tillfälle att öva på CSS olika display-modeller. Du kan testa att använda `display: flex` i en container som innehåller alla bilder, prova olika inställningar för `flex-wrap` och hur innehållet ska visas.

Du kan även prova att använda dig av `display: grid`. Följande kod ger dig ett rutnät som upprepas med 3 lika stora kolumner.

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
```

{% endfacit %}


