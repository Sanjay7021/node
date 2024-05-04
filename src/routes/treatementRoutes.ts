import express from 'express';
import * as treatmentController from '../controllers/treatementController';
// createTreatmentController,getAllDetailsController,patientRecordByDocIdController 
const app = express();

const router = express.Router();

router.post('/',treatmentController.createTreatmentController);
router.get('/get/',treatmentController.getAllDetailsController);
router.get('/:id',treatmentController.patientRecordByDocIdController);
router.get('/patient/medicineList/:id',treatmentController.patientMedicineRecordByIDController);
router.get('/summary/get',treatmentController.patientdoctorsummaryController);


export default router;