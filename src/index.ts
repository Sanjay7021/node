import express from 'express';
import 'dotenv/config';
import connectDB from './config/database';
import departmentRoutes from './routes/departmentRoute';
import doctorRoutes from './routes/doctorRoutes';
import drugRoutes from './routes/drugRoutes';
import healthAssRoutes from './routes/healthAssRoutes';
import patientRoutes from './routes/patientRoutes';

const app = express();

connectDB();
app.get('/',function (req,res,next){
    res.send('welcome to hospital management system');
})


app.use(express.json());
app.use('/department/',departmentRoutes);    
app.use('doctor/',doctorRoutes);
app.use('drug/',drugRoutes);
app.use('health/',healthAssRoutes);
app.use('patient/',patientRoutes);


export default app;