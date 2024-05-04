import healthAssModel from "../model/healthAssistent"

export const createHealthAssistant = async (name:string, deptID: string, createdBy:string) => {
   const healthAsis = new healthAssModel({name,deptID,createdBy});
   return healthAssModel.insertMany(healthAsis);
};
