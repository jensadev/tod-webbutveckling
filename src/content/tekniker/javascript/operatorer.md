---
title: Operatorer
eleventyNavigation:
    key: operatorer
    parent: javascript
    order: 3
    excerpt: För att kunna skriva uttryck behövs operatorer.
---

{% instructions %}

## Introduktion

En operator är en matematisk symbol som producerar ett resultat. Genom att kombinera variabler, värden och operatorer kan vi skapa uttryck.

### Tänk på

-   Additions operatorn `+` kan användas både för att räkna addition men också för att kombinera strängar.
-   Att likamedstecknet `=` används för att tilldela värden i programmeringen.
-   Ett uttryck som resulterar i ett numeriskt värde kallas för ett aritmetiskt uttryck.
-   Du kan inte räkna med strängar. Använd `parseInt()`.

## Instruktioner

Öppna utvecklarverktygen i din webbläsare(F12) och välj console.

```javascript
12 + 12; // 24
12 - 2;
12 / 1.2;
12 * 12;
let a = 12;
let b = 12;
let c = '12';
a === b;
a === c;
b = 2;
let sum = a + b * b - a;
let firstName = 'förnamn';
let lastName = 'efternamn';
let name = firstName + lastName; // fixa 🤨
firstName === lastName;
```

Skapa ett HTML-dokument, `operatorer.html`. Koda i `<script>` elementet.

```javascript
console.log('Addition');
let num1 = parseInt(prompt('Skriv ett tal: '));  // parseInt()
let num2 = ... // Du kan!
let sum = num1 + num2;
console.log(`Summan av ${num1} + ${num2} är ${sum}`);
let message = 'Summan av ' + num1 + ' + ' + num2 + ' är ' + sum;
console.log(message);
```

Skapa en resultatsträng där du kombinerar siffror och strängar.
Skriv ut resultatsträngen med både `console.log()` och `alert()`. Du kan använda `prompt()` för att mata in värden.


| Operator                              | Symbol  | Förklaring                                                 |
| ------------------------------------- | ------- | ---------------------------------------------------------- |
| Addition                              | `+`     | Addera två tal eller kombinera strängar.                   |
| Subtraktion, multiplikation, division | `- * /` | Som i matematiken.                                         |
| Tilldelning                           | `=`     | Används för att tilldela ett värde.                        |
| Likamed                               | `===`   | Undersök om två värden är densamma.                        |
| Inte, inte likadmed                   | `! !==` | För att undersöka om något inte är, eller inte är likamed. |

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad menas med en operator?

#### Uppgift 2

Förklara skillnaderna mellan `=` och `==`.

#### Uppgift 3

Ge tre exmpel på uttryck som resulterar i ett numeriskt värde.

{% endbase %}

{% advanced %}

#### Uppgift 3

Förklara skillnaden mellan `==` och `===`.

{% endadvanced %}

{% endquestions %}
