import Type from "~/server/models/Type";

export default defineEventHandler(async (event) => {
    try{
        const data = await Type.find()
        .sort('name')
        .exec()
        if(!data){
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar los Tipos'
            }
        }

        return {
            success: true,
            data
        }
    }catch(err){
        return {
            success: false,
            message: 'No se han podido listar los Tipos',
            err
        }
    }
})