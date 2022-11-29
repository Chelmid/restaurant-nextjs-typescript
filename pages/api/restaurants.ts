// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { showALLrestaurants } from "../../Firebase/storage/database"

type Data = object[];

type Error = {
  Error: string
}

export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if(req.method === "POST" || req.method === "GET"){
    showALLrestaurants().then(response => res.status(200).json(response));
  }else{
    return res.status(200).json({ Error: 'no authorize' });
  }
}
