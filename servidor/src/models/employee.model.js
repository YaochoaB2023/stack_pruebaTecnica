import mongoose, { Schema } from "mongoose";

const employeSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    sexo:{
        type: String,
        require: true
    },
    descriocion:{
        type: String,
        require: true
    },
    area:{
        type: String,
        require: true
    },
    boletin:{
        type: String
    },
    rol:{
        type: String,
        require: true
    }
},{
    timestamps: true
});

export default mongoose.model('Employees', employeSchema);