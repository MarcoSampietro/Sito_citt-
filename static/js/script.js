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
            <img src="{{url_for('static', filename='immagini/Citta_vecchia2.jpg')}}" alt="Città Vecchia" class="img-fluid">
        `;
    } else if (section === 'centro_copernico') {
        content = `
            <h2>Centro Scientifico Copernico</h2>
            <p>Un museo interattivo che rende la scienza divertente per tutte le età. Un viaggio nel mondo della scienza e della tecnologia!</p>
            <img src="{{url_for('static', filename='immagini/Centro_scientifico_copernico2.jpg')}}" alt="Centro Copernico" class="img-fluid">
        `;
    } else if (section === 'praga_district') {
        content = `
            <h2>Praga District</h2>
            <p>Famoso per la sua street art e locali trendy, è uno dei quartieri più vivaci e alternativi di Varsavia.</p>
            <img src="{{url_for('static', filename='immagini/Praga_district2.jpg')}}" alt="Praga District" class="img-fluid">
        `;
    }
    document.getElementById('details-content').innerHTML = content;
}

// Torna alla sezione principale con le cards
function showCards() {
    document.getElementById('details-section').style.display = 'none';
    document.getElementById('cards-section').style.display = 'flex';
}