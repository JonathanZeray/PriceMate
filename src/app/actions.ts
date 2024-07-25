'use server';
import { Product } from '@/model/Product';
import { addProduct, getAllProducts, getProductById } from '../server/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function postToDB(data: Product) {
  await addProduct(data);
  /*   revalidatePath('/');
  redirect('/'); */
}

export async function getLastCreatedProduct() {
  const productsArray = await getAllProducts();
  const product = await getProductById(
    productsArray[productsArray.length - 1].id
  );

  return product.id;
}
