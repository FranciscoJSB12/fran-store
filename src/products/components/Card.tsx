import { useContext, MouseEvent } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import type { ProductType } from "../../models/product";

interface PropType {
  product: ProductType;
}

const Card = ({ product }: PropType) => {
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
    setShoppingCart([...shoppingCart, product]);
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
          className="absolute top-0 right-0 m-2 bg-white w-12 h-12 rounded-full p-1 flex justify-center items-center font-light text-xl"
          onClick={(event) => addProductToCart(event, product)}
        >
          <PlusIcon className="h-8 w-8 text-black" />
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 m-2 bg-black w-10 h-10 rounded-full p-1 flex justify-center items-center font-light text-xl cursor-default">
          <CheckIcon className="h-7 w-7 text-white" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-72 m-auto"
      onClick={() => openProductDetail(product)}
    >
      <figure className="w-72 h-72 relative">
        <img
          src={product.image}
          className="w-full h-full rounded-lg object-cover"
          alt={product.name}
        />
        <p className="absolute bottom-0 left-0 m-2 bg-white/60 py-0.5 px-3 rounded-lg text-xs text-black">
          {product.category}
        </p>
        {renderIcon(product)}
      </figure>
      <p className="py-2 flex justify-between items-center">
        <span className="font-light text-sm">{product.name}</span>
        <span className="font-medium text-lg">${product.price}</span>
      </p>
    </div>
  );
};

export default Card;
