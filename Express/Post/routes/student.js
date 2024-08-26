import express, { Router } from 'express';


const router = express.Router();


router.get('/all',(req,res)=> {
      res.send("All student")
})

router.post('/create',(req,res)=> {
      res.send("signed in student")
})

router.put('/update',(req,res)=> {
      res.send("update student id")
})

router.delete('/delete',(req,res)=> {
      res.send("remove student from db")
})

export default router;
