
import { UserModel } from "../model/user";

export class UserDataServiceProvider {
  /**
     * save call for user
     * @param data  
     * @returns 
     */
  public static async createuser(data: any) {
    return UserModel.create(data);
}
}