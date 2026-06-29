const fs = require('fs');



// fs.writeFile("./data/message.txt", "Hello from Node fs!", "utf-8", (e) => {
//     if (e) return console.log(e);
//     console.log("File was created successfully");
// })



// console.log("start");

// fs.readFile("./data/message.txt", "utf-8", (e, data) => {
//     if (e) return console.log(e);
//     console.log(data);
// })

// console.log("end");




// fs.readFile("./data/not-exist.txt", "utf-8", (e, data) => {
//     if (e) return console.log("Could not read file");
//     console.log(data);
// })








// function readTextFile(filePath, cackallb){
//      fs.readFile(filePath, "utf-8", (e, data) => {
//     if (e) return cackallb(e);
//     cackallb(null, data);
// })
// }


// readTextFile('data/message.txt',(err, content) => {
//     if (err) {
//     console.log('Error:', err);
//     return;
//   }
//   console.log(content);
// });




// fs.appendFile('data/message.txt', "\nThis line was added later.", "utf-8",(e) => {
//     if (e) return console.log(e);
//     fs.readFile("data/message.txt", "utf-8",(e, data) => {
//         if (e) return console.log(e);
//         console.log(data);
//     });  
// })





// fs.writeFile("data/log.txt", "Log started.\n", "utf-8", (e) => {
//     if (e) return console.log(e);
//     fs.appendFile("data/log.txt", "First action completed\nSecond action completed\n", "utf-8", (e) => {
//         if (e) return console.log(e);
//         fs.readFile("data/log.txt", "utf-8", (e, data) => {
//             if (e) return console.log(e);
//             console.log(data);
//         })
//     })
// })





// fs.mkdir("./data/users", (e) => {
//     if (e) return console.log(`The file already exit, ${e}`);
//     console.log("Users folder created");
// })


// fs.writeFile("./data/users/user1.txt", "Name: David\nAge: 25", "utf-8", (err) => {
//     if (err) return console.log(err);
//     console.log("success created");
// })






// fs.readdir("./data", {recursive:true}, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);
// })




// function createFile(filePath, data, call) {
//     fs.writeFile(filePath, data, "utf-8", (err) => {
//         if (err) return call(err);
//         call(null);
//     })
// }

// createFile("./data/step1.txt", "Step 1 completed", (err) => {
//     if (err) return console.log(err);
//     console.log("The file step1 created successfully");
//     createFile("./data/step2.txt", "Step 2 completed", (err) => {
//         if (err) return console.log(err);
//         console.log("The file step2 created successfully")
//         createFile("./data/step3.txt", "Step 3 completed", (err) => {
//             if (err) return console.log(err);
//             console.log("The file step3 created successfully")
//         })
//     })

// })






// fs.readFile("./data/step1.txt", "utf-8", (err, dataStep1) => {
//     if (err) return console.log(err);
//     fs.readFile("./data/step2.txt", "utf-8", (err, dataStep2) => {
//         if (err) return console.log(err);
//         fs.readFile("./data/step3.txt", "utf-8", (err, dataStep3) => {
//             if (err) return console.log(err);
//             console.log(dataStep1, dataStep2, dataStep3);
//         })
        
//     })
// })






// fs.writeFile("./data/report-title.txt", "Daily Report", "utf-8", (err) => {
//     if (err) return console.log(err);
//     fs.writeFile("./data/report-body.txt", "Everything is working", "utf-8",(err) =>{
//         if (err) return console.log(err);
//         fs.readFile("./data/report-title.txt", "utf-8", (err, dataTitle) => {
//             if (err) return console.log(err);
//             fs.readFile("./data/report-body.txt", "utf-8", (err, dataBody) => {
//                 if (err) return console.log(err);
//                 fs.appendFile("./data/final-report.txt", `${dataTitle}\n${dataBody}`, "utf-8", (err) => {
//                     if (err) return console.log(err);
//                     fs.readFile("./data/final-report.txt", "utf-8",(err, dataFinal) => {
//                         if (err) return console.log(err);
//                         console.log(dataFinal);                        
//                     })
                    
//                 })
                
//             })
            
//         })
        
//     })
    
// }) 








fs.writeFile("./data/original.txt", "Original file content", "utf-8", (err) => {
    if (err) return console.log(err);
    fs.readFile("data/original.txt", 'utf-8', (err, dataOriginal) =>{
        if (err) return console.log(err);
        fs.writeFile("./data/copy.txt", dataOriginal, "utf-8", (err) => {
            if (err) return console.log(err);
            fs.readFile("./data/copy.txt", "utf-8", (err, dataCopy) => {
                if (err) return console.log(err);
                console.log(dataCopy);
            })
            
        })
        
    })
    
})








