const express = require('express')
const fs = require('fs')
const app = express ();
const port = 3000 ; 
const path = require('path')

const upload = require('./upload.js')

app.post('/upload',upload.single('file'),(req,res)=>{
    // res.redirect('/')
    // res.send(alert("File uploaded successfully !!"))
    res.send("File uploaded successfully")
    // res.json({message:'File uploaded successfully!'})
})
// app.use('/uploads', express.static('uploads'));

// app.get('/',(req,res)=>{
//     fs.readdir(path.join(__dirname, 'uploads'),(err,files)=>{
//         if (err) {
//             return res.status(500).send('Error reading files');
//           }
       
//           let fileImages = files.map(file => `<img style="height: 200px;" src="/uploads/${file}" alt="${file}">`).join('');
//           res.send(`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Uploaded Files</title>
//             </head>
//             <body>
//               <h1>File Upload</h1>
//               <form action="/upload" method="POST" enctype="multipart/form-data">
//                 <input type="file" name="file" required>
//                 <button type="submit">Upload</button>
//               </form>
//               <div>
//                 <h1>You have uploaded these images</h1>
//                 ${fileImages}
//               </div>
//             </body>
//             </html>
//           `);
//     })
// })

app.listen(port,()=>{
  console.log(`Server is started on the ${port}`)
})