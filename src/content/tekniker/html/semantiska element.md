---
title: Semantiska element
eleventyNavigation:
    key: semantiska element
    parent: html
    order: 3
    excerpt: Semantiska element ger mer information om innehållet.
---

{% intro %}

Semantik betyder mening. Med semantiska element i HTML så får webbläsaren mer information om innehållet. Det gör att webbläsaren kan tolka innehållet på rätt sätt.

### Tänk på

-   Att använda rätt tagg för innehållet.
-   När du använder semantiska element så ökar du användbarheten på din webbplats.
-   Din kod blir lättare att läsa och förstå.

{% endintro %}

{% instruktioner %}

Följ den här länken och läs om [semantiska element](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML).

I den föregående delen om [element](/tekniker/html/element) så skrev du följande kod i ditt dokument. Om du nu studerar det så ser du att texten för elementen förklarar deras semantiska mening.

```html
<h1>Detta är en rubrik, med rubriknivå 1</h1>
<p>Detta är en paragraf med text.</p>
<p>Alla dessa element har en efterföljande radbrytning.</p>
<h2>Detta är en rubrik med nivå 2</h2>
```

Html kan skrivas helt utan semantisk mening, men då blir det svårare att läsa och förstå vad som är vad. Jämför följande kod med den ovan.

```html
<span>Detta är en rubrik, med rubriknivå 1</span>
<span>Detta är en paragraf med text.</span>
<span>Alla dessa element har en efterföljande radbrytning.</span>
<span>Detta är en rubrik med nivå 2</span>
```

Skapa ett nytt dokument, `semantik.html`.

Använda semantiska element för att skapa två listor, [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) och [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).

Listorna ska innehålla fem punkter med semantiska element. För varje punkt i listan används elementet [li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).

Första listan ska vara oordnad och andra listan ska vara ordnad. I båda fallen ska listan ha 5 punkter.

-   `h1` med texten "Listelement"
-   `h2` med texten "Oordnad lista"
-   `ul` med 5 punkter
-   `h2` med texten "Ordnad lista"
-   `ol` med 5 punkter

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Vad betyder semantik?

#### Uppgift 2

Ge tre exempel på semantiska element och deras betydelse.

{% endbas %}

{% extra %}

#### Uppgift 3

Förklara skillnaden mellan `ol` och `ul` element?

{% endextra %}

{% enduppgifter %}
