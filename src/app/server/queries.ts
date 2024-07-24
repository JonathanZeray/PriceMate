import { db } from './db';
import * as schema from './db/schema';

export const getAllProducts = async () => {
  const products = await db.select().from(schema.products);
  return products;
};
