import patientModel from "../model/patientModel";

export const createPatient = async (pName:string,phone:number,email:string,createdBy:string) => {
   const newpatient = new patientModel({pName,phone,email,createdBy});
   return patientModel.insertMany(newpatient);
};
