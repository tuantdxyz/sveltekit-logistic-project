<script lang="ts">
  import { goto } from "$app/navigation";
  import { booksStore } from "$lib/store";
  import { onMount } from "svelte";

  let newTitle: string = "";
  let newAuthor: string = "";
  let newPrice: string = "";

  // Lấy dữ liệu ban đầu từ API
  onMount(async () => {
    const res = await fetch("/books");
    const books = await res.json();
    $booksStore = books; // Gán dữ liệu vào store
  });

  async function addBook(): Promise<void> {
    if (!newTitle || !newAuthor || !newPrice) return;
    const res = await fetch("/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        author: newAuthor,
        price: Number(newPrice),
      }),
    });
    if (res.ok) {
      const newBook = await res.json();
      booksStore.update((books) => [...books, newBook]); // Cập nhật store
      newTitle = "";
      newAuthor = "";
      newPrice = "";
    }
  }

  async function deleteBook(id: number): Promise<void> {
    await fetch("/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    booksStore.update((books) => books.filter((b) => b.id !== id)); // Cập nhật store
  }
</script>

<div class="container mx-auto p-6 max-w-6xl">
  <h1 class="text-4xl font-extrabold text-gray-800 mb-8 text-center">
    Book List
  </h1>

  <form
    on:submit|preventDefault={addBook}
    class="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200"
  >
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="sm:col-span-1">
        <label
          for="newTitle"
          class="block text-sm font-medium text-gray-700 mb-1">Title</label
        >
        <input
          id="newTitle"
          bind:value={newTitle}
          placeholder="Enter book title"
          class="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div class="sm:col-span-1">
        <label
          for="newAuthor"
          class="block text-sm font-medium text-gray-700 mb-1">Author</label
        >
        <input
          id="newAuthor"
          bind:value={newAuthor}
          placeholder="Enter author name"
          class="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div class="sm:col-span-1">
        <label
          for="newPrice"
          class="block text-sm font-medium text-gray-700 mb-1">Price</label
        >
        <input
          id="newPrice"
          type="number"
          step="0.01"
          bind:value={newPrice}
          placeholder="Enter price"
          class="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div class="sm:col-span-1 flex items-end">
        <button
          type="submit"
          class="btn btn-primary w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >Add Book</button
        >
      </div>
    </div>
  </form>

  <ul class="space-y-4">
    {#each $booksStore as book}
      <li
        class="p-4 bg-gray-50 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-100 transition duration-150"
      >
        <a
          href={`/books/${book.id}`}
          class="text-blue-600 hover:underline text-lg"
        >
          {book.title} by {book.author} - ${book.price.toFixed(2)}
        </a>
        <button
          on:click={() => deleteBook(book.id)}
          class="btn btn-error py-2 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >Delete</button
        >
      </li>
    {/each}
  </ul>
</div>
