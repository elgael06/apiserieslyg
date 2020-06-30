import { NextApiRequest, NextApiResponse } from "next";
import { insert } from "../../../database";

interface modelEmpresa {
    nombre:string,
    telefono:string, 
    direccion:string
}

export  default async (req:NextApiRequest,res:NextApiResponse) => {
    if(req.method=='POST'){
        const {nombre, telefono, direccion}:modelEmpresa = req.body;
        console.log('listo');
        const value = await (await insert()).newEmpresa(nombre, telefono, direccion);
        
        res.json('listo'+value);
    }
    else 
        res.json("metodo no accesible.");
} 