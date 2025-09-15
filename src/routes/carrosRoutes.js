import express from "express";
import { getAllCarros } from "../controllers/carrosController.js";

const router = express.Router();

router.get("/", getAllCarros);


export default router