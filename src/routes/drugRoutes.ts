import express from 'express';
import { createDrugController } from '../controllers/drugController';

const app = express();

const router = express.Router();

router.post('/',createDrugController);

export default router;