<!-- src/lib/components/TransportationSection.svelte -->
<script lang="ts">
  // Định nghĩa type cho các dịch vụ
  interface Service {
    title: string;
    link: string;
    icon: string;
  }

  // Danh sách dịch vụ
  const services: Service[] = [
    {
      title: "Supply Chain Planning",
      link: "https://globallogistics.themerex.net/services/supply-chain-planning/",
      icon: "icon-contract-logistics-1",
    },
    {
      title: "Cargo Transportation",
      link: "https://globallogistics.themerex.net/services/sea-transportation/",
      icon: "icon-source-optimization",
    },
    {
      title: "Warehousing & Storage",
      link: "https://globallogistics.themerex.net/services/warehouse-services/",
      icon: "icon-warehousing-and-storage",
    },
    {
      title: "Retail & Transit Packaging",
      link: "https://globallogistics.themerex.net/services/customs-clearance/",
      icon: "icon-retail-and-transit",
    },
  ];

  // Props để tùy chỉnh nếu cần
  export let backgroundImage: string = "/images/logistics-bg01.jpg";
</script>

<section
  class="relative py-12 bg-cover bg-top bg-no-repeat h-[600px] overflow-hidden bg-[url('{backgroundImage}')]"
>
  <div class="container mx-auto px-4 max-w-5xl">
    <!-- Spacer đầu tiên -->
    <div class="h-52" />

    <!-- Nội dung chính -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Cột trái: Tiêu đề -->
      <div>
        <div class="text-white">
          <span class="block text-lg font-medium mb-2">We offer you</span>
          <h1 class="text-4xl font-bold">
            Full range of transportation services
          </h1>
        </div>
      </div>

      <!-- Cột phải: Mô tả -->
      <div class="text-gray-300">
        <p>
          Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.
        </p>
        <p class="mt-4">
          Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>

    <!-- Spacer giữa -->
    <div class="h-24" />

    <!-- Danh sách dịch vụ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as service}
        <div class="flex flex-col items-center text-center text-white">
          <span class="{service.icon} text-4xl mb-4" />
          <h4 class="text-xl font-semibold mb-2">
            <a href={service.link} class="hover:underline">{service.title}</a>
          </h4>
          <a
            href={service.link}
            class="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <span>Read More</span>
            <span class="ml-2">→</span>
          </a>
        </div>
      {/each}
    </div>

    <!-- Spacer cuối -->
    <div class="h-52" />
  </div>
</section>

<style lang="postcss">
  /* Giả lập các icon (cần thay bằng icon thực tế trong dự án) */
  .icon-contract-logistics-1::before {
    content: "🚚";
  }
  .icon-source-optimization::before {
    content: "⛴️";
  }
  .icon-warehousing-and-storage::before {
    content: "🏢";
  }
  .icon-retail-and-transit::before {
    content: "📦";
  }
</style>
