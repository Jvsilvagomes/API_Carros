import express from "express";
import { createCarros, deleteCarros, getAllCarros, getCarrosById } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosById);
router.post("/", createCarros)
router.delete("/:id", deleteCarros)

export default router