import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  useAppDispatch,
  useAppSelector,
  closeShoppingCart,
  deleteProductInShoppingCart,
  setOrder,
} from "../../store";
import { totalPrice } from "../../utils/calculateTotalPrice";
import { PickedProduct } from "./PickedProduct";
import { TransparentBackground } from "../../ui/TransparentBackground";
import type { PickedProductType } from "../../models/pickedProduct";

export const ShoppingCart = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const { isUserAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteProduct = (id: string): void => {
    dispatch(deleteProductInShoppingCart(id));
  };

  const getTotalProducts = (products: PickedProductType[]): number => {
    return products.reduce((sum, p) => sum + p.quantity, 0);
  };

  const saveOrder = (): void => {
    if (!isUserAuthenticated) {
      setIsAlertOpen(true);
      return;
    }

    const newOrder = {
      date: `${Date.now()}`,
      products: [...shoppingCart.products],
      totalProducts: getTotalProducts(shoppingCart.products),
      totalPrice: totalPrice(shoppingCart.products),
    };

    dispatch(setOrder(newOrder));

    navigate("/my-order");
  };

  useEffect(() => {
    const currentProducts = JSON.stringify(shoppingCart.products);
    localStorage.setItem("lastShoppingCart", currentProducts);
  }, [shoppingCart.products]);

  return (
    <>
      <aside
        className={`${
          !shoppingCart.isOpen ? "hidden" : ""
        } w-full max-w-sm h-screen flex flex-col fixed top-0 right-0 z-20 bg-white`}
      >
        <div className="w-full p-6 flex justify-between items-center">
          <h1 className="text-gray-700 text-xl font-medium">My Order</h1>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(closeShoppingCart())}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {shoppingCart.products.map((product) => (
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
              ${totalPrice(shoppingCart.products)}
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
      {shoppingCart.isOpen && <TransparentBackground />}
      {isAlertOpen && (
        <aside className="w-11/12 max-w-80 h-48 flex flex-col items-center justify-center fixed top-0 right-0 bottom-0 left-0 m-auto z-30 bg-white rounded-lg border border-blue-900">
          <p className="italic text-gray-600 text-lg">
            Register or Log in to continue
          </p>
          <div className="mt-5">
            <button
              className="bg-blue-700 w-24 py-1 rounded-lg text-white mr-5"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </button>
            <button
              className="bg-blue-700 w-24 py-1 rounded-lg text-white mr-5"
              onClick={() => navigate("auth/register")}
            >
              Log In
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
