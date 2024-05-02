import {Schema,Document, model} from 'mongoose';


const treatementModel = new Schema({
    patientID : {
        type:String,
        required:[true,'patientId required']
    },
    docID:[{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:[true, 'docID is missing']
    }],
    hAssisID:[{
        type:Schema.Types.ObjectId,
        ref:'HealthAssitent',
        required:[true, 'Assistant id is missing']
    }],
    desease:{
        type:String,
        required:[true,'enter desease of patient']
    },
    dose:[
        {drugID:{
            type:Schema.Types.ObjectId,
            ref:'drug',
            required:[true,'drug id missing']
        },
        type:{
            enum:{
                values:['morning','afternoon','evening','all'],
                default:'all',
                message: '{VALUE} is not supported'
            }
        }
    }
    ],
    treatmentTime:{
        type:Date,
    }
    ,
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
}) 