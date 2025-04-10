<script lang="ts">
  export let activeTab: string;
  export let onTabChange: (tab: string) => void;
</script>

<div
  class="flex justify-center space-x-4 mb-6 border-b border-gray-300 dark:border-gray-700"
>
  <button
    class={`py-2 px-4 font-semibold text-sm sm:text-base border-b-2 transition-all ${
      activeTab === "top-sellers"
        ? "text-blue-500 border-blue-500"
        : "text-gray-600 dark:text-gray-400 border-transparent"
    }`}
    on:click={() => onTabChange("top-sellers")}
  >
    Top Nhà Bán Hàng
  </button>
  <button
    class={`py-2 px-4 font-semibold text-sm sm:text-base border-b-2 transition-all ${
      activeTab === "top-products"
        ? "text-blue-500 border-blue-500"
        : "text-gray-600 dark:text-gray-400 border-transparent"
    }`}
    on:click={() => onTabChange("top-products")}
  >
    Top Sản Phẩm Bán Chạy
  </button>
  <button
    class={`py-2 px-4 font-semibold text-sm sm:text-base border-b-2 transition-all ${
      activeTab === "monthly-deals"
        ? "text-blue-500 border-blue-500"
        : "text-gray-600 dark:text-gray-400 border-transparent"
    }`}
    on:click={() => onTabChange("monthly-deals")}
  >
    Ưu Đãi Trong Tháng
  </button>
  <button
    class={`py-2 px-4 font-semibold text-sm sm:text-base border-b-2 transition-all ${
      activeTab === "potential-products"
        ? "text-blue-500 border-blue-500"
        : "text-gray-600 dark:text-gray-400 border-transparent"
    }`}
    on:click={() => onTabChange("potential-products")}
  >
    Top Sản Phẩm Tiềm Năng
  </button>
  <button
    class={`py-2 px-4 font-semibold text-sm sm:text-base border-b-2 transition-all ${
      activeTab === "supplier-discounts"
        ? "text-blue-500 border-blue-500"
        : "text-gray-600 dark:text-gray-400 border-transparent"
    }`}
    on:click={() => onTabChange("supplier-discounts")}
  >
    Top Nhà Cung Cấp Giảm Sâu
  </button>
</div>
