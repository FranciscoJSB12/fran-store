import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector, openShoppingCart } from "../../store";

export const ShoppingBagButton = () => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const dispatch = useAppDispatch();
  return (
    <aside
      className="w-14 h-14 rounded-full fixed right-5 bottom-5 bg-blue-800 z-10 flex justify-center items-center cursor-pointer"
      onClick={() => dispatch(openShoppingCart())}
    >
      <ShoppingBagIcon className="h-6 w-6 text-white" />
      <span className="text-white">{shoppingCart.products.length}</span>
    </aside>
  );
};
