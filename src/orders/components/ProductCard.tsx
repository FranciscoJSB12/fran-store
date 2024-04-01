import type { PickedProductType } from "../../models/pickedProduct";

interface PropType {
  product: PickedProductType;
}

export const ProductCard = ({ product }: PropType) => {
  return (
    <div className="flex justify-between pr-10 pb-5" key={product.id}>
      <figure className="w-24 h-24">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.image}
          alt={product.name}
        />
      </figure>
      <figcaption>
        <h2>{product.name}</h2>
        <p>
          <strong>{product.price}$</strong>
        </p>
        <p>
          Amount: <strong>{product.quantity}</strong>
        </p>
      </figcaption>
    </div>
  );
};
