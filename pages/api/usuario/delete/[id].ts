import { NextApiRequest, NextApiResponse } from "next";
import {  } from "../../../../database";
import _delete from "../../../../database/delete";



export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const id = req.query['id'];

    const mensaje = await (await _delete()).idUsuario(parseInt(id.toString()));
    res.json(mensaje);
}