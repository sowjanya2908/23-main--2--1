import { Router } from "express";
import { DoctorController } from "../controllers/doctor";
const doctorController = new DoctorController();
const router: Router = Router();

router.post(
    "/doctor/adddoctor",
    doctorController.createuser1
  );
  export default router;