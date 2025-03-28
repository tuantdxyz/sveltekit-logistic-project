import type { PageLoad } from "./$types";

// Định nghĩa type Book
interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("/books");
  const books: Book[] = await res.json();
  return { books };
};
