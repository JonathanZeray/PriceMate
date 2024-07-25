'use server';
import { Product } from '@/model/Product';
import { db } from '../server/db';
import * as schema from '../server/db/schema';
import { addProduct } from '../server/queries';

export async function postToDB(data: Product) {
  await addProduct(data);
}
