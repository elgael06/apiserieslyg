import { NextApiRequest, NextApiResponse } from "next";
import { insert } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {nombre,portada}:any = JSON.parse( req.body );
    console.log(req.body);
    if(nombre&& portada){
        const respuesta = await(await insert()).serie(nombre,portada);
        res.json(respuesta);
    }else{res.json({error:`falta(n) parametro(s) [${!nombre ? "nombre" :''}, ${!portada ? "portada" :''}]`});}

}