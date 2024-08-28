import express, { Router } from 'express';


const router = express.Router();


router.get('/all',(req,res)=> {
      res.send("All teacher")
})

router.post('/create',(req,res)=> {
      res.send("signed in teacher")
})

router.put('/update',(req,res)=> {
      res.send("update teacher id")
})

router.delete('/delete',(req,res)=> {
      res.send("remove teacher from db")
})

export default router;


// Hey I jaut change the things so that i can cheak that is it working or not 
