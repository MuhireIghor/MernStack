// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FaSass } from 'react-icons/fa';
import { allPostsQuery } from '../../../utils/utils/queries'
import { client } from '../../../utils/utils/client';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse){
    //   res.status(200).json({ name: 'Response Success ' })
    if(req.method == 'GET'){
        const query = allPostsQuery();
        const data = await client.fetch(query);
        res.status(200).json(data);
    }
    }


