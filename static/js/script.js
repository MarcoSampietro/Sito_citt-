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
    }
    document.getElementById('details-content').innerHTML = content;
}

// Torna alla sezione principale con le cards
function showCards() {
    document.getElementById('details-section').style.display = 'none';
    document.getElementById('cards-section').style.display = 'flex';
}