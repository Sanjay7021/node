import {Schema, model, Document} from 'mongoose';

export interface IDoc extends Document{
    dName:string,
    deptID:Object,
    createdAt:Date,
    createdBy:Object,
    updatedAt:Date,
    modifyBy:Object
}

const docSchema = new Schema<IDoc>({
    dName :{
        type:String,
    },
        deptID:{
            type:Schema.Types.ObjectId,
            ref:'Department',
            required:[true,'please provide deptID']
        }
        ,
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
});

const docModel  = model<IDoc>('Doctor',docSchema);
export default docModel;
