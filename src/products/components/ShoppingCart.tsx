import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
import { totalPrice } from "../../utils/calculateTotalPrice";
import { PickedProduct } from "./PickedProduct";
import { TransparentBackground } from "../../ui/TransparentBackground";
import { saveShoppingCart } from "../../utils/saveShoppingCart";

export const ShoppingCart = () => {
  const {
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    shoppingCart,
    setShoppingCart,
    setOrder,
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const deleteProduct = (id: string): void => {
    const index = shoppingCart.findIndex((item) => item.id === id);
    const productList = [...shoppingCart];
    productList.splice(index, 1);
    setShoppingCart(productList);
  };

  const saveOrder = (): void => {
    const newOrder = {
      date: `${Date.now()}`,
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart),
    };
    setOrder((prev) => [...prev, newOrder]);
    setShoppingCart([]);
    setIsCheckoutSideMenuOpen(false);

    navigate("/orders/last");
  };

  useEffect(() => {
    saveShoppingCart("lastShoppingCart", shoppingCart);
  }, [shoppingCart]);

  return (
    <>
      <aside
        className={`${
          !isCheckoutSideMenuOpen ? "hidden" : ""
        } w-full max-w-sm h-screen flex flex-col fixed top-0 right-0 z-20 bg-white`}
      >
        <div className="w-full p-6 flex justify-between items-center">
          <h1 className="text-gray-700 text-xl font-medium">My Order</h1>
          <div
            className="cursor-pointer"
            onClick={() => setIsCheckoutSideMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {shoppingCart.map((product) => (
            <PickedProduct
              product={product}
              key={product.id}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
        <div className="px-6 pb-6">
          <p className="flex flex-row justify-between items-center m-4">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
              ${totalPrice(shoppingCart)}
            </span>
          </p>
          <button
            className="w-full h-14 rounded-lg bg-blue-600 text-white text-lg"
            onClick={() => saveOrder()}
          >
            Buy
          </button>
        </div>
      </aside>
      {isCheckoutSideMenuOpen && <TransparentBackground />}
    </>
  );
};
