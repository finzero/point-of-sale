import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ICartItem, IProduct } from '../models/application.model';
import produce from 'immer';

export interface ICart {
  items: ICartItem[];
  addToCart: (item: IProduct) => void;
  increaseQty: (item: ICartItem) => void;
  decreaseQty: (item: ICartItem) => void;
  clearCart: () => void;
}

export const useCartStore = create(
  devtools<ICart>((set) => ({
    items: [],
    addToCart: (item: IProduct) => {
      set(
        produce((state: ICart) => {
          const itemIndexInCart = state.items.findIndex(
            (i) => i.id === item.id
          );
          if (itemIndexInCart === -1) {
            state.items.push({ ...item, quantity: 1 });
          } else {
            state.items[itemIndexInCart].quantity += 1;
          }
        }),
        false,
        '[Cart] Add Item'
      );
    },
    increaseQty: (item: ICartItem) =>
      set(
        produce((state: ICart) => {
          const itemIndexInCart = state.items.findIndex(
            (i) => i.id === item.id
          );
          state.items[itemIndexInCart].quantity += 1;
        }),
        false,
        '[Cart] Increase Item Quantity'
      ),
    decreaseQty: (item: ICartItem) =>
      set(
        produce((state: ICart) => {
          const itemIndexInCart = state.items.findIndex(
            (i) => i.id === item.id
          );
          if (state.items[itemIndexInCart].quantity === 1) {
            state.items.splice(itemIndexInCart, 1);
          } else {
            state.items[itemIndexInCart].quantity -= 1;
          }
        }),
        false,
        '[Cart] Reduce Item Quantity'
      ),
    clearCart: () => {
      set({ items: [] }, false, '[Cart] Clear');
    },
  }))
);
