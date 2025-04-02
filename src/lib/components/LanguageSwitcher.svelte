<script>
  import { _ } from "svelte-i18n"; // Hàm dịch
  import { locale } from "svelte-i18n"; // Để thay đổi ngôn ngữ
  import "../lib/i18n";

  export let changeLanguage;
  export let $locale;
</script>

<div class="flex justify-end gap-2 mb-4">
  <button
    on:click={() => changeLanguage("vi")}
    class="px-2 py-1 text-xs sm:text-sm rounded {$locale === 'vi'
      ? 'bg-orange-500 text-white'
      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}"
  >
    VI
  </button>
  <button
    on:click={() => changeLanguage("en")}
    class="px-2 py-1 text-xs sm:text-sm rounded {$locale === 'en'
      ? 'bg-orange-500 text-white'
      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}"
  >
    EN
  </button>
  <button
    on:click={() => changeLanguage("zh")}
    class="px-2 py-1 text-xs sm:text-sm rounded {$locale === 'zh'
      ? 'bg-orange-500 text-white'
      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}"
  >
    ZH
  </button>
</div>
