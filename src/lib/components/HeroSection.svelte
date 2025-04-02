<script>
  import LanguageSwitcher from "./LanguageSwitcher.svelte";

  export let trackingId = "";
  export let changeLanguage;
  export let trackOrder;
  export let handleKeydown;
  export let $_;
  export let $locale;
  export let PricingTopIcon;
  export let TrackingTopIcon;
  export let ShippingTopIcon;
  export let cardClass;
  export let iconClass;
  export let titleClass;
</script>

<section
  class="relative py-12 sm:py-16 bg-cover bg-top bg-no-repeat h-[360px] sm:h-[480px] md:h-[600px] bg-[url('/images/logistics-bg01.jpg')]"
>
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative container mx-auto px-4 max-w-6xl text-center">
    <!-- Language Switcher -->
    <LanguageSwitcher {changeLanguage} {$locale} />

    <h1
      class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
    >
      {$_("welcome")}
    </h1>
    <p class="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
      {$_("description")}
    </p>

    <!-- 3 ô chức năng -->
    <div
      class="flex flex-row gap-3 sm:gap-6 justify-center items-center overflow-x-auto sm:overflow-x-visible"
    >
      <a href="/pricing" class="{cardClass} bg-white dark:bg-gray-800">
        <img src={PricingTopIcon} alt="Pricing Icon" class={iconClass} />
        <h3 class="{titleClass} text-gray-800 dark:text-gray-200">
          {$_("pricing")}
        </h3>
      </a>

      <button class="{cardClass} bg-purple-600 dark:bg-purple-700 text-white">
        <img src={TrackingTopIcon} alt="TrackButton Icon" class={iconClass} />
        <h3 class={titleClass}>{$_("tracking")}</h3>
      </button>

      <a href="/shipping" class="{cardClass} bg-white dark:bg-gray-800">
        <img src={ShippingTopIcon} alt="Shipping Icon" class={iconClass} />
        <h3 class="{titleClass} text-gray-800 dark:text-gray-200">
          {$_("shipping")}
        </h3>
      </a>
    </div>

    <!-- Ô nhập ID Theo dõi -->
    <div
      class="mt-6 sm:mt-8 flex flex-row gap-3 items-center justify-center w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        bind:value={trackingId}
        on:keydown={handleKeydown}
        class="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-sm sm:text-base"
        placeholder={$_("trackingIdPlaceholder")}
      />
      <button
        on:click={trackOrder}
        class="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors text-sm sm:text-base"
      >
        {$_("trackButton")}
      </button>
    </div>
  </div>
</section>
