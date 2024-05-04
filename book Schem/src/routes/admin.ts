import express from 'express';
import path from 'node:path/posix';
import { viewProduct } from '../middleware/viewProduct';
import bodyParser from 'body-parser';
import { view, viewAll } from '../controller/controllers';
import { searchById } from '../database/dbOperation';
const app = express();
const router = express.Router();

let obj = [{id:1,name:"sanjay"},{id:2,name:"jeel"}];

router.get('/addCart',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-products.html'));
})

app.use(bodyParser.urlencoded({ extended: false }));
router.post('/product',view);

router.post('/hello',function (req,res,next){
    res.send({id:1,name:"snjawerwery"});
    let data = {id:req.body.id,name:req.body.name};
    console.log("post")
    console.log(data);
})


router.get('/view/all/products',viewAll);


router.get('/viewProduct/:id',viewProduct,async function (req,res,next){

      const id = req.params.id;
    const search_result = await searchById(id);
    // let name = obj.filter((item)=> item.id == parseInt(id))[0].name;
    res.send(`Welcome back: ${search_result?.title}`);
    res.end();
})

module.exports = router;