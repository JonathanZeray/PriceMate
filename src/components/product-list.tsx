import { Product } from '@/model/Product';
import { ProductCard } from './product-card';

interface ProdcutListProp {
  products: Product[];
}

export const ProductList = ({ products }: ProdcutListProp) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
