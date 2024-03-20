import { Schema, model } from "mongoose";

const ActorSchema = new Schema({
    name:String,
    birthname:String,
    birthdate:Date,
    birthplace:String,
})

export default model('actor', ActorSchema)