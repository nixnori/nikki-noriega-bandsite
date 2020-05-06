const apiBaseURL = 'https://project-1-api.herokuapp.com/';
const apiKey = '?api_key=4e618b64-84d4-45ac-9e8e-599621afb0f4';

axios.get(apiBaseURL + 'showdates' + apiKey)
.then(response => {
    const shows = response.data;
    
    let container = document.querySelector('.shows__table');

    let showsHeader = ['DATES', 'VENUE', 'LOCATION'];

    let head = document.createElement('div');
    head.classList.add('shows__card');
    head.classList.add('header__container');

    const displayHead = (h) => {

        let showHeader = document.createElement('h4');
        showHeader.classList.add('table__header--1')
        showHeader.innerText = h;

        head.appendChild(showHeader);
        container.appendChild(head);
    };

    showsHeader.forEach(h => {
        displayHead(h);
    });

    const displayTable = show => {
        let card = document.createElement('div');
        card.classList.add('shows__card');

        let showDateHeader = document.createElement('h4');
        showDateHeader.classList.add('table__header')
        showDateHeader.innerText = 'DATE';

        let showDate = document.createElement('h4');
        showDate.classList.add('table__item')
        showDate.innerText = show.date;

        let showVenueHeader = document.createElement('h4');
        showVenueHeader.classList.add('table__header')
        showVenueHeader.innerText = 'VENUE';

        let showVenue = document.createElement('p');
        showVenue.classList.add('table__item')
        showVenue.innerText = show.place;

        let showLocationHeader = document.createElement('h4');
        showLocationHeader.classList.add('table__header')
        showLocationHeader.innerText = 'LOCATION';

        let showLocation = document.createElement('p');
        showLocation.classList.add('table__item')
        showLocation.innerText = show.location;

        let showButton = document.createElement('button');
        showButton.classList.add('shows__button');
        showButton.innerText = 'BUY TICKETS';

        card.appendChild(showDateHeader);
        card.appendChild(showDate);
        card.appendChild(showVenueHeader);
        card.appendChild(showVenue);
        card.appendChild(showLocationHeader);
        card.appendChild(showLocation);
    card.appendChild(showButton);
        container.appendChild(card);
    };

    shows.forEach(show => {
        displayTable(show);
    });
})
.catch(error => {
    console.log('There is an error: ', error);
});