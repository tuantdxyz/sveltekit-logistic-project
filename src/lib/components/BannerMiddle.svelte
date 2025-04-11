<script>
  import { _, locale } from "svelte-i18n";
  import { derived } from "svelte/store";

  let showModal = false;
  let showConfirmation = false;
  let emailError = "";
  let phoneError = "";

  const services = derived(locale, () => [
    { name: $_("exportToUSA"), savings: "51%", selected: false },
    { name: $_("exportToEurope"), savings: "45%", selected: false },
    { name: $_("exportToAsiaPacific"), savings: "44%", selected: false },
    { name: $_("importFromJapan"), savings: "49%", selected: false },
    { name: $_("importFromChina"), savings: "49%", selected: false },
  ]);

  let email = "";
  let phone = "";

  function sendDiscountCode() {
    if (!email) emailError = $_("errorEmailRequired");
    if (!phone) phoneError = $_("errorPhoneRequired");
    if (emailError || phoneError) return;

    const selectedServices = $services.filter((service) => service.selected);
    if (selectedServices.length === 0) {
      alert($_("errorNoServiceSelected"));
      return;
    }
    showConfirmation = true;
    showModal = false;
  }
</script>

<div class="section banner-container">
  <div class="banner-wrapper">
    <div
      class="banner skinny blue flex flex-col sm:flex-row p-6 sm:p-8 bg-blue-500 text-white min-h-[200px]"
    >
      <div class="flex flex-col justify-center text-left pl-4 sm:pl-8 flex-[2]">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
          {$_("bannerTitle")}
        </h2>
        <p class="text-base sm:text-lg text-white">
          {$_("bannerDescription")}
          <span class="text-xl sm:text-2xl font-semibold text-yellow-300 ml-2"
            >{$_("pricePerKg")}</span
          >
        </p>
      </div>
      <div class="flex-[1] flex justify-center items-center mt-4 sm:mt-0">
        <button
          on:click={() => (showModal = true)}
          class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-200"
        >
          {$_("getOfferButton")}
        </button>
      </div>
    </div>
  </div>
</div>

{#if showModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-lg shadow-lg max-w-4xl w-full mx-4"
    >
      <h3
        class="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center"
      >
        {$_("servicesTableTitle")}
      </h3>

      <table
        class="w-full border-collapse border border-gray-300 dark:border-gray-600"
      >
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th
              class="border border-gray-300 dark:border-gray-600 p-2 text-left text-xs sm:text-sm"
              >{$_("serviceName")}</th
            >
            <th
              class="border border-gray-300 dark:border-gray-600 p-2 text-left text-xs sm:text-sm"
              >{$_("serviceSavings")}</th
            >
            <th
              class="border border-gray-300 dark:border-gray-600 p-2 text-center text-xs sm:text-sm"
              >{$_("serviceSelect")}</th
            >
          </tr>
        </thead>
        <tbody>
          {#each $services as service, index}
            <tr>
              <td
                class="border border-gray-300 dark:border-gray-600 p-2 text-sm"
                >{service.name}</td
              >
              <td
                class="border border-gray-300 dark:border-gray-600 p-2 text-sm"
                >{service.savings}</td
              >
              <td
                class="border border-gray-300 dark:border-gray-600 p-2 text-center"
              >
                <input
                  type="checkbox"
                  bind:checked={service.selected}
                  class="form-checkbox h-5 w-5 text-orange-500"
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

      <div class="space-y-4 mt-6">
        <div>
          <label
            for="email"
            class="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
            >{$_("emailLabel")}</label
          >
          <input
            id="email"
            type="email"
            bind:value={email}
            class="w-full p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder={$_("emailPlaceholder")}
          />
          {#if emailError}
            <p class="text-xs text-red-500 mt-1">{emailError}</p>
          {/if}
        </div>
        <div>
          <label
            for="phone"
            class="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
            >{$_("phoneLabel")}</label
          >
          <input
            id="phone"
            type="number"
            bind:value={phone}
            min="0"
            class="w-full p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder={$_("phonePlaceholder")}
          />
          {#if phoneError}
            <p class="text-xs text-red-500 mt-1">{phoneError}</p>
          {/if}
        </div>
      </div>

      <button
        on:click={sendDiscountCode}
        class="mt-6 w-full bg-orange-500 text-white text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors"
      >
        {$_("sendDiscountButton")}
      </button>
      <button
        on:click={() => (showModal = false)}
        class="mt-4 w-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
      >
        {$_("closeButton")}
      </button>
    </div>
  </div>
{/if}

{#if showConfirmation}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center"
    >
      <h3
        class="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-4"
      >
        {$_("confirmationTitle")}
      </h3>
      <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
        {$_("confirmationMessage")}
      </p>
      <p class="text-sm text-gray-800 dark:text-gray-200 font-semibold">
        {$_("hotline")}
      </p>
      <button
        on:click={() => (showConfirmation = false)}
        class="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors"
      >
        {$_("closeButton")}
      </button>
    </div>
  </div>
{/if}
