import { NextApiRequest, NextApiResponse } from "next";
import { update } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const id     = req.query['id'] || 0;
    const {nombre,portada}:any = JSON.parse( req.body );
    
    console.log(nombre,portada);
    if(id && nombre && portada){
        const respuesta = await(await update()).serie(parseInt(id.toString()),nombre,portada);
        console.log(respuesta)
        res.json(respuesta);
    }else{res.json({error:`falta(n) parametro(s) [${!id?'id':''}  ${!nombre ? "nombre" :''}, ${!portada ? "portada" :''}]`});}

}