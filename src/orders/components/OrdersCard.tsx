import {
  CalendarDaysIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface PropType {
  totalPrice: number;
  totalProducts: number;
}

const OrdersCard = ({ totalPrice, totalProducts }: PropType) => {
  return (
    <div className="w-[300px] h-[80px] px-5 rounded-lg flex justify-between items-center mb-3 border border-black">
      <div>
        <p className="flex gap-3 items-center">
          <span>
            <ShoppingBagIcon className="h-5 w-5 text-black" />
          </span>
          <span className="text-sm font-light">{totalProducts} Products</span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <CalendarDaysIcon className="h-5 w-5 text-black" />
          </span>
          <span className="text-sm font-light">01.02.03</span>
        </p>
      </div>
      <p className="flex gap-3 items-center">
        <span className="text-xl font-medium">${totalPrice}</span>
        <span>
          <ChevronRightIcon className="h-5 w-5 text-black" />
        </span>
      </p>
    </div>
  );
};

export default OrdersCard;
