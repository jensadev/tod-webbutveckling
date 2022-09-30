---
title: Datatyper
eleventyNavigation:
    key: datatyper
    parent: javascript
    order: 2
    excerpt: Variabler har en tillhörande datatyp baserat på variabelns värde.
---

{% intro %}

## Introduktion

Alla programmeringsspråk har ett antal olika datatyper. Datatyper kan tillsammans utgöra datastrukturer.

Javascript är ett språk som är dynamiskt typat. Dynamiskt typat betyder att en variabel inte är kopplad till en viss datatyp.
Du behöver därför inte ange en variabels datatyp när du deklarerar den.

### Tänk på

-   Datatypen bestäms utifrån variabelns värde.
-   En variabels datatyp kan ändras, beroende på det tilldelade värdet.
-   Du kan kontrollera datatypen med `typeof myvar` i konsollen.
-   Att resultatet kanske inte blir vad du förväntar dig med blandade datatyper.

{% endintro %}

{% instruktioner %}

## Instruktioner

Koda först i konsollen och testa.

```js
let name = 'Farmor'; // typeof name
let num = 12; // typeof num
num = prompt('Hur många burkar dunderhonung?');
let num1 = 12,
    num2 = 12;
let sum = num1 + num2; // typeof sum
console.log(`Summan blir ${sum}`);
sum = num + num1;
console.log('Den nya summan blir: ' + sum); // 🤔
sum = parseInt(num) + num1; // 🙂
```

Skapa ett nytt html-dokument, koda i ett `<script>` element.

```js
let bamse = {
    name: 'Bamse',
    animal: 'Brunbjörn',
    description: 'Världens starkaste björn',
    quote: 'Det är modigt att våga säga att man är rädd.'
};
console.log(bamse.quote);
bamse.quote = 'Man ska vara snäll mot dem som är stygga, för de behöver det mest, och då blir de kanske snällare.';
console.log(bamse.quote);
let skalman = {...}; // fyll på
let friends = []; // tom array
friends.push(bamse); // lägg till vännerna med push() metoden
console.log(bamse[0]);
```

| Datatyp | Förklaring                                                                                                                                                                                                                             | Exempel                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| String  | En sekvens av tecken bildar en sträng. En sträng är lätt att känna igen då värdet alltid är omgivet av enkelfnuttar `''` eller dubbelfnuttar `""`.                                                                                     | `let name = 'Bamse'; `                                                 |
| Number  | Ett nummer. Kan även vara i decimalform.                                                                                                                                                                                               | `let birth = 1966;`                                                    |
| Boolean | Har värdet true eller false.                                                                                                                                                                                                           | `let nice = true;`                                                     |
| Array   | En datastruktur som låter dig spara flera värden i samma variabel. Känns igen på hakparenteser(squarebrackets). Värden hämtas genom att ange värdets index-plats.                                                                      | `let friends = ['Skalman', 'Lille Skutt']; friends[1];`                |
| Object  | Väldigt mycket i javascript kan vara objekt och sparas i en variabel. Objekt känns igen på måsvingar(curlybrackets). I ett objekt så kan det finnas allt från data till html-element. Ett objekts egenskaper hämtas med punktnotation. | `let moral = { message: 'Ingen blir snäll av stryk' }; moral.message;` |

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

[Figurer](https://sv.wikipedia.org/wiki/Lista_%C3%B6ver_figurer_i_Bamse#Bamse)

-   Skapa flera objekt för karaktärer.
-   Skapa två arrayer, en för vänner och en för skurkar.
-   Låt användaren mata in ett nummer och skriv ut den karaktären.
-   Med `console.log()`, skriv ut hur många karaktärer du har sparat i varje array.

För att räkna antalet element i en array kan du använda `array.length`.

{% endextra %}

{% enduppgifter %}
