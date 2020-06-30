import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";

export default async function (req:NextApiRequest,res:NextApiResponse){
    if(req.method=='POST'){
        const empresa = await (await select()).allEmpresar();
        res.json(empresa);
    }
    else
        res.json({message:"metodo no accesible."})
}

