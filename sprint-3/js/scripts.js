const apiBaseURL = 'https://project-1-api.herokuapp.com/';
const apiKey = '?api_key=4e618b64-84d4-45ac-9e8e-599621afb0f4'

axios.get(apiBaseURL + 'comments' + apiKey)
.then(response => {
    let comments = response.data;
    let commentsSection = document.querySelector('.comments__container');

    const displayComments = (c) => {
        let commentCard = document.createElement('div');
        commentCard.classList.add('comments__card');

        let commentContainer = document.createElement('div');
        commentContainer.classList.add('comments__item');

        let pic = document.createElement('img');
        pic.classList.add('comments__pic');
        pic.src = '../assets/image/asia.jpg';

        let commentList = document.createElement('ul');
        commentList.classList.add('comments__list');

        let name = document.createElement('li');
        name.classList.add('comments__name');
        name.innerText = c.name;

        let d = new Date(c.timestamp);
        let dateItem = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

        let date = document.createElement('li');
        date.classList.add('comments__date');
        date.innerText = dateItem;

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
    };

    comments.forEach(i => {
        displayComments(i);
    });
})
.catch(error => {
    console.log('There is an error: ', error);
});

document.addEventListener('click', e => {
    e.target.value = '';
});

const form = document.querySelector('.comments__form');

document.addEventListener('submit', e => {
    e.preventDefault();

    if (event.target.name.value !== 'Enter name' &&
    event.target.name.value !== '' &&
    event.target.comment.value !== 'Add a new comment' &&
    event.target.comment.value !== '') {
        let name = event.target.name.value;
        let comment = event.target.comment.value;

        axios.post(apiBaseURL + 'comments' + apiKey, {
            'name': name,
            'comment': comment
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    while (commentsSection.lastElementChild) {
        commentsSection.removeChild(commentsSection.lastElementChild)
    }

    event.target.name.value = 'Enter name';
    event.target.comment.value = 'Add a new comment';;
});


//  let commentsSection = document.querySelector('.comments__container');

// const displayComments = (c) => {
//     let commentCard = document.createElement('div');
//     commentCard.classList.add('comments__card');

//     let commentContainer = document.createElement('div');
//     commentContainer.classList.add('comments__item');

//     let pic = document.createElement('img');
//     pic.classList.add('comments__pic');
//     pic.src = c.pic;

//     let commentList = document.createElement('ul');
//     commentList.classList.add('comments__list');

//     let name = document.createElement('li');
//     name.classList.add('comments__name');
//     name.innerText = c.name;

//     let date = document.createElement('li');
//     date.classList.add('comments__date');
//     date.innerText = c.date;

//     let comment = document.createElement('p');
//     comment.classList.add('comments__text');
//     comment.innerText = c.comment;

//     commentList.appendChild(name);
//     commentList.appendChild(date);
//     commentContainer.appendChild(commentList);
//     commentContainer.appendChild(comment);
//     commentCard.appendChild(pic);
//     commentCard.appendChild(commentContainer);
//     commentsSection.appendChild(commentCard);
// };

// comments.forEach(i => {
//     displayComments(i);
// });


// document.addEventListener('click', e => {
//     e.target.value = '';
// });

// const form = document.querySelector('.comments__form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let d = new Date();
//     let date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

//     if (event.target.name.value !== 'Enter name' &&
//     event.target.name.value !== '' &&
//     event.target.comment.value !== 'Add a new comment' &&
//     event.target.comment.value !== '') {
//         let commentInput = {
//             pic: document.querySelector('.profilepic').src,
//             name: event.target.name.value,
//             date: date,
//             comment: event.target.comment.value
//         };

//         comments.push(commentInput);
//     };

    // while (commentsSection.lastElementChild) {
    //     commentsSection.removeChild(commentsSection.lastElementChild)
    // }

//     comments.forEach(c => {
//         displayComments(c);
//     });

//     event.target.name.value = 'Enter name';
//     event.target.comment.value = 'Add a new comment';

