import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../database";

export default async (req:NextApiRequest,res:NextApiResponse)=>{

    const { id } = req.query;
      const idEmpresa = parseInt(id.toString());
      const empresa =  await (await select()).idEmpresa(idEmpresa);
    res.json(empresa);
}