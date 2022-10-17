---
title: Slutuppgift javascript
eleventyNavigation:
    key: slutuppgift javascript
    parent: javascript
    order: 120
    excerpt: För att testa dina kunskaper på området kan du göra denna slutuppgift.
    test: true
---

För att avsluta området så ska du kombinera det du hittills arbetat med i en slutuppgift.


Skapa ett html-dokument, `index.html`. Dokumentet ska innehålla en HTML grundstruktur.

I dokumentet ska du skapa följande element: `ul`, `input` och `button`. Ge dessa element ett `#id` och en `.class`.

Ladda sedan in din din tidigare lösning där användaren fick gissa ett tal. Du ska nu använda dig av javascript för att välja DOM elementen och använda dessa till spelet istället för prompt och alert.

### Stilar

Använd sedan allt du lärt dig i Temat Tekniken. Formatera och stila ditt spel.

## Tips

Du väljer element från DOM. För input så kan du komma åt värdet med `inputelement.value`. Du kommer att behöva lyssna på när användaren klickar på knappen och då läsa av inputelementets värde.

```js
button.addEventlistener('click', (e) => {
    const inputValue = inputElement.value;
    console.log(inputValue);
});
```

För att skriva ut meddelanden till användaren så ska nya li element skapas och läggas till i ul elementet.

```js
const li = document.createElement('li');
li.textContent = 'msg';
ul.appendChild(li);
```
