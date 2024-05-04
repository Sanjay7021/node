import { fetch, insertData } from "../database/dbOperation";
import { NextFunction, Request } from "express";

export async function view(req:Request,res:any,next:NextFunction){
    console.log(req.body.title);    
    insertData(req.body.title);
    // const data:any = await fetch();
    // res.send(data);
    res.redirect('/'); 
}

export async function viewAll(req:Request,res:any,next:NextFunction){
    const data = await fetch();
    res.send(data);
}