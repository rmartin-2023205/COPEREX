import { Router } from "express";
import { Login } from "./user.controller.js";

const api=Router()

api.post('/login',Login)

export default api