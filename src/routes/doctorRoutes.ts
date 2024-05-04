import express from 'express';
import { createDoctorController,updateDoctorById } from '../controllers/doctorController';

const app = express();

const router = express.Router();

router.post('/',createDoctorController);
router.put('/:id',updateDoctorById)


export default router;