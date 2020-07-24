import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{

    const id = req.query['id'];
    if(id){
        console.log(id);
        
        const series = await(await select()).idSeries(parseInt(id.toString()));
        res.json(series);

    }else{

        const series = await(await select()).allSeries();
        res.json(series);
    }
}