const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]


let divVuoto = document.getElementById('divVuoto');

let result = []
let count = 0



function ricerca() {


    let titleInput = document.getElementById('ricercaTitolo').value
    let locationInput = document.getElementById('ricercaLuogo').value

    divVuoto.innerHTML = '';
    let result = [];

    if (titleInput === '' && locationInput === '') {
        alert('Inserisci dei valori nel campo di ricerca')
        return
    }

    for (i = 0; i < jobs.length; i++) {
        if (jobs[i].title.toLowerCase().includes(titleInput.toLowerCase()) && jobs[i].location.toLowerCase().includes(locationInput.toLowerCase())) {
            result.push(jobs[i])
        }

    }
    count = result.length

    divVuoto.innerHTML = '<h2> Risultati Trovati:' + count + '</h2>'



    if (count > 0) {

        let table = document.createElement('table');

        let header = document.createElement('tr');

        let thTitle = document.createElement('th');
        let thLocation = document.createElement('th');

        thTitle.textContent = 'Offerta';
        thLocation.textContent = 'Luogo';

        header.appendChild(thTitle);
        header.appendChild(thLocation);
        table.appendChild(header);

        for (i = 0; i < result.length; i++) {
            let riga = document.createElement('tr');
            let cellaTitolo = document.createElement('td');
            let cellaLuogo = document.createElement('td');
            cellaTitolo.textContent = result[i].title;
            cellaLuogo.textContent = result[i].location;

            riga.appendChild(cellaTitolo);
            riga.appendChild(cellaLuogo);
            table.appendChild(riga);
        }

        divVuoto.appendChild(table);
    }
    else {
        let no_result = document.createElement('p')
        no_result.style.color = "azure"
        no_result.textContent = "Non ci sono risultati"
        divVuoto.appendChild(no_result)
    }

    document.getElementById('ricercaTitolo').value = '';
    document.getElementById('ricercaLuogo').value = '';

    return { result, count }


}


