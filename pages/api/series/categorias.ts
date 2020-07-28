
import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    
    if(req.method=='GET'){
        const cat = await(await select()).categorias();
        res.json(cat)
    }else if(req.method=='POST'){
        
    }
}