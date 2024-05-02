import {Schema, model,Document} from 'mongoose';

export interface IPatient extends Document{
    pName:string
    phone:number
    email:string
    createdAt:Date
    createdBy:Object
    updatedAt:Date
    modifyBy:Object
    // docID:Object[],
    // hAssisID:Object[],
    // dose:[
    //     drugID:string,
    //     type:string
    // ]
}

const patientSchema:Schema = new Schema <IPatient>({
    pName:{
        type:String,
        required:[true,'patient name is missing']
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'admin'
    },
    updatedAt:{
        type:Date
    },
    modifyBy:{
        type:Schema.Types.ObjectId,
        ref:'admin'
    }
    
}) 

const patientModel = model<IPatient>('patient',patientSchema);
export default patientModel;