import { ProductList } from "@/components/product-list";
import { getAllProducts } from "../server/queries";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="mb-16">
      <ProductList products={products} />
    </main>
  );
}
