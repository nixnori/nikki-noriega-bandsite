
// Comments
let comments = [
    {
        pic: '../assets/image/asia.jpg',
        name: 'Theodore Duncan',
        date: '11/15/2018',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
    {
        pic: '../assets/image/chico.jpg',
        name: 'Gary Wong',
        date: '12/12/2018',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        pic: '../assets/image/cat.jpg',
        name: 'Michael Lyons',
        date: '12/18/2018',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    }
];

let commentsSection = document.querySelector('.comments__container');

const displayComments = (c) => {
    let commentCard = document.createElement('div');
    commentCard.classList.add('comments__card');

    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comments__item');

    let pic = document.createElement('img');
    pic.classList.add('comments__pic');
    pic.src = c.pic;

    let commentList = document.createElement('ul');
    commentList.classList.add('comments__list');

    let name = document.createElement('li');
    name.classList.add('comments__name');
    name.innerText = c.name;

    let date = document.createElement('li');
    date.classList.add('comments__date');
    date.innerText = c.date;

    let comment = document.createElement('p');
    comment.classList.add('comments__text');
    comment.innerText = c.comment;

    commentList.appendChild(name);
    commentList.appendChild(date);
    commentContainer.appendChild(commentList);
    commentContainer.appendChild(comment);
    commentCard.appendChild(pic);
    commentCard.appendChild(commentContainer);
    commentsSection.appendChild(commentCard);
}

comments.forEach(c => {
    displayComments(c);
});


document.addEventListener('click', e => {
    e.target.value = '';
});

const form = document.querySelector('.comments__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let d = new Date();
    let date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

    if (event.target.name.value !== 'Enter name' &&
    event.target.name.value !== '' &&
    event.target.comment.value !== 'Add a new comment' &&
    event.target.comment.value !== '') {
        let commentInput = {
            pic: document.querySelector('.profilepic').src,
            name: event.target.name.value,
            date: date,
            comment: event.target.comment.value
        };

        comments.push(commentInput);
    };

    while (commentsSection.lastElementChild) {
        commentsSection.removeChild(commentsSection.lastElementChild)
    }

    comments.forEach(c => {
        displayComments(c);
    });

    event.target.name.value = 'Enter name';
    event.target.comment.value = 'Add a new comment';

});



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
