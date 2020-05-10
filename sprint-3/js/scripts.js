const apiBaseURL = 'https://project-1-api.herokuapp.com/';
const apiKey = '4e618b64-84d4-45ac-9e8e-599621afb0f4';
const form = document.querySelector('.comments__form');
const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
};


const getComments = () => {
    axios.get(`${apiBaseURL}comments?api_key=${apiKey}`)
    .then(res => {
        res.data.forEach(response => {
            displayComments(response);
        })
    })
    .catch(error => {
        console.log(error);
    });
};

getComments();

let commentContainer = document.querySelector('.comments__container');

const displayComments = (response) => {
   
        let c = response;

        let commentCard = document.createElement('div');
        commentCard.classList.add('comments__card');
    
        let commentItem = document.createElement('div');
        commentItem.classList.add('comments__item');
    
        let pic = document.createElement('img');
        pic.classList.add('comments__pic');
        pic.src = '../assets/image/asia.jpg';
    
        let commentList = document.createElement('ul');
        commentList.classList.add('comments__list');
    
        let name = document.createElement('li');
        name.classList.add('comments__name');
        name.innerText = c.name;
    
        let d = new Date(c.timestamp);
        let dateItem = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    
        let date = document.createElement('li');
        date.classList.add('comments__date');
        date.innerText = dateItem;
    
        let comment = document.createElement('p');
        comment.classList.add('comments__text');
        comment.innerText = c.comment;

        commentList.appendChild(name);
        commentList.appendChild(date);
        commentItem.appendChild(commentList);
        commentItem.appendChild(comment);
        commentCard.appendChild(pic);
        commentCard.appendChild(commentItem);
        commentContainer.appendChild(commentCard);
};

document.addEventListener('submit', e => {
    e.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;

    axios.post(`${apiBaseURL}comments?api_key=${apiKey}`, {
        'name': name,
        'comment': comment
    }, headers)
    .then(() => {
        while (commentContainer.lastElementChild) {
            commentContainer.removeChild(commentContainer.lastElementChild)
        }
    })
    .then(getComments)
    .catch(error => {
        console.log(error);
    });

    event.target.name.value = '';
    event.target.comment.value = '';
    
});