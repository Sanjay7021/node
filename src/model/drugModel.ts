import { timeStamp } from 'console';
import {Schema, model, Document} from 'mongoose';

export interface IDrug extends Document{
    drugName:string,
    usage:string,
    createdAt:Date,
    createdBy:Object,
    updatedAt:Date,
    modifyBy:Object
}

const drugSchema = new Schema<IDrug>({
    drugName:{
        type:String,
        required:[true,'drug name is required']
    },
    usage:{
        type:String,
        required:[true,'please provide usage']
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'doctor'
    },
    updatedAt:{
        type:Date
    },
    modifyBy:{
        type:Schema.Types.ObjectId,
        ref:'doctor'
    }
},{timestamps:true})

const drugModel = model('drug',drugSchema);
export default drugModel;