'use server';
import { Product } from '@/model/Product';
import { db } from './server/db';
import * as schema from './server/db/schema';

export async function postToDB(data: Product) {
  await db.insert(schema.products).values(data);
}
