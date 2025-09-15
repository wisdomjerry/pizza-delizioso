export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string; // required
  quantity: number;
}

export interface CartItem extends Pizza {
  image: string | undefined;
  quantity: number;
}

export type Pizza = {
  id: number;
  name: string;
  price: number;
  image: string;
  // add other properties as needed
};
