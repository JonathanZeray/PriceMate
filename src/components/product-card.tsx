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
        <div className="w-full flex flex-col md:flex-row justify-around  items-center">
          <h3 className="w-[100px] text-center md:text-left">
            <b>{product.productName}</b>
          </h3>
          <p>
            year: <b> {2024 - product.age}</b>
          </p>
          <p>
            price: <b>{product.secondHandPrice}</b>kr
          </p>
        </div>
      </div>
    </Link>
  );
};
