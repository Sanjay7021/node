import deptModel from "../model/departmentModel"

export const createDepartment = async (name:string, description: string) => {

   const department =  new deptModel({name,description});
   console.log("department",department);
   
   return  deptModel.insertMany(department);
};
