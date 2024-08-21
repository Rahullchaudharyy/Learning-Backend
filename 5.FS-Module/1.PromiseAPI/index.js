import * as fs from "fs/promises";

// Creating dir / folder

// try{
//     await fs.mkdir('E:\\BackendPath\\NewCourse\\nodejs',{recursive:true})
//     console.log("Folder Created...")

// }catch{
//    console.log("There is a problem to Creating Folder")
// }

// How to read the folder 


// try{
//    let files =  await fs.readdir('E:\\BackendPath\\NewCourse\\nodejs')
//    for (const file of files) {
//      console.log(file)
//    }

// }catch(error){
//    console.log("There is a problem to reading Folder",error)
// }


// How to remove dir  {It must be empty }

try{
    await fs.rmdir('E:\\BackendPath\\NewCourse')
    console.log("Folder delted...")

}catch(error){
   console.log("There is a problem to Creating Folder",error)
}