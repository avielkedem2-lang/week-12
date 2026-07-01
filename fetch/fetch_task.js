
// 1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => {return res.json()})
// .then((v) => {console.log(v);
// })
// .catch((err) => {console.log(err);
// })

const { AsyncLocalStorage } = require("async_hooks");
const { title } = require("process");



// 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
// .then((res) => {return res.status})
// .then((v) => {console.log("not fond" ,v);
// })
// .catch((err) => {console.log(err)});




// 3
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {return res.json()})
// .then((val) => {console.log(val.forEach((obj) => {
//     console.log(obj.title);
// }));
// })
// .catch((err) => {console.log(err);
// })




// 4
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "post",
//     body: JSON.stringify({
//         title: "new title",
//         body: "new body",
//         userId: "2222" 
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// })
// .then((res) => {return res.json()})
// .then((val) => {console.log(val);
// })
// .catch((err)=> {console.log(err);
// })





// 5
async function getUserById(id) {
    try{
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(await data.json());
    }catch (error){
        console.log("error");
    }
}
getUserById(1);






