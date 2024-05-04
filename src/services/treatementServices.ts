import treatementModel from "../model/treatmentModel";

export const treatement = async (patientID:string,docID:string[],hAssisID:string[],desease:string,dose:[],treatmentTime:Date,createdBy:string) => {
   const treatement = new treatementModel({patientID,docID,hAssisID,desease,dose,treatmentTime,createdBy});
   return treatementModel.insertMany(treatement);
};

export const viewAll = async () => {
   const viewData = await treatementModel.find({});
   return viewData
}