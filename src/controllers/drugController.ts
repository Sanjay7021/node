import { Request,Response,NextFunction } from "express";
import { createDrug } from "../services/drugServices";

export const createDrugController = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const name = req.body.name;
        const usage= req.body.usage;
        const createdBy = Object(req.body.createdBy);
        const drug = await createDrug(name,usage,createdBy);    
        console.log(drug);
        res.status(201).json(drug);
    }catch(err){
        res.status(500).json({error:err});
    }
}