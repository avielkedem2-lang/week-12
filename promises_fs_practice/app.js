// 1-6
// const fs = require("fs")
// 7-
const fs = require("fs/promises")

// 1
// function writeFileAsPromise(filePath,content){
//     return new Promise((res, rej)=> {
//         fs.writeFile(filePath, content, "utf-8", (err) => {
//             if (err) return rej(err)
//             res("file create successfully")
//         })
        
//     })
// }

// const write = writeFileAsPromise("./data/message.txt", "Hello World")
// write.then((v) => {
//     console.log(v);    
// }).catch((err) => {
//     console.log(err);
// })




// 2, 3
// function readFileAsPromise(filePath) {
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) return rej(err)
//             res(data.length)
//         })
//     })
// }


// const read = readFileAsPromise("./data/message.txt")
// read.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// })




// 4
// function appendFileAsPromise(filePath,content){
//     return new Promise((res, rej)=> {
//         fs.writeFile(filePath, content, "utf-8", (err) => {
//             if (err) return rej(err)
//             res(content)
//         })
        
//     })
// }

// const write = appendFileAsPromise("./data/step1.txt", "Step 1 done")
// write.then((v) => {
//     console.log(v);
//     appendFileAsPromise("data/step2.txt", "Step 2 done")
//     .then((val) => {
//         console.log(val);
//     })
// }).catch((err) => {
//     console.log(err);
// })




// 5
// function readFile(filePath){
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf-8",(err, data) => {
//             if (err) return rej(err)
//             res(data)
//         })
//     })
// }
// const file1 = readFile("./data/step1.txt")
// const file2 = readFile("./data/step2.txt")
// const file3 = readFile("./data/step3.txt")
// Promise.all([file1, file2, file3])
// .then((val) => {console.log(val);
// }).catch((err) => {console.log(err);
// })





// 6
// function appendFileAsPromise(filePath,content){
//     return new Promise((res, rej)=> {
//         fs.writeFile(filePath, content, "utf-8", (err) => {
//             if (err) return rej(err)
//             res(content)
//         })
//     })
// }
// const write = appendFileAsPromise("data/report-title.txt", "Daily Report")
// write.then((v) => {
//     appendFileAsPromise("data/report-body.txt", "Everything is working")
//     .then((val) => {
//         appendFileAsPromise("data/final-report.txt", `${v}\n${val}`)
//         .then((value) => {
//             console.log(value);
//         })
//     })
// }).catch((err) => {
//     console.log(err);
// })








// 7
// fs.readFile("./data/message.txt", "utf-8")
// .then((val) => {
//     console.log(val);
    
// }).catch((err) => {
//     console.log(err);
    
// })






// 8
// const file1 = fs.readFile("./data/step1.txt", "utf-8")
// .then((v) => {
//     fs.readFile("./data/step2.txt", "utf-8")
//     .then((val) => {
//         fs.readFile("./data/step3.txt", "utf-8")
//         .then((value) => {
//             console.log([v, val, value]);
            
//         })
//     })
    
// })
 




// 9
function createUser(userName){
    return fs.mkdir(userName, {recursive:true})
}

function writeProfile(userName, data){
    return fs.writeFile(userName, data, "utf-8")
}

function readProfile(userName){
    return fs.readFile(userName, "utf-8")
}


const createUserData = createUser("data/users")
.then((val) => {
    writeProfile("data/users/alice.txt", "name:alice\nage:33")
    .then((v) => {
        readProfile("data/users/alice.txt")
        .then((value) => {
            console.log(value);
        })
    })
})