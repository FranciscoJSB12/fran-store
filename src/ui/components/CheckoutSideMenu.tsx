import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils/calculateTotalPrice";
import OrderCard from "../../orders/components/OrderCard";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    shoppingCart,
    setShoppingCart,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const deleteProduct = (id: string): void => {
    const index = shoppingCart.findIndex((item) => item.id === id);
    const productList = [...shoppingCart];
    productList.splice(index, 1);
    setShoppingCart(productList);
  };

  const saveOrder = (): void => {
    const newOrder = {
      date: "",
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart),
    };
    setOrder((prev) => [...prev, newOrder]);
    setShoppingCart([]);
    setIsCheckoutSideMenuOpen(false);
  };

  useEffect(() => {
    if (order.length > 0) console.table(order[order.length - 1].products);
  }, [order]);

  return (
    <aside
      className={`${
        !isCheckoutSideMenuOpen && "hidden"
      } w-full h-screen flex flex-col fixed top-0 left-0 z-10 bg-white`}
    >
      <div className="w-full p-6 flex justify-between items-center">
        <h1 className="text-xl font-medium">My Order</h1>
        <div
          className="cursor-pointer"
          onClick={() => setIsCheckoutSideMenuOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {shoppingCart.map((product) => (
          <OrderCard
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
        <Link to="/">
          <button
            className="w-full h-14 rounded-lg bg-blue-600 text-white text-lg"
            onClick={() => saveOrder()}
          >
            Buy
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
