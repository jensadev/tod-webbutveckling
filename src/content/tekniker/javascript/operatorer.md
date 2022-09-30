---
title: Operatorer
eleventyNavigation:
    key: operatorer
    parent: javascript
    order: 3
    excerpt: För att kunna skriva uttryck behövs operatorer.
---

{% intro %}

## Introduktion

En operator är en matematisk symbol som producerar ett resultat. Genom att kombinera variabler, värden och
operatorer kan vi skapa uttryck.

### Tänk på

-   Additions operatorn kan användas både för att räkna addition men också för att kombinera strängar.
-   Att likameds tecknet används för att tilldela värden i programmeringen.
-   Ett uttryck som resulterar i ett numeriskt värde kallas för ett aritmetiskt uttryck.
-   Du kan inte räkna med strängar. Använd `parseInt()`.

{% endintro %}

{% instruktioner %}

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

Skapa ett nytt HTML dokument, koda i ett `<script>` element.

```javascript
console.log('Addition');
let num1 = parseInt(prompt('Skriv ett tal: '));  // parseInt()
let num2 = ... // Du kan!
let sum = num1 + num2;
console.log(`Summan av ${num1} + ${num2} är ${sum}`);
let message = 'Summan av ' + num1 + ' + ' + num2 + ' är ' + sum;
console.log(message);
```

| Operator                              | Symbol  | Förklaring                                                 |
| ------------------------------------- | ------- | ---------------------------------------------------------- |
| Addition                              | `+`     | Addera två tal eller kombinera strängar.                   |
| Subtraktion, multiplikation, division | `- * /` | Som i matematiken.                                         |
| Tilldelning                           | `=`     | Används för att tilldela ett värde.                        |
| Likamed                               | `===`   | Undersök om två värden är densamma.                        |
| Inte, inte likadmed                   | `! !==` | För att undersöka om något inte är, eller inte är likamed. |

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### {% star %}

#### Uppgift 1

Koda i konsollen.

#### Uppgift 2

Skapa ett nytt dokument.

### {% star %}{% star %}

{% extra %}

#### Uppgift 3

Skapa ett nytt dokument. Koda uträkningar för alla räknesätten.
Låt användaren mata in värden med `prompt()`.

#### Uppgift 4

Skapa en resultatsträng där du kombinerar siffror och strängar.
Skriv ut resultatsträngen med både `console.log()` och `alert()`.

{% endextra %}

{% enduppgifter %}
