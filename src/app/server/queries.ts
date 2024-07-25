import { db } from './db';
import * as schema from './db/schema';
import { eq } from 'drizzle-orm';

export const getAllProducts = async () => {
  const products = await db.select().from(schema.products);
  return products;
};

export const getProductById = async (id: number) => {
  const productById = await db
    .select()
    .from(schema.products)
    .where(eq(schema.products.id, id));

  return productById[0];
};
