---
title: Selektion
eleventyNavigation:
    key: selektion
    parent: javascript
    order: 4
    excerpt: Att välja, det är vad selektion betyder i programmeringen.
---

{% instructions %}

## Introduktion

Ett program behöver kunna göra val. Selektion är kodstruktur som testar om uttryck är sant eller falskt. Ett vanligt sätt att utföra det är `if` satsen.

```javascript
if (uttryck) {
    // om sant
} else {
    // annars falskt
}
```

Javascript stöder även switch-satser.

### Tänk på

-   Du måste inte använda dig av `else`.
-   För att skriva flera uttryck använder du `else if (...)`.
-   Om det första uttrycket är sant, körs inte något av de andra.

## Instruktioner

Öppna utvecklarverktygen i din webbläsare och koda där.

```javascript
let a = 12;
let b = 24;
if (a === b) {
    console.log('Tror du att den här koden kommer köras?');
} else {
    console.log('Eller den här?');
}

let name = 'Mitt namn';
if (name) {
    console.log(`Hej på dig ${name}`);
}
```

Testa olika villkor, `b == a`, `b > a`, `b < a`, `b >= a`, `b <= a`, `b != a`.

Skapa ett HTML-dokument, `selektion.html`. Koda i ett `<script>` element.

```javascript
let number = 7;
let guess = prompt('Kan du gissa på det hemliga numret?');

if (number == guess) {
    alert('Otroligt, du gissade rätt!');
} else {
    // Du gissade fel
}
```



{% endinstructions %}

{% questions %}

{% base %}

#### Uppgift 1

Vad menas med selektion?

#### Uppgift 2

Ge tre exempel på när selektion kan vara användbart.

{% endbase %}

{% advanced %}

#### Uppgift 3

Förklara skillnaden på `>` och `>=`.

{% endadvanced %}

{% endquestions %}

{% extra "Övning" %}

I det sista exemplet finns en grund för ett gissa-tal spel. Kan du skriva färdigt logiken?

Du kan använda `else if (guess > number)` för att skriva ut om gissningen var för stor. Kan du skriva `else if (...)` som skriver ut om gissningen var för liten?

{% endextra %}
