import { Ingredient } from "./product";

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  type: string;
  size: string;
  diameter: number;
  quantity: number;
  addedIngredients: Ingredient[]
}

export interface ISauceItem {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity?: number;
}