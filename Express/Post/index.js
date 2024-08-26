import express from "express";

const app = express();

// app.get('/student',(req,res)=>{
//     res.send('All the students')
// })
// app.post('/student',(req,res)=>{
//     res.send('Add new students')
// })
// app.put('/student',(req,res)=>{
//     res.send('Update the students')
// })
// app.delete('/student',(req,res)=>{
//     res.send('delete the students')
// })

 // Instead of the the code we have written in the top we can write like this :- 
 

app.route("/student").get((req, res) => res.send("All students"))
.post((req,res)=>res.send("Add student"))
.put((req,res)=>res.send("Update student"))
.delete((req,res)=>res.send("delete student"))

app.listen(3000, () => {
  console.log("Server Started Now!!!");
});
