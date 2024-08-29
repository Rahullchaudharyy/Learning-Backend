import express from 'express'
import {AllStudent,DeleteStudent,UpdatedStudent,CreateStudent,} from  '../controllers/student.js'

const router = express.Router();

router.get('/all',AllStudent)
router.post('/create',CreateStudent)
router.put('/update',UpdatedStudent)
router.delete('/delete',DeleteStudent)

// ON the place of the call back we used to write the our business logic inside the call back fucntiuon but now we have moved our business logic code in the folder called controllers and we are importing them into our this normal route file that makes easy to understand and also readable and not creating a messty . 


export default router ; 
