import express from "express";
import { createCarros, deleteCarros, getAllCarros, getCarrosById, updateCarros } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosById);
router.post("/", createCarros);
router.delete("/:id", deleteCarros);
router.put("/:id", updateCarros);

export default router