// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FaSass } from 'react-icons/fa';
import { client } from '../../../utils/utils/client';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse){
    //   res.status(200).json({ name: 'Response Success ' })
    if(req.method == 'POST'){
        const user = req.body;
        client.createIfNotExists(user)
        .then(()=> res.status(200).json('Log in success'))


     
    }
    }


