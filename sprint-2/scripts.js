

// Shows
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

const showHeaders = ['DATE','VENUE', 'LOCATION'];

console.log(shows[1]);

let container = document.querySelector('.shows__table');

function displayTable(show) {
    let card = document.createElement('div');
    card.classList.add('shows__card');

    let showDate = document.createElement('h4');
    showDate.innerText = show.date;

    let showVenue = document.createElement('p');
    showVenue.innerText = show.venue;

    let showLocation = document.createElement('p');
    showLocation.innerText = show.location;

    let showButton = document.createElement('button');
    showButton.innerText = show.button;

    card.appendChild(showDate);
    card.appendChild(showVenue);
    card.appendChild(showLocation);
    card.appendChild(showButton);
    container.appendChild(card);
}

shows.forEach(show => {
    displayTable(show);
});
