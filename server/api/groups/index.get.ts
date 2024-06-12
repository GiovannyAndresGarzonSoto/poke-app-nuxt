import Group from "~/server/models/Group";

export default defineEventHandler(async (event) => {
    try{
        const data = await Group.find()
        .sort('name')
        .exec()
        if(!data){
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar los Grupos'
            }
        }

        return {
            success: true,
            data
        }
    }catch(err){
        return {
            success: false,
            message: 'No se han podido listar los Grupos',
            err
        }
    }
})