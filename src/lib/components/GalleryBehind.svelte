<script>
  const images = [
    {
      src: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg",
      // width: 1000,
      // height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1689217634234-38efb49cb664",
      // width: 790,
      // height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c",
      // width: 400,
      // height: 200,
    },
    {
      src: "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg",
      // width: 1000,
      // height: 200,
    },
    // {
    //   src: "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg",
    //   width: 1600,
    //   height: 250,
    // },
  ];
</script>

<section
  class="relative py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="relative">
    <h2
      class="text-2xl sm:text-4xl font-bold text-center text-black dark:text-white mb-2"
    >
      Velog Gallery Story
    </h2>
    <div class="w-16 h-1 bg-orange-500 mx-auto mb-6 sm:mb-6"></div>

    <!-- Gallery using flex -->
    <div class="flex flex-wrap justify-center gap-4 px-4">
      {#each images as image, index}
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-transform duration-300 ease-in-out group-hover:scale-105"
          style="flex: 1 1 calc(50% - 1rem); max-width: calc(50% - 1rem);"
        >
          <img
            src={image.src}
            alt={`Gallery image ${index + 1}`}
            class="object-cover w-full h-auto aspect-[5/2]"
          />
        </div>
      {/each}
    </div>
  </div>
</section>
