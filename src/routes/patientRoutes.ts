import express from 'express';
import { createPatientController } from '../controllers/patientController';

const app = express();

const router = express.Router();

router.post('/',createPatientController)

export default router;