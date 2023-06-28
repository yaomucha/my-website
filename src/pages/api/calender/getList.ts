// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: list[]
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
  res.status(200).json({ data: [
    { id: 1, taskName: "123",priority: 1,  status: 0, dueDate: 'Jon' },
    { id: 2, taskName: "123",priority: 1,  status: 0, dueDate: 'Cersei' },
    { id: 3, taskName: "123",priority: 1,  status: 0, dueDate: 'Jaime'},
    { id: 4, taskName: "123",priority: 1,  status: 0, dueDate: 'Arya' },
    { id: 5, taskName: "123",priority: 1,  status: 0, dueDate: 'Daenerys' },
    { id: 6, taskName: "123",priority: 1,  status: 0, dueDate: '2022-09-22'},
    { id: 7, taskName: "123",priority: 1,  status: 0, dueDate: 'Ferrara'},
    { id: 8, taskName: "123",priority: 1,  status: 0, dueDate: 'Rossini' },
    { id: 9, taskName: "123",priority: 1,  status: 0, dueDate: 'Harvey' },
  ] })
}
