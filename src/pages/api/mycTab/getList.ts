// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import queryData from "../../../util/connectMysql"

import fs from 'fs';
import path from 'path';





type Data = {
    data: list[] | undefined
}

type list = {
    id: number,
    title: string,
    href: string, 
    icon: string, 
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    fs.readFile( path.join(process.cwd(), 'src/pages/api/mycTab') + "/list.json", 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            return res.status(200).json(JSON.parse(data))
        }
        
    })
    
}

export const config = {
    api: {
        externalResolver: true,
    },
};
