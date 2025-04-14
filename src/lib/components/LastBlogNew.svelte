<script>
  import { blogs } from "$lib/data/blogs";

  // Lấy các bài viết mới nhất theo `order`
  const latestBlogs = blogs
    .sort((a, b) => a.order - b.order) // Sắp xếp theo `order`
    .slice(0, 4); // Lấy 3 bài viết đầu tiên
</script>

<section
  class="relative py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="relative px-6">
    <!-- Tiêu đề và nút -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Bài viết mới nhất
        <div class="w-16 h-1 bg-orange-500 mt-2"></div>
      </h2>
      <div class="flex flex-col items-end">
        <p class="text-xs sm:text-sm lg:text-base text-orange-500 font-medium">
          <a href="/blogs">Xem tất cả bài viết</a>
        </p>
        <div class="w-16 h-1 bg-white mt-2"></div>
      </div>
    </div>

    <!-- Blog Cards -->
    <div class="flex flex-wrap gap-2 justify-center">
      {#each latestBlogs as blog}
        <a
          href={`/blogs/${blog.slug}`}
          class="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 w-[48%] sm:w-[48%] lg:w-[23%]"
        >
          <!-- Image -->
          <div class="w-full">
            <img
              src={blog.image}
              alt={blog.title}
              class="w-full h-40 sm:h-48 lg:h-56 object-cover"
            />
          </div>
          <!-- Content -->
          <div class="p-4 flex-1">
            <span
              class="inline-block text-xs sm:text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-400 mb-2"
            >
              {blog.category}
            </span>
            <h3 class="text-sm sm:text-base lg:text-lg font-semibold mb-2 hover:text-orange-500">
              {blog.title}
            </h3>
            <p class="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
              By {blog.author}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
