// Define the TypeScript interfaces
interface SizeAndCrustOption {
  price: number;
}

interface SizeAndCrust {
  mediumPan?: SizeAndCrustOption[];
  mediumstuffedcrustcheesemax?: SizeAndCrustOption[];
  mediumstuffedcrustvegkebab?: SizeAndCrustOption[];
  mediumstuffedcrustchickenseekhkebab?: SizeAndCrustOption[];
  "medium stuffed crust-veg kebab"?: SizeAndCrustOption[];
  "medium stuffed crust kebab"?: SizeAndCrustOption[];
}

// Interface for a single menu item
interface PizzaItem {
  id: number;
  name: string;
  veg: boolean;
  price: number;
  description: string;
  quantity: number;
  img: string;
  sizeandcrust: SizeAndCrust[];
}

// Interface for the entire menu data
interface PizzaData {
  pizzas: PizzaItem[];
}

export type { PizzaData, PizzaItem };
