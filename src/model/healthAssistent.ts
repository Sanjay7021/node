import {Schema, model, Document} from 'mongoose';

export interface IHealthAssi extends Document {
    name:string,
    deptID:Object,
    createdAt:Date,
    createdBy:Object,
    updatedAt:Date,
    modifyBy:String
}

const healthAssSchema = new Schema<IHealthAssi>({
    name : {
        type:String,
        required:[true,'name is required']
    },
    deptID:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:[true,'dept id is missing']
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
        type:Date,
        
    },
    modifyBy:{
        type:Schema.Types.ObjectId,
        ref:'admin'
    }
}) 

healthAssSchema.pre('save',function (next){
    this.modifyBy = Object('663486c4e5b8561bb62821ce');
    this.updatedAt = new Date;
    next();
});

const healthAssModel = model<IHealthAssi>('HealthAssitent',healthAssSchema);
export default healthAssModel;