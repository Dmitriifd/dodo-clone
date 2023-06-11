export interface IProduct {
  id: string
  title: string
  desc: string
  img: string
  types: string[]
  weight: number[]
  price: number[]
  sizes: string[]
  diameter: number[]
  images: Images
  ingredients: Ingredient[]
}

export interface Images {
  trad: string
  thin: string
}

export interface Ingredient {
  id: number
  title: string
  price: number
  img: string
}