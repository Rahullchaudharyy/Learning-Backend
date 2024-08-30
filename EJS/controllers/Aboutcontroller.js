
 import bodyParser from 'body-parser'

const AboutController = (req,res)=>{
    const {name,Age,Education} = req.body;
    res.send(`${name},${Age},${Education}`);
}

export default AboutController