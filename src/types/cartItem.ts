import { Ingredient } from "./product";

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: string;
  diameter: number;
  quantity: number;
  addedIngredients: Ingredient[]
}

