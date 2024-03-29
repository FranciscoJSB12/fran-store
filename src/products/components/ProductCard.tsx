import { useContext, MouseEvent } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
import type { ProductType } from "../../models/product";

interface PropType {
  product: ProductType;
}

export const ProductCard = ({ product }: PropType) => {
  const {
    isProductDetailOpen,
    setIsProductDetailOpen,
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    setProduct,
    shoppingCart,
    setShoppingCart,
  } = useContext(ShoppingCartContext);

  const openProductDetail = (product: ProductType): void => {
    setIsProductDetailOpen(true);
    if (isCheckoutSideMenuOpen) {
      setIsCheckoutSideMenuOpen(false);
    }
    setProduct(product);
  };

  const addProductToCart = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    product: ProductType
  ): void => {
    event.stopPropagation();
    setShoppingCart((prev) => [...prev, { ...product }]);
    setIsCheckoutSideMenuOpen(true);
    if (isProductDetailOpen) {
      setIsProductDetailOpen(false);
    }
  };

  const renderIcon = (product: ProductType): JSX.Element => {
    const isInCart = shoppingCart.some((item) => item.id === product.id);

    if (!isInCart) {
      return (
        <div
          className="absolute top-0 right-0 m-2 bg-blue-600 w-10 h-10 rounded-full p-1 flex justify-center items-center font-light text-xl"
          onClick={(event) => addProductToCart(event, product)}
        >
          <PlusIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 m-2 bg-white w-10 h-10 rounded-full p-1 flex justify-center items-center font-light text-xl cursor-default">
          <CheckIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-72 shadow-2xl"
      onClick={() => openProductDetail(product)}
    >
      <figure className="w-72 h-64 relative">
        <img
          src={product.image}
          className="w-full h-full rounded-t-lg object-cover"
          alt={product.name}
        />
        <p className="absolute bottom-0 left-0 m-2 bg-white/60 py-0.5 px-3 rounded-lg text-xs text-black">
          {product.category}
        </p>
        {renderIcon(product)}
      </figure>
      <p className="py-2 px-2 flex justify-between items-center">
        <span className="font-light text-sm">{product.name}</span>
        <span className="font-medium text-lg">${product.price}</span>
      </p>
    </div>
  );
};
