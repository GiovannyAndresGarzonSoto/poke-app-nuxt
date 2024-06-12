import Group from '~/server/models/Group'

export default defineEventHandler(async (event) => {
  const params = event.context.params
  const body = await readBody(event)

  if (!params || !params.id) {
    return {
      success: false,
      message: 'El Id es requerido',
    }
  }

  const { id } = params

  try {
    const updatedGroup = await Group.findByIdAndUpdate(id, body, { new: true }).exec()

    if (!updatedGroup) {
      return {
        success: false,
        message: 'No se ha encontrado el Grupo para actualizar',
      }
    }

    return {
      success: true,
      data: updatedGroup,
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar el Grupo',
      error: err,
    }
  }
})
