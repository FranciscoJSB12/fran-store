import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../Context/ShoppingCartProvider";

export const ShoppingBagButton = () => {
  const { shoppingCart, setIsCheckoutSideMenuOpen } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className="w-14 h-14 rounded-full fixed right-5 bottom-5 bg-blue-800 z-10 flex justify-center items-center cursor-pointer"
      onClick={() => setIsCheckoutSideMenuOpen((current) => !current)}
    >
      <ShoppingBagIcon className="h-6 w-6 text-white" />
      <span className="text-white">{shoppingCart.length}</span>
    </aside>
  );
};
