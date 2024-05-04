import mongoose from 'mongoose';

import Blog from '../model/Schema';

mongoose.connect("mongodb://localhost:27017/user").then(result =>{
    console.log('connected');
});

export async function insertData(newtitle:string){
   if(newtitle){
    const blog = new Blog({
        title:String(newtitle),
        createdAt:new Date
    })

    await blog.save().then (result=>{
        console.log('inserted');
        
    });
   }
}

export async function fetch(){
    const data = await Blog.find({});
    return data;
}

export async function searchById(id:string){
    const data = await Blog.findById(id);
    return data;
}