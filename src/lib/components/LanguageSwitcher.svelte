<script lang="ts">
  import { locale } from "svelte-i18n"; // Import store locale để lấy ngôn ngữ hiện tại
  export let changeLanguage; // Hàm thay đổi ngôn ngữ

  // Danh sách các ngôn ngữ
  const languages = [
    { code: "vi", label: "VI" },
    { code: "en", label: "EN" },
    { code: "zh", label: "ZH" },
  ];
</script>

<div class="flex justify-end gap-2">
  {#each languages as { code, label }}
    <button
      on:click={() => changeLanguage(code)}
      class="px-2 py-1 text-xs sm:text-sm rounded transition-colors {$locale ===
      code
        ? 'bg-orange-500 text-white'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}"
    >
      {label}
    </button>
  {/each}
</div>
