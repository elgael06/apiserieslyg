import { NextApiRequest, NextApiResponse } from "next";
import {  } from "../../../../database";
import borrar from "../../../../database/borrar";



export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const id = req.query['id'];

    const mensaje = await (await borrar()).idUsuario(parseInt(id.toString()));
    res.json(mensaje);
}