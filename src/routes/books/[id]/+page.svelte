<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;
  let title: string = data.book.title;
  let author: string = data.book.author;
  let price: number = data.book.price;

  async function updateBook(): Promise<void> {
    const res = await fetch("/books", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data.book.id,
        title,
        author,
        price: Number(price),
      }),
    });
    if (res.ok) goto("/books");
  }
</script>

<div class="container mx-auto p-6 max-w-2xl">
  <h1 class="text-4xl font-extrabold text-gray-800 mb-8 text-center">
    Edit Book
  </h1>
  <form
    on:submit|preventDefault={updateBook}
    class="p-6 bg-white rounded-lg shadow-md border border-gray-200 space-y-6"
  >
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700 mb-1"
        >Title</label
      >
      <input
        id="title"
        bind:value={title}
        placeholder="Enter book title"
        class="input input-bordered w-full bg-blue-50 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-100 transition duration-200"
      />
    </div>
    <div>
      <label for="author" class="block text-sm font-medium text-gray-700 mb-1"
        >Author</label
      >
      <input
        id="author"
        bind:value={author}
        placeholder="Enter author name"
        class="input input-bordered w-full bg-blue-50 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-100 transition duration-200"
      />
    </div>
    <div>
      <label for="price" class="block text-sm font-medium text-gray-700 mb-1"
        >Price</label
      >
      <input
        id="price"
        type="number"
        step="0.01"
        bind:value={price}
        placeholder="Enter price"
        class="input input-bordered w-full bg-blue-50 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-100 transition duration-200"
      />
    </div>
    <div class="flex justify-end gap-4">
      <button
        type="submit"
        class="btn btn-primary py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
      >
        Update
      </button>
      <a
        href="/books"
        class="btn btn-secondary py-2 px-6 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
      >
        Back
      </a>
    </div>
  </form>
</div>
