<script lang="ts">
  export let title: string = "Support 24/7";
  export let description: string =
    "Hỗ trợ tìm hàng, báo giá nhanh trong 5 phút";
</script>

<div
  class="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-4"
>
  <!-- Tiêu đề -->
  <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
    {title}
  </h1>
  <!-- Đường kẻ gạch dưới -->
  <div class="w-16 h-1 bg-orange-500 mx-auto my-1"></div>
  <!-- Mô tả -->
  <p class="text-gray-700 dark:text-gray-300 text-center mb-4">
    {description}
  </p>

  <!-- Nội dung hỗ trợ -->
  <div class="flex flex-row gap-4">
    <!-- Zalo Chat -->
    <a
      href="https://zalo.me/123456789"
      target="_blank"
      rel="noopener noreferrer"
      class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <h2 class="text-lg font-semibold mb-2">Zalo Chat</h2>
      <div class="flex items-center">
        <img
          src="https://i.pravatar.cc/48"
          alt="Zalo Avatar"
          class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white"
        />
        <span class="text-sm"> Zalo Support Team </span>
      </div>
    </a>

    <!-- Message Chat -->
    <a
      href="https://m.me/your-facebook-page"
      target="_blank"
      rel="noopener noreferrer"
      class="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <h2 class="text-lg font-semibold mb-2">Message Chat</h2>
      <div class="flex items-center">
        <img
          src="https://i.pravatar.cc/48"
          alt="Message Avatar"
          class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white"
        />
        <span class="text-sm"> Message Support Team </span>
      </div>
    </a>
  </div>
</div>
