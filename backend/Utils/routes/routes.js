import express from "express";
import { checkEmail, createUser, getAllUsers, upload, loginUser} from "../controller/user.controller.js";
const route = express.Router();

route.post("/createUser", upload.single('profile'), createUser);

route.post("/checkEmail", checkEmail);

route.get("/getAllUsers", getAllUsers);

route.get("/LoginUser", loginUser);

export default route;
