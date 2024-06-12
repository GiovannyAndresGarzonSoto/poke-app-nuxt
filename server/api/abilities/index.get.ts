import Ability from "~/server/models/Ability";

export default defineEventHandler(async (event) => {
    try{
        const data = await Ability.find()
        .sort('name')
        .exec()
        if(!data){
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar las Habilidades'
            }
        }

        return {
            success: true,
            data
        }
    }catch(err){
        return {
            success: false,
            message: 'No se han podido listar las Habilidades',
            err
        }
    }
})