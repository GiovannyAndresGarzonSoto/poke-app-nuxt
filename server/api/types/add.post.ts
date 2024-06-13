import { form, parseForm } from '~/server/config/formidable'
import cloudinary from 'cloudinary'

const { cloudinaryName, cloudinaryKey, cloudinarySecret } = useRuntimeConfig()

cloudinary.v2.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryKey,
  api_secret: cloudinarySecret,
  secure: true
})

export default defineEventHandler(async (event) => {
  try {
    const { fields, files } = await parseForm(form, event.node.req)
    const result = await cloudinary.uploader.upload(files.image[0].filepath)
    return {
      data: result
    }
  } catch (err) {
    return {
      message: 'No se pudo agregar el Tipo',
      err
    }
  }
})