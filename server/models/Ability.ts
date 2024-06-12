import { model, Document, Schema } from 'mongoose'

export interface IAbility extends Document {
    name: string
    description: string
}

const abilitySchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la Habilidad es obligatorio'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'La descripción de la Habilidad es obligatoria'],
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})


export default model<IAbility>('Ability', abilitySchema)