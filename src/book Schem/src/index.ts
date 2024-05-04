import express, {json} from 'express'
import userModel from './model/userModel';
const app = express();
import bodyParser from 'body-parser';
import path from 'path';
import bookModel from './model/bookModel';

var adminurl = require('./routes/admin');
var userUrl = require('./routes/product');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', 'views');
//we can add filtering suppose my admin routes must start with /admin/--- then i simply provide admin inside app.use('/admin');

async function addData(){
    const data = new userModel({
        userName:'sasdy',
        role:'seller',
        email:'saanjsas2dsdsy123@gasmai.com',
        phone:'9212332688',
        address:"dsfasjfasfjadfa 12327928489",
    })


    const bookdata = new bookModel({
        bookName:'mongo',
        author:'snajay',
        edition:2021,
        price:2001,
        type:'sell',
        category:'Horror',
     
    })
    // await bookdata.save();
    await data.save();
} 

// addData();

async function update_data(){

    const updateD = await bookModel.findById('6630e0541fe3ae3477f52f4d').exec();
    if(updateD){

        updateD.bookName = 'MonogoDB';
        await updateD.save();
    }
    // console.log(book_info);
}
// update_data();


//---> all admin routes start with the /admin routes.
app.use('/admin',adminurl);

app.use(userUrl);

//handling 404 error;

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);   