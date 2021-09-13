---
title: Selektorer
eleventyNavigation:
    key: selektorer
    parent: css
    order: 2
    excerpt: Selektorer används för att skriva regler och välja element
---
{% intro %}

## Introduktion

En CSS selektor bestämmer vilket eller vilka element som en CSS-regel påverkar. Det finns ett antal olika typer av selektorer.

- typ (eng. type) selektor, väljer ett element ```p```
- klass (eng. class) selektor, väljer ett element med en specifik klass ```.class```
- id selektor, väljer ett element med en specifik id ```#id```

Selektorer används även av javascript för att välja element.

### Tänk på

- Använd främst klass selektorer 
- Selektorer kan kombineras
- ID selektorer är unika, det vill säga två element kan inte ha samma id

{% endintro %}

{% instruktioner %}

## Instruktioner

Skapa två dokument, ```selektorer.html``` och en tillhörande css fil.
HTML filen behöver innehålla den grundläggande HTML strukturen.
Lägg sedan till följande.

```html
<main>
    <h1 id="#start">Lorem ipsum</h1>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Suspendisse sollicitudin id lacus at tristique. Aenean sem neque, mollis eu cursus et, vulputate ut mauris. Quisque eu placerat justo. Etiam risus lectus, porttitor vitae aliquam in, laoreet eget sem. Morbi mollis efficitur rhoncus. Fusce dapibus orci vitae est ullamcorper viverra. Aenean a neque elit.</p>
    <p>Vestibulum tristique luctus tellus non porttitor. Morbi a nibh non odio tincidunt mattis eu laoreet lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    <h2>Vivamus sed</h2>
    <p>Vivamus sed ante molestie dolor vehicula tempor at ut diam. Aenean in aliquam neque. Ut venenatis facilisis tempor. Curabitur semper ipsum sit amet nibh vulputate vulputate.</p>
    <blockquote cite="https://www.lipsum.com/">Aenean id tristique justo.</blockquote>
    <p>Etiam efficitur orci ac arcu varius fringilla. Nam laoreet eget nunc ut interdum. Quisque rutrum tempus consectetur. Duis pharetra sollicitudin rhoncus.</p>
    <a class="backto" href="#start">Back to top</a>
</main>
```

Skapa CSS för dokumentet.
En bra start är att se till att dokumentet är läsbart för alla.
Detta kan göras med bland annat att centrera innehållet, inte göra det "för brett", håll nere radlängden. 

```css
body {
    display: flex;
    justify-content: center;

    color: #121212;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;    
}
main {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 40rem;
}
p {
    max-width: 60ch;
}
```

Ett nästa steg efter detta är att arbeta med text, storlek, typsnitt och färg. Skapa en eller flera regler för text.
En ingress (eng. lead) är en inledning till en artikel, den kan oftast identifieras visuellt.

```css
.lead {
    font-size: 1.4rem;
}
```


{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Skapa dokument.

Studera koden.

#### Uppgift 2

Identifiera och testa olika selektorer.
Skriv CSS-regler för text, rubriker samt paragrafer ```h1 h2 p```:
- storlek
- typsnitt
- färg

#### Uppgift 3

Skapa en CSS-regel för ```.backto``` länken som är kopplad till ```#start```.

{% enduppgifter %}