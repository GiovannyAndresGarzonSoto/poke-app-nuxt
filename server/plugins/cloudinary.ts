import { Nitro } from 'nitropack'
import cloudinary from 'cloudinary'

export default async (_nitroApp: Nitro) => {
  const { cloudinaryName, cloudinaryKey, cloudinarySecret } = useRuntimeConfig()

  cloudinary.v2.config({
    cloud_name: cloudinaryName,
    api_key: cloudinaryKey,
    api_secret: cloudinarySecret,
    secure: true
  })

  console.log('Cloudinary is configured')
}