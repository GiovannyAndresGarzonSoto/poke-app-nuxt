import formidable from 'formidable'
import { join } from 'path'

export const form = formidable({
    uploadDir: join(process.cwd(), 'uploads'),
    keepExtensions: true
})

export function parseForm(form: any, req: any) {
    return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
            if (err) {
                reject(err)
            } else {
                resolve({ fields, files })
            }
        })
    })
}