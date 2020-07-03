import { NextApiRequest, NextApiResponse } from "next";
import { update } from "../../../database";


interface modelUser {
    id:number,
    apMaterno: String,
    apPaterno:String,
    nombre: String,
    puesto: number
}

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method=='POST'){
        const {id,nombre,apPaterno,apMaterno,puesto}:modelUser = JSON.parse( req.body ); 

        const value = await (await update()).updateUsuario(id,nombre,apPaterno,apMaterno,puesto);
        res.json(value);
    }
}