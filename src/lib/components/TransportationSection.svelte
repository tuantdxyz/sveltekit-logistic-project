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

  // Props để tùy chỉnh nếu cần
  export let backgroundImage: string = "/images/logistics-bg01.jpg";
</script>

<section
  class="relative py-16 bg-cover bg-center text-gray-900 dark:text-gray-100"
  style="background-image: url({backgroundImage})"
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>

  <!-- Content -->
  <div class="relative container mx-auto px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
      Our Services
    </h2>
    <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
      Explore our wide range of logistics services designed to meet your needs.
    </p>

    <!-- Service Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as { title, link, icon }}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg"
        >
          <img
            src={icon}
            alt={title}
            class="w-16 h-16 mb-4 group-hover:opacity-80"
          />
          <h3
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center"
          >
            {title}
          </h3>
        </a>
      {/each}
    </div>
  </div>
</section>
