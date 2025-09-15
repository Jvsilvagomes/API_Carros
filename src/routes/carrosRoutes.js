import express from "express";
import { getAllCarros, getCarrosById } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);
router.get("/:id", getCarrosById);



export default router