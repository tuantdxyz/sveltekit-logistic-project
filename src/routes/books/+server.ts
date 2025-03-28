import { json, type RequestHandler } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";

const dbPath = path.resolve("data/books.json");

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

async function readBooks(): Promise<Book[]> {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data) as Book[];
}

async function writeBooks(books: Book[]): Promise<void> {
  await fs.writeFile(dbPath, JSON.stringify(books, null, 2), "utf-8");
}

export const GET: RequestHandler = async () => {
  const books = await readBooks();
  return json(books);
};

export const POST: RequestHandler = async ({ request }) => {
  const books = await readBooks();
  const { title, author, price } = (await request.json()) as Omit<Book, "id">;

  // Tìm id lớn nhất hiện có và tăng lên 1
  const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
  const newId = maxId + 1;

  const newBook: Book = { id: newId, title, author, price };
  books.push(newBook);
  await writeBooks(books);
  return json(newBook, { status: 201 });
};

export const PUT: RequestHandler = async ({ request }) => {
  const books = await readBooks();
  const { id, title, author, price } = (await request.json()) as Book;
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, title, author, price };
    await writeBooks(books);
    return json(books[bookIndex]);
  }
  return json({ error: "Book not found" }, { status: 404 });
};

export const DELETE: RequestHandler = async ({ request }) => {
  const books = await readBooks();
  const { id } = (await request.json()) as { id: number };
  const updatedBooks = books.filter((b) => b.id !== id);
  await writeBooks(updatedBooks);
  return json({ success: true });
};
