import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});