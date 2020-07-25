import { NextApiRequest, NextApiResponse } from "next";
import { select, borrar } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{

    const {id=0,eliminar=false } = req.query;

    if(id&& !eliminar){
        console.log(id);
        const series = await(await select()).idSeries(parseInt(id.toString()));
        res.json(series);

    }else if(eliminar && id){
        const data = await(await borrar()).serie(parseInt(id.toString() ));
        res.json(data);
    }
    else{

        const series = await(await select()).allSeries();
        res.json(series);
    }
}