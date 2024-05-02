import express from 'express';

const app = express();

const router = express.Router();

router.get('/',function (req,res,next){
    res.send('doctor');
})

export default router;