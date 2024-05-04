import {Schema,Document, model} from 'mongoose';


const treatementSchema = new Schema({
    patientID : {
        type:Schema.Types.ObjectId,
        ref:'patient',
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
            type:String,
            enum:{
                values:['morning','afternoon','evening','all'],
                message: 'is not supported'
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
},{timestamps:true}) 


treatementSchema.pre('save', function (next) {
    this.updatedAt = new Date;
    this.modifyBy = Object('663486c4e5b8561bb62821ce');
})


const treatementModel = model('treatement',treatementSchema);
export default treatementModel;