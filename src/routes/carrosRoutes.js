import express from "express";
import { createCarros, deleteCarros, getCarrosById, getFilterCarro, updateCarros } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/:id", getCarrosById);
router.post("/", createCarros);
router.delete("/:id", deleteCarros);
router.put("/:id", updateCarros);
router.get("/", getFilterCarro)

export default router