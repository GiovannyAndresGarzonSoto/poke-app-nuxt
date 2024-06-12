import Ability, { IAbility } from "~/server/models/Ability";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { name, description } = body

        const newAbility: IAbility = new Ability({
            name, description
        })
        await newAbility.save()
        
        return {
            success: true,
            data: newAbility
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se ha podido agregar la Habilidad',
            err
        }
    }
})