<script lang="ts">
  import SupportChat from "$lib/components/rank/SupportChat.svelte";
  import NotiNewIcon from "$icons/NotiNewIcon.svg";
</script>

<div class="lg:w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <h3
    class="flex items-center text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-4"
  >
    <span>Thông Báo Mới Nhất</span>
    <img src={NotiNewIcon} alt="New" class="w-6 h-6 ml-2" />
  </h3>
  <ul class="space-y-3">
    <li class="flex items-start">
      <span class="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-3"></span>
      <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300">
        Ưu đãi giảm giá 50% cho tất cả các sản phẩm thời trang từ Gucci.
      </p>
    </li>
    <li class="flex items-start">
      <span class="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-3"></span>
      <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300">
        Samsung giảm giá 35% cho các thiết bị công nghệ mới nhất.
      </p>
    </li>
    <li class="flex items-start">
      <span class="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-3"></span>
      <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300">
        Nike ưu đãi 40% cho các sản phẩm thể thao.
      </p>
    </li>
  </ul>

  <!-- Div 3: Hỗ trợ 24/7 -->
  <SupportChat />
</div>
