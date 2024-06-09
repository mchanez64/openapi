import { BaseService } from "./baseService";
import { UserType } from "../models/userModel";

class UserService extends BaseService {
  
    public constructor() {
        super()
    }
  
    public async createUser(request, user: UserType) {
        return await super.post(request, '/user', user);
    }
}

export const userService = new UserService();