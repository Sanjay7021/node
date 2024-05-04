import drugModel from "../model/drugModel";

export const createDrug = async (drugName:string,usage:string,createdBy:string) => {
   const newdrug = new drugModel({drugName,usage,createdBy});
   return drugModel.insertMany(newdrug);
};
