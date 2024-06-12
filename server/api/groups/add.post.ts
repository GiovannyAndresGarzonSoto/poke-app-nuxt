import Group, { IGroup } from "~/server/models/Group";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { name } = body

        const newGroup: IGroup = new Group({
            name
        })
        await newGroup.save()
        
        return {
            success: true,
            data: newGroup
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se ha podido agregar la Habilidad',
            err
        }
    }
})