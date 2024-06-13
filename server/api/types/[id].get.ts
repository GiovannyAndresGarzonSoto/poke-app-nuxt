import Ability from "~/server/models/Ability";

export default defineEventHandler(async (event) => {
    try {
        const params = event.context.params;

        if (!params || !params.id) {
            return {
                success: false,
                message: 'El Id es requerido',
            };
        }

        const { id } = params
        const data = await Ability.findById(id)
            .exec()

        if (!data) {
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar la Habilidad'
            }
        }

        return {
            success: true,
            data
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se han podido listar la Habilidad',
            err
        }
    }
})