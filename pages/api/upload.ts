import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import formidable, { File } from 'formidable'
import FormData from 'form-data'
import mv from 'mv'

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

  /* Get files using formidable */
  const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
    const form = new formidable.IncomingForm()
    const files: ProcessedFiles = []
    form.on('file', (field, file) => {
      files.push([field, file])
    })
    form.on('end', () => resolve(files))
    form.on('error', (err) => reject(err))

    form.parse(req, (err, fields, files) => {
        
      if (err) return reject(err)
      console.log(fields, files)
      console.log(files.file.filepath)
      const oldPath = files.file.filepath
      const fName = req.headers.type === 'logo' ? 'logo' : 'image'
      const rndm = Date.now() + (Math.random() + 1).toString(36).substring(2) 
      const newPath = `./public/upload/${fName}_${rndm}.${files.file.originalFilename.split('.')[1].toLowerCase()}`
      mv(oldPath, newPath, function (err) {})
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

export default handler
