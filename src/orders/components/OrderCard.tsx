import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProductType } from "../../models/product";

interface PropType {
  product: ProductType;
  deleteProduct?: (id: string) => void;
}

const OrderCard = ({ product, deleteProduct }: PropType) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <p className="text-sm font-light">{product.name}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="text-lg font-medium">${product.price}</p>
        {deleteProduct && (
          <div
            className="cursor-pointer"
            onClick={() => deleteProduct(product.id)}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
