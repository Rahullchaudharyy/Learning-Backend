const HomeControll = (req,res)=>{
    const data = {
        name:"Rahul",
        userid:40,

    }
    res.render("index",data)
}


export default HomeControll