document.querySelector('#load-image-btn')
    .addEventListener("click", async ()=>{
       let response =  await axios.get('artwork.json');
       console.log(response.data);

        let h2Element = document.createElement('h2');
        h2Element.innerHTML = response.data.title;

        let imageElement = document.createElement('img')
        imageElement.src = response.data.image_url;

        let artWorkDiv = document.querySelector('#artwork');
        artWorkDiv.appendChild(h2Element);
        artWorkDiv.appendChild(imageElement);

    })