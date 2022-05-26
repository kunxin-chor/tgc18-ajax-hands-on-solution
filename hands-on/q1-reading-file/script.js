let button = document.querySelector('#load-btn');
button.addEventListener('click', async function(){
    let response = await axios.get('contact.txt');
    console.log(response.data);
    let div = document.querySelector('#content');
    // div.innerHTML = response.data;
    div.innerText = response.data;
})