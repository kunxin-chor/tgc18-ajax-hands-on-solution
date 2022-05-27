// document.querySelector("#load-btn")
//     .addEventListener('click', function(){

//         // the following code is sequential
//         // axios.get('file1.txt').then(function(response){
//         //     console.log(response.data);
//         // }).then(function(){
//         //     axios.get('file2.txt').then(function(response){
//         //         console.log(response.data);
//         //     })
//         // })

//         let request1 = axios.get('file1.txt');
//         let request2 = axios.get('file2.txt');
//         // axios.all can takes in as many arguments as you want
//         // or you can pass an array of requests
//         axios.all(request1, request2).then(function(res1, res2){
//             console.log(res1.data);
//             console.log(res2.data);
//         })
//     })

// document.querySelector("#load-btn")
//     .addEventListener('click', async function(){
//         let request1 = axios.get('file1.txt');
//         let request2 = axios.get('file2.txt');

//         let response1 = await request1;
//         let response2 = await request2;

//         console.log(response1.data);
//         console.log(response2.data);

//         // all response.data will be a string if
//         // it is not a JSON
//         document.querySelector('#content')
//             .innerHTML = response1.data + response2.data;

//     })

document.querySelector("#load-btn").addEventListener('click', async function(){
// let request1 = axios.get('file1.txt');
// let request2 = axios.get('file2.txt');
// let responses = await axios.all(request1, request2)

    let responses = await axios.all(
        [axios.get('file1.txt'), axios.get('file2.txt')]);

        console.log(responses);
});