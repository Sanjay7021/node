import { Request,Response,NextFunction } from "express";
import { treatement,viewAll } from "../services/treatementServices";
import treatementModel from "../model/treatmentModel";
import mongoose from "mongoose";

export const createTreatmentController = async (req:Request,res:Response,next:NextFunction) => {
    
    
    try{
        const patientID =Object(req.body.patientID);
        const docID= req.body.docID;
        const hAssisiId = req.body.assisID;
        const desease= req.body.desease;
        const dose = (req.body.dose);
        const treatementTime = new Date;
        const createdBy = Object(req.body.createdBy);
       const treatmentq =  await treatement(patientID,docID,hAssisiId,desease,dose,treatementTime,createdBy);    
        console.log(treatmentq);
        res.status(201).json(treatmentq);
    }catch(err){
        res.status(500).json({error:err});
    }
}

export async function getAllDetailsController(req:Request,res:Response,next:NextFunction){
    const findAll = await viewAll()
    res.status(200).send(findAll); 
}

export async function patientRecordByDocIdController (req:Request,res:Response,next:NextFunction) {
    const {id} = req.params;
    // let docID = id;
    //here we finding the patient record by doctor id so we have to tell docId = Id in find method so it match;
    try{
        const data =  await treatementModel.find({docID:id}).exec();
        console.log("Found",data);
        
        res.status(200).send(data);
    }catch(err){
        res.status(500).json({error:err});
    }
}

export async function patientMedicineRecordByIDController (req:Request,res:Response,next:NextFunction) {
    const {id} = req.params;
    // let docID = id;
    //here we finding the patient record by doctor id so we have to tell docId = Id in find method so it match;
    try{
        const data:any =  (await treatementModel.find({patientID:id}).select('dose'));
        // const dtat = data

        
        res.status(200).send(data);
    }catch(err){
        res.status(500).json({error:err});
    }
}


export async function patientdoctorsummaryController (req:Request,res:Response,next:NextFunction) {
   
    try{   
        console.log("insidee ");
        const data = await treatementModel.find().populate('docID').populate('hAssisID').populate('dose.drugID').populate('patientID');
        res.status(200).send(data);
        // const res1 = await treatementModel.aggregate().facet({
        //     books: [{ groupBy: '$Doctor' }]
        //   });
        const match = await treatementModel.aggregate([{$match:{patientID: new mongoose.Types.ObjectId('6634b6683e445bb61d587266')}}]);
        console.log(match);

        const mat =  treatementModel.aggregate( [
            { $group: { _id: "docID", myCount: { $sum: 1 } } },
            { $project: { _id: 0 } }
         ] )
    //    console.log(treatementModel.aggregate.match({department:{$in: ['opt']}}));
        console.log(mat);
        
    }catch(err){
        res.status(500).json({error:err});
    }

    
}

