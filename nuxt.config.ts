// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    plugins: [
      "~/server/index.ts",
    ],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    cloudinaryName: process.env.CLOUDINARY_NAME,
    cloudinaryKey: process.env.CLOUDINARY_KEY,
    cloudinarySecret: process.env.CLOUDINARY_SECRET,
  },
})
