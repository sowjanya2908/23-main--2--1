import {DoctorModel} from "../model/doctor";


export class doctorDataServiceProvider {
  /**
     * save call for doctor
     * @param data  
     * @returns
     */
  public static async createdoctor(data: any) {
    return DoctorModel.create(data);
   }
   public static async GetallDoctors(){ 
      return DoctorModel.find();
    }
   
}