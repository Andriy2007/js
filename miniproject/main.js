let container = document.getElementsByClassName('users')[0];
document.body.append(container)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
            let menu = document.createElement('div');
            container.append(menu)

            let userIdDiv = document.createElement('div');
            userIdDiv.innerText = `id - ${userItem.id}`;

            let userNameDiv = document.createElement('div');
            userNameDiv.innerText = `name - ${userItem.name}`;

            let link = document.createElement('a');
            link.innerText = 'details';
            link.href = `user-details.html?id=` + userItem.id;

            menu.append(userIdDiv, userNameDiv, link)

            container.style.display = 'flex'
            container.style.height = '100%'
            container.style.width = '500px'
            container.style.marginLeft = '400px'
            container.style.columnGap = '40px'
            container.style.flexWrap = 'wrap'

            menu.style.width = '220px'
            menu.style.height = '170px'
            menu.style.background = 'silver'
            menu.style.boxSizing = 'border-box'
            menu.style.display ='flex'
            menu.style.flexDirection = 'column'
            menu.style.justifyContent = 'center'
            menu.style.textAlign = 'center'
            menu.style.marginTop = '20px'

        }
    })