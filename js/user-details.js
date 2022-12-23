let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('user'));

let address = user.address;
let company = user.company;
delete user.address;
delete user.company;
user = {...user, address, company};

let [wrapper] = document.getElementsByClassName('wrapper');

let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Post of Current User';

let userDetails = document.createElement('div');
userDetails.classList.add('userDetails');
wrapper.appendChild(userDetails);

showUserDetails(user);

wrapper.appendChild(btn);

btn.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let divPosts = document.createElement('div');
            divPosts.classList.add('divPosts');
            wrapper.appendChild(divPosts);

            for (const post of posts) {
                let div = document.createElement('div');
                div.classList.add('divPost');
                div.innerHTML = `<div>ID: ${post.id}.</div> Title: ${post.title} `;

                let button = document.createElement('button');
                button.classList.add('btnPostDetails');
                button.innerText = 'Post Details';

                button.onclick = () => location.href = `../pages/post-details.html?post=${JSON.stringify(post)}`;

                div.appendChild(button);
                divPosts.appendChild(div);
            }
        })
    btn.style.display = 'none';
}

function showUserDetails(user, classKey = 'item') {

    for (const userKey in user) {

        let div = document.createElement('div');
        div.innerHTML = `<div class="objTitle">${userKey.toUpperCase()}</div>`;

        if (typeof user[userKey] !== 'object') {
            div.innerHTML = `<b class="${classKey}">${userKey.toUpperCase()}:</b> ${user[userKey]}`;
            userDetails.append(div);

        } else {
            userDetails.appendChild(div);
            showUserDetails(user[userKey], 'objInfo');
        }
    }
}






