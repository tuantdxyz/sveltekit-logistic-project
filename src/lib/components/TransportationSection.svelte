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
      link: "#",
      icon: "/icons/icon-contract-logistics-1.svg",
    },
    {
      title: "Cargo Transportation",
      link: "#",
      icon: "/icons/icon-source-optimization.svg",
    },
    {
      title: "Warehousing & Storage",
      link: "#",
      icon: "/icons/icon-warehousing-and-storage.svg",
    },
    {
      title: "Retail & Transit Packaging",
      link: "#",
      icon: "/icons/icon-retail-and-transit.svg",
    },
  ];
</script>

<section
  class="relative py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <!-- Content -->
  <div class="relative container mx-auto px-4">
    <h2
      class="text-3xl sm:text-4xl font-bold text-center text-black dark:text-gray-100 mb-4"
    >
      Our Services
    </h2>
    <!-- Đường kẻ gạch dưới -->
    <div class="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>

    <p
      class="text-center text-gray-800 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
    >
      Explore our wide range of logistics services designed to meet your needs.
    </p>

    <!-- Service Cards -->
    <div class="flex flex-wrap justify-center gap-6">
      {#each services as { title, link, icon }}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg opacity-90 hover:opacity-100"
        >
          <img
            src={icon}
            alt={title}
            class="w-16 h-16 mb-4 group-hover:opacity-80"
          />
          <h3
            class="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-gray-900 dark:group-hover:text-white"
          >
            {title}
          </h3>
        </a>
      {/each}
    </div>
  </div>
</section>
