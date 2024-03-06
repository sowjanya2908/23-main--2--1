import { Response, NextFunction, Request, response } from "express";
import  {  doctorDataServiceProvider } from "../services/doctor";

export class DoctorController {

      /**
     * save call for doctor
     * @param req
     * @param res
     * @param next
     * @returns
     */
      public async createuser1(req: Request, res: Response, next: NextFunction) {
        try {
            let data =req.body
            const doctordata = await doctorDataServiceProvider.createdoctor(data);
            if(doctordata){
            res.status(200).json({
                success: true,
                message: 'doctor created successfully',
                data: doctordata
            });
        }
        else{
            res.status(400).json({
                success: false,
                message: 'doctor not created!'
            });
        }
        } catch (err) {
            next(err);
        }
    }
}