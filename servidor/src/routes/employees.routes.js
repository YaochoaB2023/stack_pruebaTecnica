import { Router } from "express";
import { getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js';

const router = Router()

router.get( "/employee", getEmployees );
router.get( "/employee/:id", getEmployee );
router.post( "/employee", createEmployee );
router.put( "/employee/:id", updateEmployee );
router.delete( "/employee/:id", deleteEmployee );

export default router;