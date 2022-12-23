fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let [wrapper] = document.getElementsByClassName('wrapper');

        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('divUser')

            let div = document.createElement('div');
            div.innerText = `${user.id}. ${user.name} `

            let btn = document.createElement('button');
            btn.classList.add('btn')
            btn.innerText = 'User Details';

            btn.onclick = () => location.href = `pages/user-details.html?user=${JSON.stringify(user)}`

            divUser.append(div, btn);
            wrapper.appendChild(divUser);

        }

    })
