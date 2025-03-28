import { writable } from "svelte/store";

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

export const booksStore = writable<Book[]>([]);
