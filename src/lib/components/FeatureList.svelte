<!-- src/lib/components/FeatureList.svelte -->
<script lang="ts">
  export let features = [
    {
      title: "ESlint & Prettier",
      description: "For clean, consistent, and error-free code.",
      link: "/eslint-prettier",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m0-6h6m-6 0H6'/></svg>",
    },
    {
      title: "Extremely strict TypeScript",
      description: "With `ts-reset` library for ultimate type safety.",
      link: "/typescript",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15'/></svg>",
    },
    {
      title: "Bundle analyzer plugin",
      description: "Keep an eye on your bundle size.",
      link: "/bundle-analyzer",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M3 12h18m-9-9v18'/></svg>",
    },
    // {
    //   title: "Jest & React Testing Library",
    //   description: "For rock-solid unit and integration tests.",
    //   link: "/jest-testing",
    //   icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 3v18m9-9H3'/></svg>",
    // },
  ];

  export let customClass: string = "";
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 {customClass}">
  {#each features as feature}
    <a
      href={feature.link}
      class="flex flex-col items-center p-4 transition-transform hover:scale-105 hover:text-blue-500"
    >
      <div class="mb-4">{@html feature.icon}</div>
      <h3 class="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
      <p class="text-gray-300">{feature.description}</p>
    </a>
  {/each}
</div>
