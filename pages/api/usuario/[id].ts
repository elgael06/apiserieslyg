import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";



export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const id = req.query['id'];

    const usuario = await (await select()).idUsuario(parseInt(id.toString()));
    const sesion = await (await select()).idSesionUsuario(parseInt(id.toString()));

    const respuesta ={...usuario,sesion }; 
    res.json(respuesta);
}