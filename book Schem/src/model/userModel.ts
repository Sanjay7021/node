import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,'UserName is required'],
        vaidate:{
            validator: function (v:string){
                return /[a-zA-Z]{3}/.test(v);
            },
            message: (props:{value:string})=> "minimum three char required"
        }
    },
    role:{
        type:String,
        required:[true,'role is required'],
        enum:{
            values:['seller','buyer'],
            message: '{VALUE} is not supported'
        }
    },
    email:{
        type:String,
        required:[true,'email id is required'],
        unique:true,
        validate:{
            validator: function (v:any){
                return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v);
            },
            message: (props:{value:String}) => 'email id is not valid'
        }
    },
    phone:{
        type:Number,
        unique:true,
        required:[true,'phone no is required'],
        validate:{
            validator: function (v:any){
                return /[0-9]{10}/.test(v);
            },
            message:(props:{value:String})=> 'Phone no must be 10 digits long'
        }

    },
    address:{
        type:String,
        required:[true,'address is required'],
        min:[10,'at least you have to provide your city name and pincode']
    },
    createdAt:{
        type:Date,
        required:[true,'please set created date'],
        default:new Date(Date.now())
    },
    updatedAt:{
        type:Date
    }
});



userSchema.pre('save', function (next) {
    this.updatedAt = new Date;
    next();
})

const userModel = model('users',userSchema);

export default userModel;