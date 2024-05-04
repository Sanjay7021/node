import {Document, Schema, model} from 'mongoose';
import docModel from './doctorModel';


export interface IDpt extends Document{
    name:string,
    description?: string,
    createdAt:Date,
    createdBy:Object,
    updatedAt:Date,
    modifyBy:Object,
   
}

const deptSchema = new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    description:{
        type:String
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
});


deptSchema.pre('save', function (next) {
    this.updatedAt = new Date;
    this.modifyBy = Object('663486c4e5b8561bb62821ce');
})
const deptModel = model<IDpt>('Department',deptSchema);
export default deptModel;