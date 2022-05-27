// document.querySelector('#btnLoad')
//     .addEventListener('click', async function(){
//         let response = await axios.get('items.txt');4
//         let fruits = response.data.split(',');
//         let fruitList = document.querySelector('#fruits');
//         for (let f of fruits) {
//             fruitList.innerHTML = fruitList.innerHTML + `<li>${f}</li>` 
//         }
//     })

// document.querySelector("#btnLoad")
//     .addEventListener('click', async function(){
        
//       let response  = await axios.get('items.txt');
//       let fruits = response.data.split(',');
//       // we find the DOM with #fruits
//       // and cache it into a variable
//       let fruitList = document.querySelector("#fruits");
//       for (let f of fruits) {
//           let liElement = document.createElement('li');
//           liElement.innerHTML = f;
//           fruitList.appendChild(liElement);
//       } 
//     })

document.querySelector("#btnLoad").addEventListener('click', async function(){
    let response  = await axios.get('items.txt');
    let fruits = response.data.split(',');
      // we find the DOM with #fruits
      // and cache it into a variable
      let fruitList = document.querySelector("#fruits");
      let elements = fruits.map(function(fruit){
          let liElement = document.createElement('li');
          liElement.innerHTML = fruit;
          return liElement;
      })
      for(let e of elements) {
          fruitList.append(e);
      }
})