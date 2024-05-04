import express from 'express';
import { createHealthAssiController } from '../controllers/healthAssisController';

const app = express();

const router = express.Router();

router.post('/',createHealthAssiController);

export default router;