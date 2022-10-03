import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type ProcessedFiles = Array<[string, File]>

export const config = {
  api: {
    bodyParser: false,
  },
}

const filePath = path.resolve('.', 'helpers/modal.js')
const imageBuffer = fs.readFileSync(filePath)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/javascript')
    res.status(200).send(imageBuffer)
}

export default handler
