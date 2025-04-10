<script lang="ts">
  import { _ } from "svelte-i18n"; // Hàm dịch
  import { locale } from "svelte-i18n"; // Để thay đổi ngôn ngữ
  import "../lib/i18n";

  // Import Component
  import HeroSection from "$lib/components/HeroSection.svelte";
  import TransportationSection from "$lib/components/TransportationSection.svelte";
  import BannerMiddle from "$lib/components/BannerMiddle.svelte";
  import RankSection from "$lib/components/RankSection.svelte";
  import GalleryBehind from "$lib/components/GalleryBehind.svelte";
  // import QuickLinks from "$lib/components/QuickLinks.svelte";

  // Khai báo biến
  let trackingId = "";

  function changeLanguage(lang: string) {
    $locale = lang;
  }
</script>

<main class="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
  <!-- Hero Section -->
  <HeroSection bind:trackingId {changeLanguage} />

  <!-- Transportation Section -->
  <!-- <TransportationSection backgroundImage="/images/logistics-bg01.jpg" /> -->

  <BannerMiddle />

  <!-- Quick Links Section -->
  <!-- <QuickLinks /> -->

  <!-- Transportation Section -->
  <TransportationSection />

  <RankSection />

  <GalleryBehind />
</main>
