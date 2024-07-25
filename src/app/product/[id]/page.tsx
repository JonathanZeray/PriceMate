import { getProductById } from "@/server/queries";

interface PageProps {
  params: {
    id: number;
  };
}

export default async function ProductPage({ params: { id } }: PageProps) {
  const product = await getProductById(id);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        className="w-[400px] h-[400px] rounded-lg"
        src={product.imageUrl}
        alt={product.productName}
      />
      <h3>name: {product.productName}</h3>
      <p> age: {product.age}</p>
      <p> condition: {product.condition}</p>
      <p> price: {product.secondHandPrice}</p>
    </div>
  );
}
