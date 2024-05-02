import { createDepartment } from "../services/departmentService";
import { Request,Response,NextFunction } from "express";

export const createDepartmentController = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const deptName = 'Operation theater complex (OT)';
        const desc = ' facility within a hospital where surgical operations are carried out in an aseptic environment.';
        const department = await createDepartment(deptName,desc);    
        console.log(department);
        res.status(201).json(department);
    }catch(err){
        res.status(500).json({error:err});
    }
}