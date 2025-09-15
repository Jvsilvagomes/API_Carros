import express from "express";
import { createCarros, getAllCarros, getCarrosById } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosById);
router.post("/", createCarros)


export default router