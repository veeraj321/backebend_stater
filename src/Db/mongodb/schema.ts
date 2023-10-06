import mongoose from "mongoose";

const START_ME = "startMe"

const startSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }

})

export const modal = mongoose.model(START_ME, startSchema);

