import { Product } from "@/model/Product";
import { ProductCard } from "./product-card";
import Link from "next/link";

interface ProdcutListProp {
  products: Product[];
}

export const ProductList = ({ products }: ProdcutListProp) => {
  return (
    <>
      <h1 className="p-4 border-2 p-2 rounded-lg bg-green-800 text-white text-center w-max mx-auto mb-6 text-xl">
        <Link href="/create-new-ad" className="font-bold">
          Create new ad
        </Link>
      </h1>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
