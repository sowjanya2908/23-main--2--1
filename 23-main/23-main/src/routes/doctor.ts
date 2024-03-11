import { Router } from "express";
import { DoctorController } from "../controllers/doctor";

const router: Router = Router();

router.post(
    "/doctor/adddoctor",
    DoctorController.createuser1
  );
  router.get(
    "/user/GetDoctorList",
    DoctorController.GetDoctorList
  );
  export default router;