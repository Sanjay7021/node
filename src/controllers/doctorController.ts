import { Request, Response, NextFunction } from "express";
import { createDoctor } from "../services/doctorService";
import docModel from "../model/doctorModel";
import joi from 'joi';

export const createDoctorController = async (req: Request, res: Response, next: NextFunction) => {
    const schem = joi.object({
        dName: joi.string().alphanum().min(3).max(30).required(),
        deptID:joi.string().alphanum().required(),
        createdBy : joi.string().alphanum().required(),
    })

    try {

        const { error, value } = schem.validate({ dName: req.body.name, deptID:req.body.deptID,createdBy:req.body.createdBy });

        if (error) return res.status(400).send(error.details[0].message)
       
        const doctor = await createDoctor(value.dName, value.deptID, value.createdBy);
        console.log(doctor);
        res.status(201).json(doctor);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const updateDoctorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { dName } = req.body;
        const updated = await docModel.findByIdAndUpdate(id, { dName }, { new: true }).exec();
        res.send(updated);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

