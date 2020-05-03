const shows = [
    {
        date: 'Mon Dec 17 2018',
        venue: 'Ronald Lane',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    },
    {
        date: 'Tue Jul 18 2019',
        venue: 'Pier 3 East',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    },
    {
        date: 'Fri Jul 22 2019',
        venue: 'View Loungue',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    },
    {
        date: 'Sat Aug 12 2019',
        venue: 'Hyatt Agency',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    },
    {
        date: 'Wed Aug 11 2019',
        venue: 'Pres Club',
        location: 'San Franciso, CA',
        button: 'BUY TICKETS'
    }
];

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
    showVenue.innerText = show.venue;

    let showLocationHeader = document.createElement('h4');
    showLocationHeader.classList.add('table__header')
    showLocationHeader.innerText = 'LOCATION';

    let showLocation = document.createElement('p');
    showLocation.classList.add('table__item')
    showLocation.innerText = show.location;

    let showButton = document.createElement('button');
    showButton.classList.add('shows__button');
    showButton.innerText = show.button;

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