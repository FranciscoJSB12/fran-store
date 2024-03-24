import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const { isProductDetailOpen, setIsProductDetailOpen, product } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        !isProductDetailOpen && "hidden"
      } w-full h-screen flex fixed top-0 left-0 flex-col z-10 bg-white`}
    >
      <div className="w-full p-6 flex justify-between items-center">
        <h2 className="text-xl font-medium">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => setIsProductDetailOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <figure className="px-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col pt-3 px-6 pb-3">
        <span className="font-medium text-2xl mb-2">{product.name}</span>
        <span className="font-medium text-md">${product.price}</span>
      </p>
      <p className="font-light text-sm px-6 pb-6 overflow-y-scroll">
        {product.description}
      </p>
    </aside>
  );
};

export default ProductDetail;
