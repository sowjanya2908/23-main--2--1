
import { Router } from "express";
import { UserController } from "../controllers/user";

const userController = new UserController();
const router: Router = Router();


router.post(
    "/user/adduser",
    userController.createuser1
  );

  export default router;