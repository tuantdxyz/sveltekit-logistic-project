<script lang="ts">
    const items = [
      "Kho hàng",
      "Vận chuyển bằng máy bay",
      "Vận chuyển bằng tàu biển",
      "Vận chuyển bằng đường bộ"
    ];
  </script>
  
  <section class="bg-white dark:bg-gray-900 py-16 transition-colors duration-500">
    <div class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      <!-- Left: Heading and description -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
          Chính sách giá linh hoạt &amp; Kinh nghiệm <span class="text-blue-600">vài thập kỷ!</span>
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Chúng tôi tự hào cung cấp dịch vụ vận tải và giao hàng tốt nhất trên toàn thế giới. Nhân viên lành nghề của chúng tôi, sử dụng phần mềm truyền thông, theo dõi và xử lý, kết hợp với nhiều năm kinh nghiệm! Thông qua các giải pháp chuỗi cung ứng tích hợp, Equita mang đến lợi thế cạnh tranh bền vững cho một số công ty lớn nhất của Úc.
        </p>
        <div class="mt-6">
          <a
            href="#"
            class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Tìm hiểu thêm về Kho hàng
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
            </svg>
          </a>
        </div>
      </div>
  
      <!-- Right: List of progress titles -->
      <div class="w-full md:w-1/2 space-y-6">
        {#each items as item (item)}
          <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">{item}</h4>
          </div>
        {/each}
      </div>
    </div>
  </section>
  