---
title: Iteration
eleventyNavigation:
    key: iteration
    parent: javascript
    order: 5
    excerpt: Med iteration menas att upprepa, loopa. Kod som gör något flera gånger.
---

{% instructions %}

## Introduktion

Ett program behöver förutom att kunna göra val även kunna upprepa kod. Det är klart att ett program kan skrivas med väldigt mycket upprepning, men i sågott som alla fall är det enklare att skriva en loop som upprepar koden så länge ett eller flera villkor är sanna.

Javascript har tillgång till ett stort antal sätt att iterera kod. `for` är ett exempel.

```js
for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
```

### Tänk på

-   Att det finns fler sätt att iterera än for-loopen.

## Instruktioner

Fortsätt arbeta med uppgiften från föregående del, [selektion](selektion.html).
Skapa en loop som låter spelaren gissa tills det rätta svaret är givet.

```js
while (number !== guess) {
    let guess = prompt('Kan du gissa på det hemliga numret?');
    // tidigare kod
}
```

En stor del av iteration sker över mer komplexa datatyper, som arrayer. Det går att använda ett fleratal funktioner för att iterera över dessa, men även en variant av for-loopen.

`foreach` itererar över varje index i en array och skapar en temporär variabel med det nuvarande värdet.

```js
const friends = ['Skalman', 'Lille Skutt', 'Bamse', 'Vargen'];
friends.forEach((friend) => {
    console.log(friend);
});
```

{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad menas med iteration, vad är det som sker?

#### Uppgift 2

Ge exempel på olika typer av loopar i javascript.


{% endbase %}

{% advanced %}

#### Uppgift 3

Förklara hur foreach fungerar.

{% endadvanced %}

{% endquestions %}

{% extra "Tips" %}

Det har blivit allt vanligare att i javascript använda olika metoder för att iterera över arrayer. Ett exempel på det är
`map()` som tar en funktion som argument och returnerar en ny array.

```js
const arr = friends.map((friend) => {
    return friend.toUpperCase();
});
console.log(arr);
```

Andra exempel är `filter()` och `reduce()`.

{% endextra %}
