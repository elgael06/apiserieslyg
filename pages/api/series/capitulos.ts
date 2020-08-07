import { NextApiRequest, NextApiResponse } from "next";
import { insert, select, update, borrar } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {buscar=0,id=0,nuevo=false,idSerie=0,eliminar=false}:any = req.query;

    console.log(id,nuevo);

    if(buscar){
        console.log('id');        
        const datos = await (await select()).capitulosID(buscar);
        res.json(datos);
    }else if(id==0 && !nuevo){
        const datos = await (await select()).capitulos(idSerie);
        res.json(datos);
    }else if(nuevo){
        const {desc='',url=''}:any = JSON.parse( req.body );
        const datos = await(await insert()).capitulo(idSerie,url,desc);
        res.json(datos);
    }else if (id && !nuevo && !eliminar){
        const {desc='',url=''}:any = JSON.parse( req.body );
        const datos = await(await update()).capitulo(idSerie,id,url,desc);
        res.json(datos);
    }else if( eliminar && id ){
        const data = await(await borrar()).capitulo(id);
        res.json(data);
    } else
        res.json({id,nuevo});

}

