import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  adopted: { type: Boolean, default: false }
});

export const Pet = mongoose.model("Pet", petSchema);
