import { Request,Response,NextFunction } from "express";
import { createHealthAssistant } from "../services/healthAssitantServices";
import { createPatient } from "../services/patientService";

export const createPatientController = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const name = req.body.name;
        const phone= req.body.phone;
        const email = req.body.email;
        const createdBy = Object(req.body.createdBy);
        const patient = await createPatient(name,phone,email,createdBy);    
        console.log(patient);
        res.status(201).json(patient);
    }catch(err){
        res.status(500).json({error:err});
    }
}