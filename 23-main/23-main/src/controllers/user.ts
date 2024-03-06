import { Response, NextFunction, Request, response } from "express";
import  { UserDataServiceProvider } from "../services/user";


export class UserController {


      /**
     * save call for user
     * @param req 
     * @param res 
     * @param next 
     * @returns 
     */
      public async createuser1(req: Request, res: Response, next: NextFunction) {
        try {
            let data =req.body
            const userdata = await UserDataServiceProvider.createuser(data);
            if(userdata){
            res.status(200).json({
                success: true,
                message: 'user created successfully',
                data: userdata
            });
        }
        else{
            res.status(400).json({
                success: false,
                message: 'user not created!'
            });
        }
        } catch (err) {
            next(err);
        }
    }

}