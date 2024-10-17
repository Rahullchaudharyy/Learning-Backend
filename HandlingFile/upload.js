const multer = require('multer')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const Filename = Math.floor(Math.random() * 10)
      cb(null,Filename + '-' + file.originalname)
    }
})



const upload = multer({storage:storage})

module.exports = upload