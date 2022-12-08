---
title: DOM
eleventyNavigation:
    key: dom
    parent: javascript
    order: 6
    excerpt: Document object model.
---

{% intro %}

Document Object Model (DOM) är ett objekt som representerar en webbsida. DOM Är en trädstruktur av noder som representerar en webbsida.

DOM är det interface som du arbetar mot när du skriver javascript för att ändra struktur, stil och innehåll på en webbsida. En stor del av javascript-kodande handlar om att manipulera DOM.

### Tänk på

- HTML är en textstruktur, DOM är ett objekt som representerar den.
- När du väljer element med javascript, använder du CSS-selektorer.

{% endintro %}

{% instruktioner %}

Att introducera, förklara och lära sig DOM och hur javascript arbetar med det är lite för ambitiöst för en sida. Så detta är bara en introduktion. Läs gärna mer på [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

DOM låter oss välja element direkt från en sida. Element väljs med [CSS-seleketorer](/tekniker/css/selektorer/) (element, class, id).

Öppna konsollen (CTRL+SHIFT+i) i webbläsaren och koda på den här sidan.

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

{% bas %}

#### Uppgift 1

Vad menas med DOM?

#### Uppgift 2

Ge exempel på hur du kan välja element med javascript.

{% endbas %}

{% extra %}

#### Uppgift 3

Är alla noder i DOM HTML-element?

{% endextra %}

{% enduppgifter %}

{% facit "Utmaning" %}

Kan du välja ett checkbox-elementet på den här sidan med javascript och markera den som kryssad?

{% endfacit %}