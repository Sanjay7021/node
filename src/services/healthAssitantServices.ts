import healthAssModel from "../model/healthAssistent"

export const createHealthAssistant = async (deptName:string, description: string) => {
   const department = new healthAssModel({name:deptName,description:description});
   return await department.save();
};
