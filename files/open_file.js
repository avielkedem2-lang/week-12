import { writeFile, readFile } from "fs/promises"


// async function write(students) {
//   try {
//     const jsonStr = JSON.stringify(students,null, 2)
//     await writeFile("firstFile.json", jsonStr)
//   } catch (error) {
//     console.log("error write") 
//   }
// }

// write([{id: 1, name: "avi", age: 23}])



async function read() {
  try { 
    const data = await readFile("firstFile.json" )
    const data1 = JSON.parse(data); 
    return data1;
    
  } catch (error) {
    console.log("error read") 
  }
}





// async function append(newStudent) {
//   try{
//     const students = await read()
//     students.push(newStudent)
//     write(students)
//   }catch (error){
//     console.log("error append");
//   }
// }
// // data.push({id:2, name: "dani", age: 43})
// // append({id: 3, name: "momo", age: 88})





// async function apdate(id, newage) {
//   try{
//     const students = await read()
//     const apdateStudent = students.findIndex((student) => {return student.id===id})
//     students[apdateStudent].age = newage
//     write(students)
//   }catch (error){
//     console.log("error apdate");
//   }
// }
// // apdate(3, 18)



// async function deleteStudent(id) {
//   try{
//     const students = await read()
//     const indexStudent = students.findIndex((student) => {return student.id===id})
//     students.splice(indexStudent, indexStudent)
//     write(students)
//   }catch(error){
//     console.log("error delete")
//   }
// }
// deleteStudent(2)
// let a = ["e",34, 3]
// console.log(a.splice(1,1));
// console.log(a);





