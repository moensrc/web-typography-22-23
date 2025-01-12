# Web Typografie (2022/2023)
Minor VID semester 1, Rosella Moens

Online site: https://moensrc.github.io/web-typography-22-23/closed-captions 

# Proces
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

* **Transition delay:** werkte niet op beide elementen & op on en off classes. <br>
* **Opacity: 1;:** zorgde ervoor dat deze tekst _altijd_ zichtbaar bleef, wat niet geschikt was. <br>
* **CSS animatie van opacity 1 > 0:** is nu de oplossing die ik heb gekozen. De animatie zorgt voor een verloop van de opacity en heeft een duratie die langer duurt dan de tijd dat de tekst er staat.


### Sound animatie/visualisatie
Ik ben ook begonnen met het spelen met de geluiden uit de sounds array: Hoe geef je een luid geluid vorm zonder het te omschrijven in tekst? Mijn eerste idee hierbij heb ik uitgewerkt voor het eerste geluid.

***Sound 1*** <br>
Sound 1 is een luide beep die uit 1 geluid bestaat. Om dit visueel weer te geven heb ik de video-container en body gestyled wanneer het geluid afgaat. De videocontainer schudt met behulp van animation siren-1-movement en de body krijgt verschillende flikkerende achtergrondkleuren met animation siren-1-background. Deze movement in de animaties loopt op het geluid.

----

<br>

## Dag 2 (11/10/2022)
### Repeating text ("Within cells interlinked")
Op .p41, .p42 en .p34 wordt dezelfde zin 3 keer herhaald. Ik wilde deze apart weergeven zodat het in de captions duidelijk is dat dit 3 keer wordt gezegd, aangezien het huidig op zijn plek blijft staan.

**Styling:** De eerste twee malen dat K deze zin zegt, worden deze met behulp van de staying-text animation laten staan. Vervolgens wordt de laatste keer dat K dit zegt vormgegeven met een grote fontsize en duidt dit de laatste zin aan van deze test. <br>
**Interval:** Om deze laatste zin ritme en belang te geven, heb ik gebruik gemaakt van transitions inclusief transition-delays om deze woorden woord voor woord te laten verschijnen op het scherm, wat impact creëert.

### Sound animatie/visualisatie 2.0
Ik ben vervolgens weer gaan luisteren naar andere geluiden in het eerste fragment. De volgende sounds heb ik gevisualiseerd:
***Sound 3*** <br>
Sound 3 smelt samen met sound4 en is gelijk aan sound5 en sound7. Het is een laagtonige zoem, die voor de pieptoon van het vorige geluid plaatsvind. Omdat dit de opbouw weergeeft, heb ik voor de visualisatie een gradient gebruikt. Deze gradient beweegt van rechts naar links en geeft dus een opbouwend moment voor het geluid en beeld erna.

***Sound 4*** <br>
Sound 4 is het nageluid van sound3 en is gelijk aan sound6 en sound8. Het is een hoge pieptoon. Aangezien deze tonen (sound3 en sound4) samenkomen nadat K een 'juist' antwoord geeft, heb ik beide elementen groen gekleurd: dit geeft een confirmatie aan. Het piepgeluid wordt visueel gerepresenteerd door een scherpe felle groene kleur die zonder verloop in het scherm verschijnt.

### Animation resets
Het kostte mij veel tijd om de animaties die ik had gemaakt voor de sound visualisaties (zie hierboven) te stacken. Het kwam voor dat de animaties enkel 1 keer afspeelde. Met Vasilis heb ik gekeken naar mogelijke opties. Het was niet mogelijk om de animaties op de volgende sound te verwijderen, omdat hier nieuwe animaties op stonden. In JS heb ik een paar dingen geprobeerd, wat ik niet voor elkaar kreeg. Uiteindelijk zijn we voor de tijdelijke oplossing gekomen om de CSS animaties apart te maken voor al die verschillende sounds. Dus inplaats van dit:
```css
body.sound3,
body.sound5,
body.sound7 {
	animation: green-gradient 1.5s ease-in;
}
```
Naar dit:
```css
body.sound3 {
    animation: sound-3-gradient 1.5s ease-in;
}

body.sound5 {
    animation: sound-5-gradient 1.5s ease-in;
}
```
### Tweaks
Verder heb ik tweaks gedaan aan:
* Het scherm waarop de zin die voice3 zegt verschijnt had nog een gebrek aan impact. Hier heb ik de tekst naar het midden geplaatst en een groter formaat gegeven. Ook de color red toegevoegd in plaats van crimson, voor een consistenter kleurenpalet.
* De herhalende teksten van K en de tester zoals: "Cells, cells" en "Interlinked, interlinked", heb ik meer visuele ruimte gegeven door deze groter te maken. Ze vullen zo mooi de ruimte aan de linkerzijde van K tijdens de scene.
* Hiërarchie in CSS-file voor mijn eigen overzicht.

----
<br>

## Dag 3 (12/10/2022)
### Sound animatie/visualisatie 3.0
***Sound 9*** <br>
Sound 9 is de aanhoudende pieptoon in de test scene. Dit geluid is vervelend en scherp. Deze pieptoon wordt steeds luider: het is overheersend en valt je oren lastig. Om dit voor Doven even irritant te maken, heb ik met animaties verschillende visualisaties uitgeprobeerd. Bijvoorbeeld het laten flashen van verschillende background-colors die steeds sneller flikkeren (Zie afbeeldingen). Dit vondt ik echter nog te subtiel en niet vervelend genoeg.

<img src="./images.readme/sound9-test.png" alt="Code voor Sound9 animatie test 1" width="32%"> <img src="./images.readme/sound9-test2.png" alt="Code voor Sound9 animatie test 2" width="32%">

De volgende test was geïnspireerd door een [Codepen](https://codepen.io/web_designer_sanchit/pen/aaVPzq) die ik had gevonden. Deze maakt gebruik van een image overlay om zo een _glitch effect_ te creëeren. Dit kan je subtiel weergeven, maar met mate dit met snelheid wordt afgespeeld is het behoorlijk irritant. Hiervoor heb ik meerdere overlay afbeeldingen getest nadat de animatie in elkaar gebouwd was. 

<img src="./gifs.readme/sound9-texture.gif" alt="Clip with texture overlay 1" width="31%"> <img src="./gifs.readme/sound9-texture2.gif" alt="Clip with texture overlay 2" width="31%"> <img src="./gifs.readme/sound9-texture3.gif" alt="Clip with texture overlay 3" width="31%">

### Voortgangsgesprek 1
#### Feedback (12/10)
Tijdens het voortgangsgesprek duidde Vasilis erop dat de laatste zin geschreeuwd lijkt te worden door het formaat in contrast met de rest. Het is namelijk zo dat deze tekst over de hele video wordt weergegeven. Dat wilde ik graag aanpassen zodat het niet verwarrend is voor deze doelgroep. Ik wilde wel belang geven aan deze zin omdat dit het einde is van de test, maar het niet groot en schreeuwend weergeven.
Ik heb dit opgelost door deze zin onder in het scherm te zetten en een groene kleur te geven.

----
<br>

## Dag 4 (13/10/2022)
### Personaliteit in voice 4
Voice 4 heeft een kleine toevoeging aan het fragment. Hij verteld K dat hij zijn bonus op kan halen. De stem van Voice4 is neutraal en bijna vriendelijk. Ik wilde dit visualiseren door een andere variatie van Brenner te gebruiken: Brenner Slab. Door de slabs is het nog wel robot-achtig en monotoon, maar heeft het meer persoonlijkheid. Het oogt vriendelijk en neutraal. 

### Scaling variaties in scenes
Door geluiden en het gebrek aan geluiden heb ik op verschillende plekken in het fragment gespeeld met scaling van de video-container. Hier moest ik veel aan tweaken, omdat bepaalde animaties wel/niet een forwards property hadden op de animation-fill-mode. 
* Aan het begin van het fragment (sound0) schaalt het scherm op door het toenemende geluid.
* De video schaalt vervolgens weer langzaam op tijdens het aanhoudende piepgeluid in de 'Cells'-scene.
* De video schaalt direct af nadat de 'Cells'-scene voorbij is en de pieptoon stopt.
* De video schaalt op nadat het fragment voor de tweede baseline test begint.

----
<br>

## Dag 5 (17/10/2022)
### Adding Decoration
Ik wilde mij meer verdiepen in hoe ik meer ornamentatie en 'nonsense' toe kan voegen aan dit fragment. Ik wil graag de look & feel zo behouden maar daardoor kunnen externe elementen juist nog meer opvallen.
Ik heb voor dit onderwerp specifiek onderzoek gedaan naar tekst decoraties en toevoegingen in CSS. Ook heb ik geprobeerd met illustraties te werken. 


***Lines & Grid*** <br>
Een trend in design is het laten zien van hulplijnen en grids, wat ik heb geprobeerd na te bootsen in een basis. Al snel concludeerde ik dat het niet goed paste bij de video en bovendien in de weg zit.

<img src="./images.readme/test-lines.png" alt="Test met lijnen/borders om videocontainer" width="65%"><img src="./images.readme/test-lines-code.png" alt="Code van test met borders" width="34%">


***Illustraties*** <br>
Ik heb een paar screencaps van het filmfragment met witte lijn overgetrokken met Procreate. Ik heb een paar testen gedaan met overlap en positionering tijdens verschillende states.

<img src="./images.readme/test-illustration-code1.png" alt="Test positionering van Illustraties code" width="70%"> <img src="./images.readme/test-illustration-code.png" alt="Test positionering van Illustraties code 2" width="29%">
<img src="./images.readme/test-illustration-code2.png" alt="Test positionering van Illustraties code 2" width="30%"> <img src="./images.readme/test-illustration2.png" alt="Test positionering van Illustraties" width="69%">

Illustraties worden weergegeven aan het begin van het fragment, totdat sound1 afspeelt. Illustraties verschijnen tijdens de 'Cells'-scene en blijven staan op fullscreen tot de volgende.


***Title of clip: Baseline Test*** <br>
Om meer impressie te geven van het fragment zelf op de landingspage voordat de video wordt afgespeeld, wilde ik de titel weergeven. Met inspiratie van een codepen die ik had gevonden had ik gespeeld met lijnen. Toen het niet gelijk werkte met de lijnen in de clippath van de tekst, vond ik dat eigenlijk visueel aantrekkelijker.

<img src="./images.readme/title-baselinetest-test.png" alt="Test voor Titel" width="49%"> <img src="./images.readme/title-baselinetest-test2.png" alt="Test voor Titel 2" width="49%">
<img src="./images.readme/title-finish.png" alt="Titel na testen" width="99%">

----
<br>

## Dag 6 (19/10/2022)
### Adding More Nonsense
***Text-emphasis*** <br>
Tijdens research over css text effects kwam ik de text-emphasis property tegen. Dit leek me een perfecte toepassing om nadruk te leggen op elementen zonder deze visueel te veranderen door bijvoorbeeld de font-size te vergroten of de typografie schuin of bold te zetten. Het gevolg van tekst vergroten of bold/italic toevoegen is dat dit een andere emotie of toon over kan brengen.
Aangezien de dialoog (in vooral het eerste fragment) erg monotoon is, leek mij dit geschikt om toe te voegen als nuttig- én nonsense element.

<img src="./images.readme/emphasis1.png" alt="The Word 'ready' is emphasized with filled double circles over it" width="83%"> <img src="./images.readme/emphasis2.png" alt="The Word 'cells' is emphasized with open dots over it" width="16%">
<img src="./images.readme/emphasis3.png" alt="'Within cells interlinked' is emphasized with cells having filled dots over it" width="99%">

***GIF Animation*** <br>
Als overlay voor de achtergrond met illustraties wilde ik een bewegend element toevoegen. Aangezien de video begint met een moody outside view van de LAPD faciliteit met mist/slechte weeromstandigheden, leek regen mij een geschikte optie. Het stormt bovendien in Los Angeles in het eerste deel van de film, waar Joi (holografische vriendin K) de regen voor de eerste keer kan 'voelen'. Wit op zwart is een goed contrast, maar omdat de illustraties ook wit waren wilde ik een kleur toevoegen aan dit scherm. Rood is intens en lijkt bovendien op bloed, wat samenhangt met hoofdpersonage K: Hij is een bladerunner die mensen/replicants vermoord (retired). 

<img src="./images.readme/animation-rain.gif" alt="Rain animation (13 frames)" width="99%">

----
<br>

## Dag 7 (22/10/2022)
### End Screen
Om het fragment af te sluiten leek het me geschikt om een soort end-screen te ontwerpen. Omdat de tester aan het eind K verteld dat hij ver van baseline zit, was een error scherm een goede 'nonsense' toevoeging aan dit scherm. Met rode letters en variatie in bold en normal font-weight staat er ook een emphasis op de error met een "⊘" teken.

<img src="./images.readme/error-screen.png" alt="Error 404 Baseline not found" width="99%">

### Layout Fragment 2
Ook heb ik met de captions van fragment 2 gespeeld. Omdat de HTML anders is geformat, wilde ik graag dat de eindwoorden net als in fragment 1 nadruk geven door de afwisselende en herhalende dialoog spannender te maken en meer snelheid te geven. <br>
Zo heb ik de laatste woorden van deze zinnen apart gestyled en met een delay gezorgd dat de persoon die deze captions leest, eerst de onderste zin leest en vervolgens pas het verschijnende laatste woord.

### Adding Decoration 2.0
***Illustraties*** <br>
Ook in fragment 2 wilde ik de illustraties toevoegen, hier heb ik er twee om gebruik van te maken. Dit is zo consistent met de styling en branding van mijn eigen opvatting van het fragment en toepassing van mijn eigen visie. 

<img src="./images.readme/illustrations-2.1.png" alt="Illustratie K kijkt naar voren" width="99%">
<img src="./images.readme/illustrations-2.2.png" alt="Illustratie Camera" width="99%">

----
<br>

## Dag 8 (24/10/2022)
### Voortgangsgesprek 2
#### Feedback (24/10)
Ik ben goed bezig en het is visueel gezien mooi en interessant. Er zijn nog een paar verbeterpunten in detail om het nog een niveau indrukwekkender en tof te maken:
* Illustraties zijn mooi, maar deze kunnen nog toevoeging bieden aan het geluid. Bijvoorbeeld dat deze tijdens de pieptoon ook bewegen of tijdens de soundscaping in fragment 2 meebewegen. 
* Sommige teksten zijn nog niet goed leesbaar, zwarte tekst op een zwarte achtergrond.

### Verbetering Leesbaarheid
Voor de teksten in fragment 2 was het nog van noodzaak om de zwarte tekst op de zwarte achtergrond opvallender te maken. Ik heb een border geprobeerd, dit was te prominent. Vervolgens had ik het idee om een text-shadow toe te voegen en dit was subtiel dus heb ik een tweede text-shadow toegevoegd. Nu valt de shadow beter op en springt de zwarte tekst beter van de zwarte achtergrond. 

### Soundscaping van Fragment 2
De soundscaping van fragment 2 bestaat uit meerdere geluiden die elkaar overlappen. Soms valt er ook een stilte, bijvoorbeeld wanneer K er langer over doet om te antwoorden. <br>
<img src="./images.readme/sound-fragment2.png" alt="Notities geluidsfragmenten" width="35%">
* Zachte piepgeluiden komen soms voor <br>
Deze piepgeluiden zijn niet heel consistent en trekken niet volledige aandacht. Bij andere geluiden in het fragment heb ik voor een luide piep een simpele 'flash' van een kleur gebruikt als visualisatie. Dat is voor deze piepgeluiden lastiger, aangezien deze subtieler en met ritme constant zijn. 

* Synth-sounding zoem met een wave <br>
Het geluid van een zoem neemt toe en af in klankhoogte en volume. Dit is interessant in elkaar gezet, aangezien het volume hoger wordt tijdens het toenemen maar ook tijdens het afnemen op die golf neemt het volume toe. 

* Synth die wakkert <br>
Voor de synth wilde ik een sound-wave animatie maken die achter de video speelt. Dit laat de robotische en digitaal gecreërde klank van een synthesizer zien. Hiervoor heb ik meerdere opties onderzocht en uiteindelijk voor een vierkante border gekozen die achter de video wordt geplaatst. 

<img src="./gifs.readme/waves-1.gif" alt="Single wave animatie" width="49%"> <img src="./gifs.readme/waves-2.gif" alt="Wave border animatie" width="49%">

Dit werkte uiteindelijk niet en was ongeschikt voor het geluid, dit heb ik niet verder gebruikt.

----
<br>

## Dag 9 (25/10/2022)
### Soundscaping van Fragment 2 2.0
Om de wave weer te geven met de overlay van de synth heb ik gespeeld met verschillende overlappende gradients. De kleuren werkten niet lekker met elkaar en de timing was ook lastig in te schatten, door de inconsistentie van het ritme. 

<img src="./gifs.readme/sound11-test.gif" alt="Overlappende sounds" width="49%"> <img src="./gifs.readme/sound11-test2.gif" alt="Overlappende sounds 2" width="49%"> 

Voor de overkoepelende wave synth sound heb ik de background gradient gebruikt. Dit heb ik geprobeerd om te overlappen met een :before pseudo element om een gradient aan te maken met nog een animatie. Deze animeerde niet. Met een nieuwe div had ik hetzelfde probleem. 

----
<br>

## Dag 10 (26/10/2022)
### Actie met illustratie 
In het voortgangsgesprek kwam al naar voren dat de illustraties hier een belangrijkere rol mogen krijgen. Zo kan ik ze gebruiken om het geluid en beweging te visualiseren. 

Ik heb hiervoor nog een paar illustraties gemaakt zodat het consistenter voorkomt in de fragmenten. Deze illustraties zijn voorzien van animaties op basis van de muziek, geluiden, bewegingen of spanningsniveaus.

<img src="./gifs.readme/illustration-move1.gif" alt="K loopt" width="49%"> <img src="./gifs.readme/illustration-move2.gif" alt="K en camera schudden" width="49%"> 
<img src="./gifs.readme/illustration-move3.gif" alt="K is stil, hij wacht om antwoord te geven" width="99%">


----
<br>

# Principles
## Study situation
### Blade Runner 2049
Om de situatie en context te begrijpen heb ik ten eerste de video meerdere malen gekeken. Hier ben ik ingedoken door goed naar de dialoog, de sound-effects en de soundscaping van de fragmenten te luisteren. 
Om meer te weten te komen over de personages heb ik uiteindelijk de film ook gekeken, na het opzoeken van informatie op film wiki's. 

### Context en doelgroep
Voor Doven iets ontwerpen brengt veel uitdagingen met zich mee. Wat ik vooral tijdens dit project merkte is dat het aanpassen van de typografie vooral lastig is. Je zorgt al snel voor een andere emotie of volume door een tekst groter of bolder te maken. 
Omdat je bovendien ook de tekst leesbaar en representatief wil houden voor de film, kan je niet te veel met deze tekst elementen spelen. 

Zo heb ik dus met behulp van beeld en illustraties in mijn eigen opvatting van het fragment en identiteit het fragment voor Doven ook interessant en aantrekkelijk te maken.
Zonder geluid is het fragment namelijk erg oninteressant en bijna saai.


## Ignore conventions
### Afwijking van mainstream caption ontwerp
Bekende conventies uit gewoonlijke captions zijn:
1. onderaan in het midden staat de ondertiteling
2. de tekst is wit op een zwarte achtergrond
3. elk karakter heeft dezelfde visuele identiteit in de captions
4. geluiden worden met tekst omschreven

Ik heb dit willen omzeilen en aanpassen door de tekst:
1. op verschillende plekken te plaatsen, maar wel consistent genoeg zodat iemand niet wordt afgeleid door de tekst. Het moet niet afnemen van de film.
2. de tekst is zwart, rood, of groen bepalend door de vormgeving van de typografie voor het karakter.
3. de tekst wordt vormgegeven aan de hand van het karakter.
4. geluiden worden met gradients, knipperende achtergrondkleuren en illustraties omvangen.


## Prioritize identity
### Een eigen identiteit
Voor dit fragment wilde ik iets creëren dat dicht bij de film ligt, maar ook compleet hierbuiten valt. De captions moeten bovendien wel in een contrast staan met de film. 

<img src="./images.readme/moodboard.png" alt="Moodboard" width="99%">

Aan de hand van een moodboard heb ik geconstateerd wat de look & feel is van de film en daar heb ik mijn ontwerpkeuzes op afgestemd. Ik heb bijvoorbeeld simpele kleuren gebruikt: wit, zwart, groen en rood. Een eenvoudig maar ook uitgebreid kleurenpalet. Al deze kleuren hebben een duidelijk contrast met elkaar en bovendien ook geschikt door associatie.

### Visuele toevoegingen
Zoals eerder genoemd heb ik dit fragment eigen gemaakt door illustratieve elementen toe te voegen aan de video. Op zo een manier dat het de film en geluid ondersteund maar ook een hint van nonsense heeft. 

## Add Nonsense
### Nonsense als deel van identiteit
***Illustraties*** <br>
Mijn illustraties laten frames, beweging en geluid zien, maar het zijn simpelweg stilstaande frames uit het fragment. In die zin kan je deze natuurlijk weglaten, echter ondersteunen deze de 'prioritize identity' en 'ignore conventions' principes.

***Decoratie op tekst*** <br>
Ik heb met text-emphasis gespeeld voor de captions. Het geeft de mogelijkheid om symbolen toe te voegen aan tekst, waardoor het dus niet aandacht trekt door formaat, maar doordat het iets meer visuele aandacht trekt in de vorm van een pictogram.

Het principe van deze decoratie is om nonsense te zijn, al hebben de symbolen die ik gebruik wel betrekking op het woord, zin of context.

***Eindscherm*** <br>
Als leuk detail heb ik ook een eindscherm toegevoegd waarop staat: Error 404 baseline not found. Dit was een grappige gag voor aan het eind omdat K niet dichtbij baseline zit en in de formulatie wordt gewezen op het extreem digitale tijdperk in 2049. 

----
<br>


# Eindreflectie

Zoals ik al eerder noemde was deze opdracht een echte uitdaging. Het was een opdracht waarbij het lastig is te bedenken wat het eindproduct zou gaan zijn bij de start. Maar door te experimenteren en nieuwe dingen te proberen kwam er steeds meer duidelijkheid, in visuele stijl maar ook in de mogelijkheden voor deze doelgroep.

In de ondertitels lag een grote uitdaging, zoals ik eerder zei was het hier lastig om de juiste formaten en nadruk te leggen zonder de toon van de dialoog te verliezen.

Ook was de soundscaping van de tweede baseline test erg lastig om vorm te geven, met behulp van een gradient heb ik dit uiteindelijk gedaan. Ik denk dat hier nog verbeterpunten liggen. Het was een grote uitdaging om de toename van spanning en overlappende geluiden te visualiseren.

Kortom, een uitdagende opdracht die erg leerzaam was voor mij. Ik heb veel geëxperimenteerd en vooral ook veel css geschreven. Ik ben tevreden met mijn eindresultaat en visuele identiteit die hier aan vast zit.
