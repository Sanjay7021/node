import express from 'express';

import path from 'path';

const app = express();
const router = express.Router();
app.use(express.json());

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../' ,'views','products.html'));
})

module.exports = router;