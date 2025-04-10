<script lang="ts">
  import Tabs from "$lib/components/rank/Tabs.svelte";
  import TabContent from "$lib/components/rank/TabContent.svelte";
  import Notification from "$lib/components/rank/Notification.svelte";

  import type {
    VendorProduct,
    Product,
    ServiceDiscount,
    PotentialProduct,
    SupplierDiscount,
  } from "../models";

  const sellers: VendorProduct[] = [
    {
      rank: 1,
      avatar: "https://via.placeholder.com/48",
      name: "Apple",
      description: "Công nghệ và thiết bị thông minh",
      points: 1500,
    },
    {
      rank: 2,
      avatar: "https://via.placeholder.com/48",
      name: "Gucci",
      description: "Thời trang cao cấp",
      points: 1400,
    },
    {
      rank: 3,
      avatar: "https://via.placeholder.com/48",
      name: "Samsung",
      description: "Điện tử và thiết bị gia dụng",
      points: 1350,
    },
  ];

  const products: Product[] = [
    {
      rank: 1,
      image: "https://via.placeholder.com/48",
      name: "iPhone 14 Pro Max",
      sold: 3200,
    },
    {
      rank: 2,
      image: "https://via.placeholder.com/48",
      name: "Gucci Handbag",
      sold: 2800,
    },
    {
      rank: 3,
      image: "https://via.placeholder.com/48",
      name: "Samsung Galaxy S23 Ultra",
      sold: 2500,
    },
  ];

  const services: ServiceDiscount[] = [
    {
      serviceName: "Vận chuyển bay 247",
      originalPrice: "100k/1kg",
      discountedPrice: "56k/1kg",
    },
    {
      serviceName: "Vận chuyển cồng kềnh",
      originalPrice: "150k/1kg",
      discountedPrice: "69k/1kg",
    },
    {
      serviceName: "Giao hàng tiêu chuẩn",
      originalPrice: "30k/1kg",
      discountedPrice: "15k/1kg",
    },
  ];

  const potentialProducts: PotentialProduct[] = [
    {
      name: "Apple Vision Pro",
      category: "Thiết bị thực tế ảo",
      potentialScore: 95,
      image: "https://via.placeholder.com/48",
    },
    {
      name: "Xe điện Tesla Model 3",
      category: "Phương tiện giao thông",
      potentialScore: 90,
      image: "https://via.placeholder.com/48",
    },
    {
      name: "Máy lọc không khí Dyson",
      category: "Gia dụng thông minh",
      potentialScore: 85,
      image: "https://via.placeholder.com/48",
    },
  ];

  const supplierDiscounts: SupplierDiscount[] = [
    {
      supplierName: "Fashionista",
      discountRate: "50%",
      description: "Thời trang cao cấp, giảm mạnh tới 50%",
      logo: "https://via.placeholder.com/48",
    },
    {
      supplierName: "Tech World",
      discountRate: "35%",
      description: "Thiết bị công nghệ giảm giá bất ngờ",
      logo: "https://via.placeholder.com/48",
    },
    {
      supplierName: "Home Plus",
      discountRate: "40%",
      description: "Gia dụng thông minh, giảm tới 40%",
      logo: "https://via.placeholder.com/48",
    },
  ];

  let activeTab: string = "top-sellers"; // Tab mặc định
</script>

<section
  class="relative py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="flex flex-col lg:flex-row gap-6 w-full px-6">
    <!-- Div 1: Nội dung rank -->
    <div class="lg:w-3/5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <!-- Tiêu đề -->
      <h2
        class="text-2xl sm:text-4xl font-bold text-center text-black dark:text-white mb-4"
      >
        Gợi ý Hàng Đầu
        <div class="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </h2>

      <Tabs {activeTab} onTabChange={(tab) => (activeTab = tab)} />

      <TabContent
        {activeTab}
        {sellers}
        {products}
        {services}
        {potentialProducts}
        {supplierDiscounts}
      />
    </div>
    <!-- Div 2: Thông báo mới nhất -->
    <Notification />
  </div>
</section>
