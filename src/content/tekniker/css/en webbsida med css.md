---
title: En webbsida med CSS
eleventyNavigation:
    key: en webbsida med css
    parent: css
    order: 4
    excerpt: I den första delen så skapade du en webbsida med HTML. Nu ska du lägga till CSS för att styla sidan.
---

{% instructions %}

## Introduktion

I slutet av det första området om HTML så skapade du en grundläggande webbsida. Nu ska du lägga till CSS för att styla sidan.

## Instruktioner

Öppna filen `index.html` från HTML-området, du kan om du vill göra en kopia av den för detta moment.

Sidan ska innehålla en grundläggande HTML-struktur, navigation och innehåll. Du behöver även ladda in dina stilar från en separat CSS-fil, `style.css`.

### Sidhuvud

Du ska skapa ett sidhuvud för sidan med den semantiska taggen `header`. Sidhuvudet ska innehålla en rubrik med texten "Min webbsida" och en navigationsmeny.

```html
<header>
    <h1>Min webbsida</h1>
    <nav>
        <ul>
            <li><a href="#">Hem</a></li>
            ...
        </ul>
    </nav>
</header>
```

För att styla header och navigationen så ska du använda CSS-reglerna `display`, `flex` och `justify-content`. För att separera innehållet i sidhuvudet så ska du använda `justify-content: space-between;`.

```css
header {
    display: flex;
    justify-content: space-between;
}
```

Använd sedan `display: flex;` för att styla navigationsmenyn. Display flex placerar elementen på en horizontell rad. Sätt en `class` på `ul` elementet för att enklare välja det.

För att ta bort listpunkterna så ska du använda `list-style: none;`.

```css
.nav {
    display: flex;
    list-style: none;
}
```

{% hint %}
Det är alltid viktigt med luft i en design. Använd dig av `padding` och `margin` för att skapa detta. Du vill aldrig att text ska ligga helt upp mot en kant.
{% endhint %}

Sätt padding på `header` elementet för att skapa luft mellan sidans kant och innehållet.

```css
header {
    padding: 1rem;
}
```

### Centrera innehållet

För att centrera innehållet på webbsidan så används ofta en klass som kallas `.container`. En klass är en CSS-regel som kan användas på flera element. En klass skrivs med en punkt före namnet. Innehållet centreras med egenskapen `margin-inline` och `max-width`. `margin-inline` sätter marginalen på båda sidor av elementet och `max-width` sätter bredden på elementet.

```css
.container {
    margin-inline: auto;
    max-width: 80ch;
}
```


För att använda klassen så skrivs den i HTML-koden.

```html
<main class="container">
    ...
</main>
```

### Färg och typsnitt

Prova sedan att ändra färg på bakgrund, text och länkar. Om du önskar så kan du prova att ändra typsnittet också.

### Validering

Precis som för din HTML-kod så kan du validera din CSS. För att validera din CSS så kan du använda dig av [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

{% endinstructions %}
