<script lang="ts">
  import { _ } from "svelte-i18n";
  import TimelineSection from '$lib/components/TimelineSection.svelte';

  interface Service {
    title: string;
    link: string;
    icon: string;
  }

  const services: Service[] = [
    {
      title: $_("services.expressShipping"),
      link: "#",
      icon: "/src/icons/express-shipping.svg",
    },
    {
      title: $_("services.competitiveRates"),
      link: "#",
      icon: "/src/icons/competitive-rates.svg",
    },
    {
      title: $_("services.fullInsurance"),
      link: "#",
      icon: "/src/icons/full-insurance.svg",
    },
    {
      title: $_("services.trendSupport"),
      link: "#",
      icon: "/src/icons/trend-support.svg",
    },

    {
      title: $_("services.fullProcedure"),
      link: "#",
      icon: "/src/icons/full-procedure.svg",
    },
    {
      title: $_("services.quoteIn5Minutes"),
      link: "#",
      icon: "/src/icons/quote-in-5-minutes.svg",
    },
    {
      title: $_("services.support247"),
      link: "#",
      icon: "/src/icons/support-247.svg",
    },
    {
      title: $_("services.diversePayment"),
      link: "#",
      icon: "/src/icons/multi-payment.svg",
    },
    {
      title: $_("services.bulkyTransport"),
      link: "#",
      icon: "/src/icons/bulky-shipping.svg",
    },
    {
      title: $_("services.loyaltyDiscount"),
      link: "#",
      icon: "/src/icons/loyalty-rewards.svg",
    },
  ];
</script>

<section
  class="relative py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="relative container mx-auto px-4">
    <h2
      class="text-2xl sm:text-4xl font-bold text-center text-black dark:text-white mb-4"
    >
      {$_("commitmentTitle")}
    </h2>
    <div class="w-16 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>

    <p
      class="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-10 max-w-2xl mx-auto"
    >
      {$_("commitmentDescription")}
    </p>

    <div class="flex flex-wrap justify-start sm:justify-center gap-3">
      {#each services as { title, link, icon }}
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-transform hover:scale-105 hover:shadow-lg opacity-90 hover:opacity-100 w-[48%] sm:w-[48%] lg:w-[18%] max-w-[300px] min-w-[140px]"
        >
          <img src={icon} alt={title} class="w-14 h-14 mb-3 sm:mb-4" />
          <h3
            class="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center"
          >
            {title}
          </h3>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- xe tai ngan cach -->
  <div class="btImage mt-4 flex justify-center">
    <img
      decoding="async"
      src="/src/icons/truck-vignette-gray.png"
      alt="truck-vignette-gray"
      class="max-w-full h-auto"
    />
  </div>

  <!-- <TimelineSection /> -->
</section>
