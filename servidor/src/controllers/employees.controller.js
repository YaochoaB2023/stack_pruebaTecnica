import Employee from "../models/employee.model";

export const getEmployees = async (req, res) => {
    try {
        const employee = await Employee.find();        
        res.ststus(200).json(employee);  
    } catch (error) {
        res.status(500).json({message:error.message});
        console.log(error)
    }
}


export const getEmployee = async (req,res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            const error = new Error("the employee does not exist")
            error.status = 404;
            throw error;
        }
        res.json(employee);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


export const createEmployee = async (req, res) => {

    try {
        const { nombre, correo, genero, descripcion, area, boletin, rol } = req.body;
        const newEmployee = new Employee(
        {
            nombre, correo, genero, descripcion, area, boletin, rol
        });

        const savedEmployee = await newEmployee.save()
        res.status(200).json(savedEmployee)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


export const deleteEmployee = async (req,res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
        if(!deletedEmployee){
            const error = new Error("the employee does not exist")
            error.status = 404;
            throw error;
        }
        return res.sendStatus(204).json("employee deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}


export const updateEmployee = async (req,res) => {
    try {
        const { nombre, correo, genero, descripcion, area, boletin, rol } = req.body;
        const employeeUpdated = await Employee.findByIdAndUpdate(
            req.body.id,
            {
                $set:
                {
                    nombre, correo, genero, descripcion, area, boletin, rol
                },
            },
            {
                new: true,
            }
        );
        return res.json(employeeUpdated);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});  
    }
}