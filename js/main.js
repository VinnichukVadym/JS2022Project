fetch('http://jsonplaceholder.typicode.com/users')
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

            let a = document.createElement('a');
            a.href = `pages/user-details.html?user=${JSON.stringify(user)}`

            a.appendChild(btn);
            divUser.append(div, a)
            wrapper.appendChild(divUser);

        }

    })