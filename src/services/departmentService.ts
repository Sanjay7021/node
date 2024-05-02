import deptModel from "../model/departmentModel"

export const createDepartment = async (deptName:string, description: string) => {
   const department = new deptModel({name:deptName,description:description});
   return await department.save();
};
