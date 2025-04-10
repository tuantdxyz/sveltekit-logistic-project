<script>
  const images = [
    { src: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg", width: 840, height: 300 },
    { src: "https://images.unsplash.com/photo-1689217634234-38efb49cb664", width: 800, height: 300 },
    { src: "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c", width: 600, height: 200 },
    { src: "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg", width: 1042, height: 200 },
    { src: "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg", width: 1650, height: 250 },
  ];
</script>

<section
  class="relative py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="relative container mx-auto max-w-[1650px]">
    <h2
      class="text-2xl sm:text-4xl font-bold text-center text-black dark:text-white mb-4"
    >
      Velog Gallery
    </h2>
    <div class="w-16 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>

    <!-- Gallery -->
    <div class="flex flex-wrap justify-between gap-2 max-w-[1650px] mx-auto">
      {#each images as image, index}
        <div
          class="relative flex-none bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group mobile-style"
          style="width: {image.width}px; height: {image.height}px;"
        >
          <img
            src={image.src}
            alt={`Gallery image ${index + 1}`}
            class="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Mobile-specific styles */
  @media (max-width: 640px) {
    .mobile-style {
      width: 48%; /* 2 ảnh trên một dòng */
      height: auto; /* Tự động điều chỉnh chiều cao */
    }
  }
</style>