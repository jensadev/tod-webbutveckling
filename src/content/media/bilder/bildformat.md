---
title: Bildformat
eleventyNavigation:
    key: bildformat
    parent: bilder
    order: 3
    excerpt: Det finns ett stort antal digitala bildformat. Några lämpar sig speciellt väl för webben, andra inte.
---

{% intro %}

Alla bilder sparade på en dator använder sig av ett bildformat. Det finns ett stort antal olika bildformat och de har olika egenskaper. Det är viktigt att känna till vilka bildformat som är bäst lämpade för webben och i vilka sammanhang de fungerar bäst.

### Tänk på

- Att välja bildformat efter vad bilden föreställer och vilket användningsområde den ska ha.
- Att använda bildformat som är lämpliga för webben.
- Att en bilds komprimering kan påverka din bilds kvalité.
- En utförlig lista över format hittar du på [Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)

{% endintro %}

{% instruktioner %}

Det finns ett väldigt stort antal bildformat och de har olika egenskaper. Det är viktigt att känna till vilka bildformat som är bäst lämpade för webben och i vilka sammanhang de fungerar bäst.

### Pixel och vektorgrafik

För fotografiska bilder så används pixelformat, men för grafiska illustrationer eller ikoner så är vektorformat lämpligare. En pixelbilds information är lagrad i en raster, medan en vektorbilds information är lagrad i en formel. Detta gör att en vektorbild kan förstoras utan att förlora kvalité, medan en pixelbild förlorar kvalité när den förstoras.

### Komprimering

Digitala bilder använder i nästan alla fall någon form av komprimering. Komprimeringen hjälper till att begränsa bildens filstorlek. Det finns två typer av komprimering för bilder, icke-destruktiv- och destruktiv komprimering. En icke-destruktiv komprimering är begränsad då den arbetar på ett sådant sätt att data inte ska förloras, till skillnad mot en destruktiv komprimering där data förloras.

#### Portable Network Graphics (PNG)

PNG utvecklades för att ersätta GIF-formatet. PNG är ett format som använder icke-destruktiv komprimering. PNG lämpar sig väl för grafiska element, men stora enfärgade områden. PNG kan fungera på fotografier, men kan inte mäta sig med JPEG när det kommer till filstorlek.

#### Joint Photographic Experts Group (JPEG)

JPEG eller ofta JPG (eftersom filändelser ofta är begränsade till tre tecken) är ett bildformat med destruktiv komprimering. För fotografier kan JPEG ge en väldigt bra kompressionsgrad. JPEG lämpar sig dock mindre bra för bilder som innehåller text eller raka linjer.

{% hint "info" %}
Undvik att arbeta i JPEG när du redigerar bilder; varje gång du sparar i JPEG-formatet försämras kvalitén.
{% endhint %}

#### Graphics Interchange Format (GIF)

GIF är en äldre bildstandard som funnits med länge på webben. Likt PNG lämpar sig GIF bäst för grafiska element. GIF bör dock undvikas för fotografier. GIF kan animeras.

#### Scalable Vector Graphics (SVG)

SVG är ett vektorgrafik-format. Vektorgrafik är baserat på koordinater och SVG sparas i språket XML. Det gör att vektorgrafik aldrig förlorar i kvalité när bilden skalas upp; det gör att SVG lämpar sig otroligt väl för ikoner och element som innehåller text, till exempel logotyper. Vektorgrafik fungerar inte alls för fotografier.

{% hint "info" %}
SVG använder CSS för bland annat färg och typsnitt.
{% endhint %}

#### Webbformat (WebP, AVIF)

Det finns ett antal nya experimentella bildformat som används på webben. De optimerar bilder i väldigt hög grad, men de stöds ännu inte av alla webbläsare. När dessa format används är det viktigt att kontrollera i vilka webbläsare det fungerar och erbjuda alternativ.

{% hint "warning" %}
Använd experimentella format med försiktighet.
{% endhint %}

{% endinstruktioner %}

{% uppgifter %}

{% bas %}

#### Uppgift 1

Ge tre exempel på bildformat och varför de är lämpliga för webben.

#### Uppgift 2

Vad är viktiga att tänka på om du använder webbformat?

{% endbas %}

{% extra %}

#### Uppgift 3

Förklara skillnaden mellan pixel- och vektorgrafik.

{% endextra %}

{% enduppgifter %}

{% facit "Tips" %}

När du arbetar med en bild, var noggrann med att spara originalet och att inte redigera / spara i den filen. Gör en kopia!

{% endfacit %}


