import { NextApiRequest, NextApiResponse } from "next";
import { insert } from "../../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {id,password}:any = JSON.parse( req.body );
    console.log(id,password);
    const respuesta = await (await insert()).loginUser(id,password);
    res.json(respuesta);
}