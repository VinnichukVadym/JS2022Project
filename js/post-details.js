let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('post'));

let [wrapper] = document.getElementsByClassName('wrapper');

let divPost = document.createElement('div');
divPost.classList.add('divPost')
wrapper.appendChild(divPost);

let title = document.createElement('div');
title.innerText = 'Comments';
title.classList.add('title')
wrapper.appendChild(title)

for (const postKey in post) {

    if (postKey === 'body') {
        post[postKey] = post[postKey].split('\n').join(' ');
    }

    let div = document.createElement('div');
    div.innerHTML = `<span class="key">${postKey}:</span> ${post[postKey]}`

    divPost.appendChild(div);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let divComments = document.createElement('div');
        divComments.classList.add('divComments');

        wrapper.appendChild(divComments);

        for (const comment of comments) {
            let divComment = document.createElement("div");
            divComment.classList.add('divComment');

            for (const commentKey in comment) {
                let div = document.createElement("div");
                div.innerHTML = `<b>${commentKey}:</b> ${comment[commentKey]}`
                divComment.appendChild(div)
            }
            divComments.appendChild(divComment);
        }


    })
