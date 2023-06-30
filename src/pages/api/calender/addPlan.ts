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
    if (req.method === 'POST') {
        const {
            taskName,
            priority,
            status,
            dueDate,
            id } = req.body
            const temp = `('${id}', '${taskName}', '${priority}', '${status}', '${dueDate}')`
        queryData('INSERT INTO `projects_calender` (`id`, `taskName`, `priority`, `status`, `dueDate`) VALUES ' + temp, res)
    } else {
        // Handle any other HTTP method
    }


}

export const config = {
    api: {
        externalResolver: true,
    },
};
