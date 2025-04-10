<script lang="ts">
  let imageGalleryOpened = false;
  let imageGalleryActiveUrl: string | null = null;
  let imageGalleryImageIndex: number | null = null;

  const images = [
    "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg",
    "https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg",
    "https://images.unsplash.com/photo-1689217634234-38efb49cb664",
    "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c",
    "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg",
    "https://cdn.devdojo.com/images/june2023/mountains-06.jpeg",
    "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg",
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg",
    "https://images.unsplash.com/photo-1541795083-1b160cf4f3d7",
  ];

  function openImageGallery(index: number) {
    imageGalleryImageIndex = index;
    imageGalleryActiveUrl = images[index];
    imageGalleryOpened = true;
  }

  function closeImageGallery() {
    imageGalleryOpened = false;
    imageGalleryActiveUrl = null;
  }

  function nextImage() {
    if (imageGalleryImageIndex !== null) {
      imageGalleryImageIndex = (imageGalleryImageIndex + 1) % images.length;
      imageGalleryActiveUrl = images[imageGalleryImageIndex];
    }
  }

  function prevImage() {
    if (imageGalleryImageIndex !== null) {
      imageGalleryImageIndex =
        (imageGalleryImageIndex - 1 + images.length) % images.length;
      imageGalleryActiveUrl = images[imageGalleryImageIndex];
    }
  }
</script>

<section class="px-4 py-2 mx-auto max-w-7xl">
  <div class="text-center">
    <h1
      class="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100"
    >
      <span
        class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500"
      >
        Here's to the crazy ones
      </span>
    </h1>
  </div>

  <!-- Gallery -->
  <div class="flex flex-wrap gap-4 justify-center">
    {#each images as image, index}
      <button
        class="relative flex-none w-40 h-56 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
        on:click={() => openImageGallery(index)}
      >
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          class="object-cover w-full h-full"
        />
      </button>
    {/each}
  </div>

  <!-- Modal -->
  {#if imageGalleryOpened}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      on:click={closeImageGallery}
    >
      <div
        class="relative flex items-center justify-center w-11/12 max-w-4xl bg-black"
        on:click|stopPropagation
      >
        <button
          class="absolute left-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          on:click={prevImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <img
          src={imageGalleryActiveUrl}
          alt="Active gallery image"
          class="object-contain w-full max-h-screen"
        />
        <button
          class="absolute right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
          on:click={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</section>
