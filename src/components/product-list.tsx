import { Product } from "@/model/Product";
import { ProductCard } from "./product-card";
import Link from "next/link";

interface ProdcutListProp {
  products: Product[];
}

export const ProductList = ({ products }: ProdcutListProp) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
