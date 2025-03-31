<script lang="ts">
  import { _ } from "svelte-i18n"; // Hàm dịch
  import { locale } from "svelte-i18n"; // Để thay đổi ngôn ngữ
  import { onMount } from "svelte";

  // Import i18n
  import "../lib/i18n";

  // Định nghĩa interface Tracking
  interface Tracking {
    id: number;
    trackingId: string;
    status: string;
    location?: string;
    updatedAt?: Date;
  }

  // Import các icon SVG
  import LoadingSpinner from "../icons/LoadingSpinner.svg";
  import WarehouseIcon from "../icons/WarehouseIcon.svg";
  import ProcessingIcon from "../icons/ProcessingIcon.svg";
  import MotorbikeIcon from "../icons/MotorbikeIcon.svg";
  import CarIcon from "../icons/CarIcon.svg";
  import PlaneIcon from "../icons/PlaneIcon.svg";
  import CheckmarkIcon from "../icons/CheckmarkIcon.svg";
  import CancelIcon from "../icons/CancelIcon.svg";

  let trackingId = "";
  let showModal = false;
  let orderStatus: Tracking | null = null;
  let errorMessage = "";
  let isLoading = false;
  let isI18nReady = false;

  // Chờ i18n sẵn sàng
  onMount(() => {
    isI18nReady = true;
  });

  async function trackOrder() {
    if (!trackingId) {
      errorMessage = $_("errorEmpty");
      showModal = true;
      return;
    }

    isLoading = true;
    showModal = true;

    try {
      const response = await fetch(`/orders?trackingId=${trackingId}`);
      const data = await response.json();

      if (response.ok) {
        orderStatus = data as Tracking;
        errorMessage = "";
      } else {
        orderStatus = null;
        errorMessage = data.message || $_("errorFetch");
      }
    } catch (error) {
      orderStatus = null;
      errorMessage = $_("errorConnection");
    } finally {
      isLoading = false;
    }
  }

  function closeModal() {
    showModal = false;
    orderStatus = null;
    errorMessage = "";
    trackingId = "";
    isLoading = false;
  }

  // Object ánh xạ trạng thái, màu sắc, icon
  const statusConfig: Record<
    string,
    { color: string; statusIcon: string; locationIcon?: string }
  > = {
    [$_("statusProcessing")]: {
      color: "text-yellow-500",
      statusIcon: ProcessingIcon,
      locationIcon: WarehouseIcon,
    },
    [$_("statusDelivering")]: {
      color: "text-blue-500",
      statusIcon: MotorbikeIcon,
    },
    [$_("statusDelivered")]: {
      color: "text-green-500",
      statusIcon: CheckmarkIcon,
    },
    [$_("statusCancelled")]: {
      color: "text-red-500",
      statusIcon: CancelIcon,
    },
  };

  // Object ánh xạ icon theo location
  const locationIcons: Record<string, string> = {
    "Hà Nội": MotorbikeIcon,
    "Đà Nẵng": MotorbikeIcon,
    "TP.HCM": CarIcon,
    "Cần Thơ": CarIcon,
    "Hải Phòng": PlaneIcon,
  };

  // Hàm lấy config cho trạng thái
  function getStatusConfig(status: string) {
    return (
      statusConfig[status] || {
        color: "text-gray-700 dark:text-gray-300",
        statusIcon: "",
      }
    );
  }

  // Hàm lấy icon vị trí
  function getLocationIcon(status: string, location?: string) {
    if (status === $_("statusProcessing")) {
      return WarehouseIcon;
    }
    return location ? locationIcons[location] || MotorbikeIcon : MotorbikeIcon;
  }

  // Định nghĩa cấu trúc dữ liệu hiển thị
  function getOrderDetails(order: Tracking) {
    return [
      { label: $_("orderId"), value: order.trackingId },
      {
        label: $_("status"),
        value: order.status,
        icon: getStatusConfig(order.status).statusIcon,
        color: getStatusConfig(order.status).color,
      },
      ...(order.location
        ? [
            {
              label: $_("location"),
              value: order.location,
              icon: getLocationIcon(order.status, order.location),
            },
          ]
        : []),
      ...(order.updatedAt
        ? [
            {
              label: $_("updatedAt"),
              value: new Date(order.updatedAt).toLocaleString(),
            },
          ]
        : []),
    ];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      trackOrder();
    }
  }

  function changeLanguage(lang: string) {
    $locale = lang;
  }
</script>

{#if isI18nReady}
  <main class="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
    <!-- Hero Section -->
    <section
      class="relative py-12 sm:py-16 bg-cover bg-top bg-no-repeat min-h-screen"
      style="background-image: url('/images/logistics-bg01.jpg');"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative container mx-auto px-4 max-w-6xl text-center">
        <!-- Language Switcher -->
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
          <a
            href="/pricing"
            class="bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center min-w-[100px] sm:w-[200px] md:w-[250px]"
          >
            <svg
              class="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400 mb-2 sm:mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h18v18H3zM9 3v18m6-18v18"
              ></path>
            </svg>
            <h3
              class="text-sm sm:text-xl font-semibold text-gray-800 dark:text-gray-200"
            >
              {$_("pricing")}
            </h3>
          </a>

          <a
            href="#"
            class="bg-purple-600 dark:bg-purple-700 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center min-w-[100px] sm:w-[200px] md:w-[250px] text-white"
          >
            <svg
              class="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <h3 class="text-sm sm:text-xl font-semibold">
              {$_("tracking")}
            </h3>
          </a>

          <a
            href="/shipping"
            class="bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center min-w-[100px] sm:w-[200px] md:w-[250px]"
          >
            <svg
              class="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400 mb-2 sm:mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="text-sm sm:text-xl font-semibold text-gray-800 dark:text-gray-200"
            >
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

    <!-- Modal hiển thị trạng thái đơn hàng -->
    {#if showModal}
      <div
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
        >
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2"
          >
            {$_("modalTitle")}
          </h3>
          {#if isLoading}
            <div class="flex justify-center items-center">
              <img src={LoadingSpinner} alt="Loading" class="w-6 h-6" />
              <p class="ml-2 text-gray-700 dark:text-gray-300">
                {$_("loading")}
              </p>
            </div>
          {:else if errorMessage}
            <p class="text-red-500 dark:text-red-400">{errorMessage}</p>
          {:else}
            <div class="space-y-2">
              {#each getOrderDetails(orderStatus || ({ trackingId: "", status: "" } as Tracking)) as detail}
                <p class="text-gray-700 dark:text-gray-300 flex items-center">
                  <span class="font-semibold">{detail.label}</span>
                  <span
                    class="ml-2 flex items-center {detail.color ||
                      'text-gray-700 dark:text-gray-300'}"
                  >
                    {#if detail.icon}
                      <img
                        src={detail.icon}
                        alt={detail.value}
                        class="w-5 h-5 mr-1"
                      />
                    {/if}
                    {detail.value}
                  </span>
                </p>
              {/each}
            </div>
          {/if}
          <button
            on:click={closeModal}
            class="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors"
          >
            {$_("close")}
          </button>
        </div>
      </div>
    {/if}
  </main>
{:else}
  <div class="flex justify-center items-center min-h-screen">
    <p>Loading...</p>
  </div>
{/if}
