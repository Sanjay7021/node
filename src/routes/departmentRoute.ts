import express from 'express';
import {createDepartmentController} from '../controllers/departmentController';

const app = express();

const router = express.Router();

router.get('/',createDepartmentController)

export default router;