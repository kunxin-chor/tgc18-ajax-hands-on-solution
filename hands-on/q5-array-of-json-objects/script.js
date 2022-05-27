// document.querySelector('#load-users-btn')
//     .addEventListener('click', async function(){
//         let r = await axios.get('users.json');
//         let users = r.data.users;
//         let allUsers = document.querySelector('#all-users');
//         for (let u of users) {
//             allUsers.innerHTML += `
//                 <ul>
//                      <li>First Name: ${u.firstName}</li>
//                      <li>Last name: ${u.lastName}</li>
//                      <li>Email: ${u.emailAddress}</li>
//                 <ul>
//             `
//         }
//     })

// function createFirstNameElement(firstName) {
//     let li = document.createElement('li');
//     li.innerHTML = "First Name: " + firstName;
//     return li;
// }

// function createLastNameElement(lastName) {
//     let li = document.createElement('li');
//     li.innerHTML = "Last Name: " + lastName;
//     return li;
// }

// function createEmailElement(email) {
//     let li = document.createElement('li');
//     li.innerHTML = "Email: " + email;
//     return li;
// }

// document.querySelector('#load-users-btn').addEventListener('click', async function(){
//     let r = await axios.get('users.json');
//         let users = r.data.users;
//         let allUsers = document.querySelector('#all-users');
//         for (let u of users) {
//             let ulElement = document.createElement('ul');
            
//             let firstNameElement = createFirstNameElement(u.firstName);
//             ulElement.appendChild(firstNameElement);

//             let lastNameElement = createLastNameElement(u.lastName);
//             ulElement.appendChild(lastNameElement);

//             let emailElement  = createEmailElement(u.emailAddress);
//             ulElement.appendChild(emailElement);

//             allUsers.appendChild(ulElement);
//         }
// })

document.querySelector('#load-users-btn').addEventListener('click', async function(){
    let response = await axios.get('users.json');  
    let allUsers = document.querySelector('#all-users');
    for (let u of response.data.users) {
        let ul = document.createElement('ul');
        ul.innerHTML = `
        <li>First Name: ${u.firstName} </li>
        <li>Last Name:  ${u.lastName}</li>
        <li class="email" data-email=${u.emailAddress}>Email: ${u.emailAddress} </li>`

        ul.addEventListener("click", function(){
            alert("Selected " + u.firstName + " " + u.lastName)
        })

        ul.querySelector('.email').addEventListener('click', function(e){
            e.stopPropagation();
            alert("email = " + u.emailAddress);

            console.log(e.target.dataset.email)
        }) 

        allUsers.appendChild(ul);
    }
})