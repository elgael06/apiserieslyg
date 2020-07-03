import { NextApiRequest, NextApiResponse } from "next";
import { insert } from "../../../database";

interface modelUsuario {
    nombre:string, 
    apPat:string,
    apMat:string,
    puesto:number
}

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method=='POST'){
        const {nombre, apPat,apMat,puesto=0}:modelUsuario = JSON.parse(req.body);
        console.log('body :',req.body)
        console.log('listo',nombre, apPat,apMat,puesto);
        const value = await (await insert()).newUsuario(nombre, apPat,apMat,puesto);
        res.json( {...value});
    }
    else 
        res.json("metodo no accesible.");
}