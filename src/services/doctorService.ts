import docModel from "../model/doctorModel";

export const createDoctor = async (dName:string,deptID:string,createdBy:string) => {
   const newdoctor = new docModel({dName,deptID,createdBy});
   return docModel.insertMany(newdoctor);
};

