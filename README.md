# real_estate_care

### Installatie
1. Clone de repository: `git clone https://github.com/AnnemarieHelmstrijd/real-estate-care`
2. Installeer alle packages die nodig zijn: `npm install`
3. Start server op localhost: `npm run dev`

### Inloggen
Om de omgeving te beveiligen is er een login nodig. Er zijn twee fictieve accounts toegevoegd aan de database. Die kun je gebruiken om in te loggen.

| Email                 | Wachtwoord   |
|-----------------------|--------------|
| bob@realestatecare.com | admin1234  |
| alice@realestatecare.com | admin1234  |

## Projectbeschrijving

Single Page Application voor een bedrijf dat vastgoedinspecties uitvoert. Geplande taken kunnen worden gestart en afgerond. Na afronding komen die bij het 'Completed' menu te staan.

### Technologieën

- Vue.js: Dit framework is gekozen omdat het goed onderhouden wordt en aan de eisen voldoet die zijn gesteld door de 'opdrachtgever'.
- Vuetify: Dit framework is gebouwd bovenop Vue.js. Dit framework levert UI components en tools.
- Vuex: (Vue + Axios) Dit framework wordt gebruikt voor state management. Wederom bovenop Vue en daarom voor dit project de logische keuze.
- JSON-database: Er is een database met users, completed reports en scheduled reports gehost op My JSON Server.
- Vue-router: Dit wordt gebruikt om te navigeren tussen de vershillende onderdelen van de app.

### Veiligheid

Voor de veiligheid is er een inlogscherm. Zolang er niemand succesvol is ingelogd zijn de overige delen van de applicatie niet beschikbaar (Routing in header en footer zijn uitgeschakeld)

### Toegankelijkheid

- Afbeedlingen hebben alternatieve teksten
- Fontsize is minstens 18 pixels
- Tekst en achtergrond zijn in kleur geinverteerd. Hierdoor is het contrast hoog en de tekst altijd goed leesbaar.
- Dit alles is gedaan volgens de WCAG 2.1-richtlijnen.

### Style-guides
Er is gewerkt volgens de officiele styleguides van VueJS. Deze style regels zijn oa geforceerd door de compiler.
- Namen van Component zijn allemaal multi-word.
- Component data zijn functions
- Props zijn specifiek gedefinieerd (Waar nodig).
- etc