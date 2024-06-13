import cloudinary from 'cloudinary'

const { cloudinaryName, cloudinaryKey, cloudinarySecret } = useRuntimeConfig()

cloudinary.v2.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryKey,
  api_secret: cloudinarySecret,
  secure: true
})

export default cloudinary