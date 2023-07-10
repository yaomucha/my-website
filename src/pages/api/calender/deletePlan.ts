// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import queryData from "../../../util/connectMysql"



type Data = {
    data: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.body)
    if (req.method === 'DELETE') {
        const { id } = req.body
        queryData('DELETE FROM `projects_calender` WHERE id = ' + id, res)
    } else {
        // Handle any other HTTP method
    }


}

export const config = {
    api: {
        externalResolver: true,
    },
};
