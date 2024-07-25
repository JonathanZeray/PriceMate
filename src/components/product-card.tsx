import { Product } from "@/model/Product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex justify-between p-2 border-2 rounded-lg mx-6">
        <img
          className="w-[100px] h-[100px] rounded-lg"
          src={product.imageUrl}
          alt={product.productName}
        />
        <div className="w-full flex  justify-around  items-center">
          <h3>{product.productName}</h3>
          <p> year: {2024 - product.age}</p>
          <p> price: {product.secondHandPrice}</p>
        </div>
      </div>
    </Link>
  );
};
