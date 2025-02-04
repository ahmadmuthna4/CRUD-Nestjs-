// src/items/interfaces/item.interface.ts
import { Document } from 'mongoose';

export interface Item extends Document {
  id?: string;
  name: string;
  description: string;
  price: number;
}
