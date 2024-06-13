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
    const deletedAbility = await Ability.findByIdAndDelete(id).exec();

    if (!deletedAbility) {
      return {
        success: false,
        message: 'No se ha encontrado la Habilidad para eliminar',
      };
    }

    return {
      success: true,
      message: 'Habilidad eliminada exitosamente',
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar la Habilidad',
      error: err,
    }
  }
})
