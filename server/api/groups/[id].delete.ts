import Group from '~/server/models/Group'

export default defineEventHandler(async (event) => {
  const params = event.context.params

  if (!params || !params.id) {
    return {
      success: false,
      message: 'El Id es requerido',
    }
  }

  const { id } = params

  try {
    const deletedGroup = await Group.findByIdAndDelete(id).exec();

    if (!deletedGroup) {
      return {
        success: false,
        message: 'No se ha encontrado el Grupo para eliminar',
      }
    }

    return {
      success: true,
      message: 'Grupo eliminada exitosamente',
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar el Grupo',
      error: err
    }
  }
})
