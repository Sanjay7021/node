import { createDepartment } from "../services/departmentService";
import { Request,Response,NextFunction } from "express";

export const createDepartmentController = async (req:Request,res:Response,next:NextFunction) => {
    try{
        console.log("inside");
        
        const deptName = (req.body.deptName);
        const desc = req.body.desc;
        console.log(deptName,desc);
        
        const department = await createDepartment(deptName,desc);    
        console.log("ehll"+department);
        res.status(201).json(department);
    }catch(err){
        res.status(500).json({error:err});
    }
}