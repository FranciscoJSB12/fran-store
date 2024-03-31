import { useState, useEffect } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, updateProductCountInShoppingCart } from "../../store";
import type { PickedProductType } from "../../models/pickedProduct";

interface PropType {
  product: PickedProductType;
  deleteProduct: (id: string) => void;
}

export const PickedProduct = ({ product, deleteProduct }: PropType) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(product.quantity);

  const DecrementCount = () => {
    setCount((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const IncrementCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(updateProductCountInShoppingCart({ id: product.id, count }));
  }, [count]);

  return (
    <div className="mb-10">
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
          <div
            className="cursor-pointer"
            onClick={() => deleteProduct(product.id)}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <button
            onClick={IncrementCount}
            className="mr-5 px-6 py-1 cursor-pointer rounded-lg bg-green-400"
          >
            <PlusIcon className="h-4 w-4 text-black" />
          </button>
          <button
            onClick={DecrementCount}
            className="px-6 py-1 cursor-pointer rounded-lg bg-red-400"
          >
            <MinusIcon className="h-4 w-4 text-black" />
          </button>
        </div>
        <div>
          <p>Quantity: {count}</p>
        </div>
      </div>
    </div>
  );
};
