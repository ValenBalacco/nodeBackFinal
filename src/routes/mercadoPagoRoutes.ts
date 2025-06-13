import { Router } from "express";
import { crearPreferencia } from "../controllers/mercadoPagoController";

const router = Router();

router.post("/crear-preferencia", crearPreferencia);

export default router;