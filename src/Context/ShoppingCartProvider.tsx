import { useState, useEffect, createContext, ReactNode } from "react";
import type { ProductContextType } from "../models/productContext";
import type { ProductType } from "../models/product";
import type { PickedProductType } from "../models/pickedProduct";
import type { OrderType } from "../models/order";
import { categories } from "../utils/navbarCategories";
import { getLastCategory } from "../utils/getLastCategory";
import { getLastShoppingCart } from "../utils/getLastShoppingCart";

interface PropType {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as ProductContextType);

export const ShoppingCartProvider = ({ children }: PropType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(getLastCategory);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [product, setProduct] = useState({} as ProductType);
  const [shoppingCart, setShoppingCart] =
    useState<PickedProductType[]>(getLastShoppingCart);
  const [order, setOrder] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://ecommerce-backend-puce.vercel.app/api/products/"
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.error(err);
      }
    })();
  }, []);

  const filterByCategory = (): ProductType[] => {
    return products.filter((product) => {
      return product.category.toLowerCase() === category;
    });
  };

  const filterByName = (products: ProductType[]): ProductType[] => {
    return products.filter((item) => {
      const itemName = item.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return itemName.includes(searchName);
    });
  };

  const renderProducts = (): ProductType[] => {
    if (category !== categories.all.toLowerCase()) {
      const productsFilteredByCatergory = filterByCategory();
      return filterByName(productsFilteredByCatergory);
    } else {
      return filterByName(products);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        searchValue,
        setSearchValue,
        renderProducts,
        isProductDetailOpen,
        setIsProductDetailOpen,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        product,
        setProduct,
        shoppingCart,
        setShoppingCart,
        order,
        setOrder,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
