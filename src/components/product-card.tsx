import { Product } from '@/model/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='flex justify-between p-2 border-2 rounded-lg mx-6'>
      <img
        className='w-[100px] h-[100px] rounded-lg'
        src={product.imageUrl}
        alt={product.productName}
      />
      <div className='w-full flex  justify-around  items-center'>
        <h3>{product.productName}</h3>
        <p> age: {product.age}</p>
        <p> price: {product.secondHandPrice}</p>
      </div>
    </div>
  );
};
