import express from "express";
import { userAddValidation, userUpdateValidation } from "../middleware/validation";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/app-controller";

const router = express.Router();

router.get("/",getAllUsers);
router.get("/:id",getOneUser);
router.post("/create",userAddValidation,createUser);
router.put("/update/:id",userUpdateValidation,updateUser);
router.delete("/delete/:id",deleteUser);

export default router;