<script lang="ts">
  import { onMount } from "svelte";
  import type { Service } from "../models"; // Import interface từ models.ts

  let services: Service[] = []; // Sử dụng interface Service

  onMount(async () => {
    const res = await fetch("/logistics");
    services = await res.json();
  });
</script>

<section class="py-12 bg-gray-100">
  <div class="container mx-auto px-4 max-w-6xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
      Dịch Vụ & Mức Giá
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as service}
        <div
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-purple-700 mb-2">
            {service.name}
          </h3>
          <p class="text-gray-600 mb-4">{service.description}</p>
          <p class="text-2xl font-bold text-purple-600 mb-4">
            ${service.price}
          </p>
          <button
            class="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
          >
            Chọn dịch vụ
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>
