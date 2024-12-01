// Mostra i dettagli di una sezione specifica
function showDetails(section) {
    document.getElementById('cards-section').style.display = 'none';
    document.getElementById('details-section').style.display = 'block';

    let content = '';
    if (section === 'citta_vecchia') {
        content = `
            <h2>Città Vecchia</h2>
            <p>La Città Vecchia di Varsavia, patrimonio dell'UNESCO, è un simbolo di rinascita. 
            Distrutta durante la Seconda Guerra Mondiale, è stata ricostruita fedelmente.</p>
            <img src="static/immagini/Citta_vecchia2.jpg" alt="Città Vecchia" class="img-fluid">
        `;
    } else if (section === 'centro_copernico') {
        content = `
            <h2>Centro Scientifico Copernico</h2>
            <p>Un museo interattivo che rende la scienza divertente per tutte le età. Un viaggio nel mondo della scienza e della tecnologia!</p>
            <img src="static/immagini/Centro_scientifico_copernico2.jpg" alt="Centro Copernico" class="img-fluid">
        `;
    } else if (section === 'praga_district') {
        content = `
            <h2>Praga District</h2>
            <p>Famoso per la sua street art e locali trendy, è uno dei quartieri più vivaci e alternativi di Varsavia.</p>
            <img src="static/immagini/Praga_district2.jpg" alt="Praga District" class="img-fluid">
        `;
    } else if (section === 'biblioteca_universitaria') {
        content = `
            <h2>Biblioteca Universitaria</h2>
            <p>Un punto di riferimento per gli amanti della lettura, famoso per il suo tetto verde che offre una vista panoramica sulla città.</p>
            <img src="static/immagini/Biblioteca_universitaria2.jpg" alt="Biblioteca Universitaria" class="img-fluid">
        `;
    } else if (section === 'eventi_varsavia') {
        content = `
            <h2>Eventi a Varsavia</h2>
            <p>Durante l'anno, la città ospita numerosi festival, eventi culturali e concerti che animano la capitale polacca.</p>
            <img src="static/immagini/Eventi2.jpg" alt="Eventi Varsavia" class="img-fluid">
        `;
    } else if (section === 'varsavia_moderna') {
        content = `
            <h2>Varsavia Moderna</h2>
            <p>Scopri l'architettura contemporanea e i nuovi grattacieli che definiscono lo skyline di Varsavia.</p>
            <img src="static/immagini/Varsavia_moderna2.jpg" alt="Varsavia Moderna" class="img-fluid">
        `;
    } else if (section === 'museo_chopin') {
        content = `
            <h2>Museo Chopin</h2>
            <p>Un museo dedicato al compositore polacco Fryderyk Chopin, con mostre interattive sulla sua vita e la sua musica.</p>
            <img src="static/immagini/Museo_Chopin2.jpg" alt="Museo Chopin" class="img-fluid">
        `;
    } else if (section === 'nightlife') {
        content = `
            <h2>Nightlife Varsaviana</h2>
            <p>Scopri i migliori club, bar e locali notturni per vivere una notte indimenticabile a Varsavia.</p>
            <img src="static/immagini/Nightlife2.jpg" alt="Nightlife" class="img-fluid">
        `;
    } else if (section === 'teatro_nazionale') {
        content = `
            <h2>Teatro Nazionale</h2>
            <p>Un'icona culturale, il Teatro Nazionale di Varsavia offre spettacoli teatrali di grande qualità e tradizione.</p>
            <img src="static/immagini/Teatro_nazionale2.jpg" alt="Teatro Nazionale" class="img-fluid">
        `;
    } else if (section === 'mercatini_natale') {
        content = `
            <h2>Mercatini di Natale</h2>
            <p>Ogni inverno, Varsavia si trasforma in un paese delle meraviglie natalizie con i suoi mercatini colorati.</p>
            <img src="static/immagini/Mercatini2.jpg" alt="Mercatini di Natale" class="img-fluid">
        `;
    } else if (section === 'sport_varsavia') {
        content = `
            <h2>Sport a Varsavia</h2>
            <p>La città ospita numerosi eventi sportivi, tra cui partite di calcio, tennis e maratone internazionali.</p>
            <img src="static/immagini/Sport2.jpg" alt="Sport Varsavia" class="img-fluid">
        `;
    } else if (section === 'parco_lazienki') {
        content = `
            <h2>Parco &#321azienki</h2>
            <p>Un parco incantevole, famoso per il palazzo sull'acqua e i concerti di Chopin durante l'estate.</p>
            <img src="static/immagini/Parco2.jpg" alt="Parco Łazienki" class="img-fluid">
        `;
    }
    document.getElementById('details-content').innerHTML = content;
}

// Torna alla sezione principale con le cards
function showCards() {
    document.getElementById('details-section').style.display = 'none';
    document.getElementById('cards-section').style.display = 'flex';
}