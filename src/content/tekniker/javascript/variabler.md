---
title: Variabler
eleventyNavigation:
    key: variabler
    parent: javascript
    order: 1
    excerpt: För att spara värden i ett programmeringsspråk används variabler.
---

{% intro %}

En variabel är en behållare för att spara ett värde. En variabel deklareras med ett namn och tilldelas sedan ett värde.
För att deklarera en variabel i javascript använder du `let` följt av namnet. För att tilldela ett värde till en variabel använder du `=` följt av värdet.

```js
let myVar = 5;
```

I mycket javascript kommer du se variabler deklareras med `var` och `const`. Förenklat sagt så kan byta ut dessa mot `let`.

### Tänk på

-   Ett semikolon indikerar vars raden, eller uttrycket slutar (men det är valfritt).
-   En variabel kan namnges till nästan vadsomhelst, men det finns vissa [regler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables).
-   En variabels namn är skifteskänsligt (case sensitive) det vill säga att stora och små bokstäver spelar roll.
-   I konsollen kan du se en variabels värde genom att skriva dess namn.
-   I ett dokument så använder du `console.log(variabelnamn)` för att skriva ut värdet till konsollen.

{% endintro %}

{% instruktioner %}

Öppna utvecklarverktygen i din webbläsare(F12) och välj console. Skriv in följande kod.

```js
let firstName;
firstName = 'förnamn';
let lastName = 'efternamn';
let name = firstName + lastName; // förnamnefternamn
name = firstName + ' ' + lastName; // förnamn efternamn
let age = 00;
let greeting = `Hej ${name}, du är ${age} år gammal`;
```

Testa att skriva in olika namn och födelseår. Vad händer om du skriver `let firstName = 'förnamn';` två gånger?

Att sätta ihop text (sträng) variabler med + tecknet kallas för konkatenering. Det går även att använda backticks \` för att skapa en sträng och sedan använda `${variabel} `för att sätta ihop strängen.

Skapa ett nytt html-dokument ```js.html```, koda i ett `<script>` element.

```js
console.log('Välkommen!');
let name = prompt('Vad heter du?');
console.log(`Hej ${name}`);
let birthYear = prompt(`Kan du skriva vilket år du föddes ${name}?`);
alert('Oj ' + name + ', ' + birthYear + ' var länge sedan!');
```

Prova olika sätt att skriva ut text i din webbläsare.

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Förklara hur du deklarerar en variabel i javascript.

#### Uppgift 2

Ge exempel på hur javascript kan skriva ut meddelanden till användaren.

{% endbas %}

{% extra %}

#### Uppgift 3

Vad menas med konkatenering?

{% endextra %}

{% enduppgifter %}

{% facit "Övning" %}

Redigera filen ```js.html```.
Skapa inmatning för följande frågor och skriv ut användarens svar (använd dig av `prompt` och `alert`).

-   Hur skriver du för att deklarera en variabel i javascript?
-   Vilken metod kan du använda för att skriva ut en variabel?

Skriv ut svaret på fråga ett och två som **ett** meddelande till användaren.

{% endfacit %}