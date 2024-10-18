
const AsynchHandler = (requestHandler)=>{
   return (req,res,next)=>{
     Promise.resolve(requestHandler(req,res,next)).catch(err=>next(err))
   }
}  



export {AsynchHandler}

// So this is the function can be use in the handling the routes fucntion and it resuce the 
// code of try catch 




