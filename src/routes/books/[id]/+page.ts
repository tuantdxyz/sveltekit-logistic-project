import type { PageLoad } from "./$types";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch("/books");
  const books: Book[] = await res.json();
  //   console.log('found book1:', book);
  const book = books.find((b) => b.id === Number(params.id));
  console.log("found book2:", book);
  if (book) return { book };
  throw new Error("Book not found");
};
