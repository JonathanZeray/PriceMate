import { getAllProducts } from './server/queries';

export default async function Home() {
  const products = await getAllProducts();
  console.log(products);
  return <main className=''>{products[0].productName}</main>;
}
