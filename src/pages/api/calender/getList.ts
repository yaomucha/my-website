// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import queryData from "../../../util/connectMysql"



type Data = {
    data: list[] | undefined
}

type list = {
    id: number,
    taskName: string,
    priority: 1 | 2 | 3,  //优先级  1：高 2：中 3：低
    status: 0 | 1, //状态 0：未完成 1:已完成
    dueDate: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    queryData('SELECT * FROM `projects_calender`', res)
}
