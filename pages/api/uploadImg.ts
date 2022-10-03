import type { NextApiRequest, NextApiResponse } from 'next'
/*
import fs from 'fs'
import path from 'path'

import FormData from 'form-data'
// import formidable, { File } from 'formidable'
const formidable = require("formidable")
// import mv from 'mv'
const mv = require("mv")

type ProcessedFiles = Array<[string, File]>

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers)
  let status = 200
  let resultBody = { status: 'ok', message: 'Files were uploaded successfully' }


  const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const form = new formidable.IncomingForm()
    // eslint-disable-next-line no-shadow
    const files: ProcessedFiles = []
    form.on('file', (field: string, file: File) => {
      files.push([field, file])
    })
    form.on('end', () => resolve(files))
    form.on('error', (err: any) => reject(err))

    // eslint-disable-next-line consistent-return, no-shadow
    form.parse(req, (err: any, fields: any, files: { file: { filepath: any; originalFilename: string } }) => {
        
      if (err) return reject(err)
      console.log(fields, files)
      console.log(files.file.filepath)
      const oldPath = files.file.filepath
      const fName = req.headers.type === 'logo' ? 'logo' : 'image'
      const rndm = Date.now() + (Math.random() + 1).toString(36).substring(2) 
      const newPath = `./public/upload/${fName}_${rndm}.${files.file.originalFilename.split('.')[1].toLowerCase()}`
      // eslint-disable-next-line no-shadow
      mv(oldPath, newPath, () => {})
      res.status(200).json({ fields, files, newPath })
    })
  }).catch((e) => {
    console.log(e)
    status = 500
    resultBody = {
      status: 'fail',
      message: 'Upload error',
    }
  })
}

export default handler */
