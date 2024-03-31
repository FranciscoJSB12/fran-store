import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  useAppSelector,
  useAppDispatch,
  closeProductDetail,
} from "../../store";
import { TransparentBackground } from "../../ui/TransparentBackground";

export const ProductDetail = () => {
  const productDetail = useAppSelector((state) => state.productDetail);
  const dispatch = useAppDispatch();

  return (
    <>
      <aside
        className={`${
          !productDetail.isOpen ? "hidden" : ""
        } w-full max-w-sm h-screen flex fixed top-0 right-0 flex-col z-20 bg-white`}
      >
        <div className="w-full p-6 flex justify-between items-center">
          <h2 className="text-gray-700 text-xl font-medium">Detail</h2>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(closeProductDetail())}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <figure className="px-6">
          <img
            src={productDetail.currentProduct.image}
            alt={productDetail.currentProduct.name}
            className="w-full h-full rounded-lg"
          />
        </figure>
        <p className="flex flex-col pt-3 px-6 pb-3">
          <span className="text-gray-700 font-medium text-2xl mb-2">
            {productDetail.currentProduct.name}
          </span>
          <span className="font-medium text-md">
            ${productDetail.currentProduct.price}
          </span>
        </p>
        <p className="font-light text-sm px-6 pb-6 overflow-y-scroll">
          {productDetail.currentProduct.description}
        </p>
      </aside>
      {productDetail.isOpen && <TransparentBackground />}
    </>
  );
};
