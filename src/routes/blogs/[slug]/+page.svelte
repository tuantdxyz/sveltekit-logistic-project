<script>
  import { blogs } from "$lib/data/blogs";
  import { error } from "@sveltejs/kit";

  export let data;

  const blog = blogs.find((b) => b.slug === data.slug);

  if (!blog) {
    throw error(404, "Blog post not found");
  }
</script>

<section
  class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="container mx-auto px-4">
    <!-- Back to Blogs and Home -->
    <div
      class="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-2 px-4 flex justify-between items-center"
    >
      <!-- Quay lại Home -->
      <a href="/" class="text-orange-500 hover:underline text-sm font-medium">
        &larr; Home
      </a>

      <!-- Back to Blogs -->
      <a
        href="/blogs"
        class="text-orange-500 hover:underline text-sm font-medium"
      >
        Blogs &rarr;
      </a>
    </div>

    <!-- Blog Content -->
    <article
      class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <!-- Image -->
      <img
        src={blog.image}
        alt={blog.title}
        class="w-full max-w-full h-auto object-cover"
        style="max-height: 400px; max-width: 600px; margin: 0 auto;"
      />

      <!-- Content -->
      <div class="p-6">
        <span
          class="inline-block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2"
        >
          {blog.category}
        </span>
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
          By {blog.author}
        </p>
        <div class="prose dark:prose-invert max-w-none text-justify">
          {@html blog.content}
        </div>
      </div>
    </article>
  </div>
</section>
