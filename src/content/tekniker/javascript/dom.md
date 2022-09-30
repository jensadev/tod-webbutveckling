---
title: DOM
eleventyNavigation:
    key: dom
    parent: javascript
    order: 6
    excerpt: Document object model.
---

{% intro %}

## Introduktion

Document Object Model (DOM) är ett objekt som representerar en webbsida.

Det är det interface som du arbetar mot när du skriver javascript för att ändra struktur, stil och innehåll på en webbsida.

### Tänk på

-   Alla tillåter inte javascript, fungerar din sida ändå?

{% endintro %}

{% instruktioner %}

## Instruktioner

Att introducera, förklara och lära sig DOM och hur javascript arbetar med det är lite för ambitiöst för en sida.
Detta är en liten titt, läs gärna mer på [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

DOM låter oss välja element direkt från en sida. Element väljs med CSS-seleketorer (element, class, id).

Öppna konsollen (CTRL+SHIFT+i) och koda direkt här brevid.

```js
let header = document.querySelector('.part__header-title');
header.childNodes; // listar alla childnodes för header
header.childNodes[0]; // första childnode
header.childNodes[0].textContent = 'Jag lär mig om DOM';
```

Det går även att manipulera klasser och attribut för element.

```js
let instruktioner = document.querySelector('#instruktioner');
instruktioner.classList; // skriv ut elementets klasser
instruktioner.classList.add('lead'); // lägg till klass
instruktioner.classList.remove('lead'); // ta bort klass
instruktioner.classList.add('bg-theme', 'fg-theme'); // lägg till flera klasser
```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter

### {% star %}

#### Uppgift 1

Koda i konsollen.

#### Uppgift 2

Koda i ett dokument.

### {% star %}{% star %}

{% extra %}

#### Uppgift 3

Läs och arbeta med materialet på [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

{% endextra %}

{% enduppgifter %}
