import Group from "~/server/models/Group";

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
        const data = await Group.findById(id)
            .exec()

        if (!data) {
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar el Grupo'
            }
        }

        return {
            success: true,
            data
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se han podido listar los Grupos',
            err
        }
    }
})