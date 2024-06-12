import Ability from '~/server/models/Ability'

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
    const updatedAbility = await Ability.findByIdAndUpdate(id, body, { new: true }).exec()

    if (!updatedAbility) {
      return {
        success: false,
        message: 'No se ha encontrado la Habilidad para actualizar',
      }
    }

    return {
      success: true,
      data: updatedAbility,
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar la Habilidad',
      error: err,
    }
  }
})
