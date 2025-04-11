<script>
  import { blogs } from "$lib/data/blogs";
</script>

<section
  class="min-h-screen py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="container mx-auto px-4">
    <!-- Tiêu đề và Quay lại Home -->
    <div class="flex items-center justify-between">
      <!-- Quay lại Home -->
      <a href="/" class="text-orange-500 text-3xl sm:text-4xl font-bold">
        Home &larr;
      </a>

      <!-- Tiêu đề -->
      <h1 class="text-3xl sm:text-4xl font-bold">Blog Posts</h1>
    </div>
    <hr class="border-t-4 border-orange-500 mb-8" />

    <!-- Blog List -->
    <div class="flex flex-wrap gap-6">
      {#each blogs as blog}
        <a
          href={`/blogs/${blog.slug}`}
          class="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 w-full sm:w-[48%] lg:w-[32%]"
        >
          <!-- Image -->
          <div class="w-full">
            <img
              src={blog.image}
              alt={blog.title}
              class="w-full h-48 object-cover"
            />
          </div>
          <!-- Content -->
          <div class="p-4 flex-1">
            <span
              class="inline-block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2"
            >
              {blog.category}
            </span>
            <h3 class="text-lg font-semibold mb-2 hover:text-orange-500">
              {blog.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              By {blog.author}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
