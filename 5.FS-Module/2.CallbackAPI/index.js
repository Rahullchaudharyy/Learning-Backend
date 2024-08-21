import * as fs from 'fs'

fs.mkdir("E:\\FSMODULE",(error
)=>{
    if(error) throw error;
    console.log("Directory created...");
})

