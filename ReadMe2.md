# Web Typografie (2022/2023)
Minor Vid, Rosella Moens

## Dag 1 (10/10/2022)
### Start project
Voor het visueel maken van het geluid van dit **filmfragment uit Blade Runner 2049**, heb ik deze meerdere malen bekeken. Ik ben direct daarna een paar basis elementen op gaan zetten: ik heb hier bijvoorbeeld de tekst over de video geplaatst en twee voices van een typografie voorzien. 

### Personaliteit in voices 1, 2 & 3
Ik heb gekozen om van Benner gebruik te maken, omdat deze variaties helpen bij het inzichtelijk maken van de personages en toon die zij in hun stem hebben, die een doof persoon niet kan horen maar wel met beeld kan associeren. 

* ***Voice 1*** Vanaf het moment dat ik voice1 hoorde, wist ik dat dit bij een monospace font hoorde. Het voelt alsof een AI spreekt, het is monotoon en voelt robotisch, wat de kern van Brenner Mono omschrijft. 
* ***Voice 2*** Voor het personage K had ik moeite met het uitkiezen van een font. Het leek me geschikt om een font te kiezen die neutraal is maar wel persoonlijkheid heeft. K is een 'stoere' blade runner en daardoor leek een harde, bolde variant van Brenner mij geschikt. 
* ***Voice 3*** Voice 3 is de man die 1 line zegt, namelijk: 'Fuck off, skin-job!', wat negatief en aggressief wordt geuit richting K. Hierbij past ook een bolde variant van Brenner, echter is deze in uppercase getransformeerd met text-transform. Uppercase text is in-your-face en aanwezig, net als de aggressieve toon van deze man.

### Tekst laten staan
Ik wilde met behulp van CSS sommige p's tijdelijk laten staan nadat deze de off-class krijgen, aangezien het dialoog van de Baseline Tests erg snel verloopt. Ik heb hiervoor verschillende opties uitgeprobeerd.

**Transition delay:** werkte niet op beide elementen & op on en off classes.
**Opacity: 1;:** zorgde ervoor dat deze tekst _altijd_ zichtbaar bleef, wat niet geschikt was.
**CSS animatie van opacity 1 > 0:** is nu de oplossing die ik heb gekozen. De animatie zorgt voor een verloop van de opacity en heeft een duratie die langer duurt dan de tijd dat de tekst er staat.


### Sound animatie/visualisatie
Ik ben ook begonnen met het spelen met de geluiden uit de sounds array: Hoe geef je een luid geluid vorm zonder het te omschrijven in tekst? Mijn eerste idee hierbij heb ik uitgewerkt voor het eerste geluid.

* ***Sound 1*** Sound 1 is een luide beep die uit 1 geluid bestaat. Om dit visueel weer te geven heb ik de video-container en body gestyled wanneer het geluid afgaat. De videocontainer schudt met behulp van animation siren-1-movement en de body krijgt verschillende flikkerende achtergrondkleuren met animation siren-1-background. Deze movement in de animaties loopt op het geluid.


## Dag 2 (11/10/2022)
### Repeating text 
Op .p41, .p42 en .p34 wordt dezelfde zin 3 keer herhaald. Ik wilde deze apart weergeven zodat het in de captions duidelijk is dat dit 3 keer wordt gezegd, aangezien het huidig op zijn plek blijft staan.

**Styling:** De eerste twee malen dat K deze zin zegt, worden deze met behulp van de staying-text animation laten staan. Vervolgens wordt de laatste keer dat K dit zegt vormgegeven met een grote fontsize en duidt dit de laatste zin aan van deze test. 
**Interval:** Om deze laatste zin ritme en belang te geven, heb ik gebruik gemaakt van transitions inclusief transition-delays om deze woorden woord voor woord te laten verschijnen op het scherm, wat impact creëert.

### Next subject

