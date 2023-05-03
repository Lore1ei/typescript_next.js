// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as queryString from "querystring";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const searchQuery = req.query.q?.toString();

  res.status(200).json({ name: 'John Doe' })
}
