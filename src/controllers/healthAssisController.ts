import { Request,Response,NextFunction } from "express";
import { createHealthAssistant } from "../services/healthAssitantServices";

export const createHealthAssiController = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const name = req.body.name;
        const deptID= req.body.deptID;
        const createdBy = Object(req.body.createdBy);
        const healthAsis = await createHealthAssistant(name,deptID,createdBy);    
        console.log(healthAsis);
        res.status(201).json(healthAsis);
    }catch(err){
        res.status(500).json({error:err});
    }
}