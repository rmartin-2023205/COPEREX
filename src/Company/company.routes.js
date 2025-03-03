import { Router } from "express";
import { add, listByCategory, listByYear, listFromAZ, listFromZA, update } from "./company.controller.js";

const api=Router()

api.post('/add',add)
api.put('/update/:id',update)
api.get('/byCategory/:categoryName',listByCategory)
api.get('/byTrajectory/:experience', listByYear)
api.get('/FromAToZ',listFromAZ)
api.get('/FromZToA',listFromZA)
export default api