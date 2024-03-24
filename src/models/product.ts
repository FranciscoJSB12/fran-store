export interface ProductType {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: string;
  image: string;
}

export enum Category {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Others = "Others",
  Toys = "Toys",
}
