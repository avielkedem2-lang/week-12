// 1-3
const fs = require('fs');
// 4-
const fsPromises = require('fs').promises;



// 1
// fs.readFile('input.txt', 'utf8', function(err, data) {
//     if (err) return console.log("error in the reading:",err);
//     console.log("data of the file:",data);  
// })



// 2
// fs.writeFile("output.txt", "create successfully by node.js!", "utf-8",(err) => {
//     if (err) return console.log(err);
//     console.log("The file create successfully");
// })




// 3
// fs.readFile("input.txt", "utf-8", (err, dataInput) => {
//     if (err) return console.log(err);
//     fs.writeFile("output_upper.txt", dataInput.toUpperCase(), (err) => {
//         if (err) return console.log(err);
//         console.log("all finish successfully");
//     })
    
// })




// 4
// fsPromises.readFile("input.txt", "utf-8")
// .then((res) => {console.log(res);
// })
// .catch((rej) => {console.log(rej);
// })



// 5
// fsPromises.readFile("input.txt", "utf-8")
// .then((res) => {
//     return fsPromises.writeFile("output_upper.txt", res.toUpperCase())
//     .then((res) => {console.log("all finish successfully")}
//     )
// })
// .catch((rej) => console.log(rej)
// )





// 6
// const inp =  fsPromises.readFile('input.txt', 'utf8')
// const out =  fsPromises.readFile('output.txt', 'utf8')

// Promise.all([inp, out])
// .then((res) => {console.log(res.map((val) => {return val.length}));
// })
// .catch((rej) => {console.log(rej);
// })







// שאלות הבנה
// 1. fs.readFile we need to do callback, and in fsPromise we don't need callback because teh Promises
// 2. because in callback hell they need each other 
// 3. The advantage of then.() then.() is When I catch errors, it's more efficient and it's also more organized.
// 4. If we forgetting return, not all of the errors inter into the catch