import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    console.log(req);
    const usuarios = await (await select()).allUsuario();
    res.json(usuarios);
}