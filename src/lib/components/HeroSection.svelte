<script lang="ts">
  import { _ } from "svelte-i18n"; // Hàm dịch
  import LanguageSwitcher from "./LanguageSwitcher.svelte"; // Import LanguageSwitcher
  import type { Tracking } from "../models";

  // Import các icon SVG
  import PricingTopIcon from "$icons/PricingTopIcon.svg";
  import TrackingTopIcon from "$icons/TrackingTopIcon.svg";
  import ShippingTopIcon from "$icons/ShippingTopIcon.svg";
  import LoadingSpinner from "$icons/LoadingSpinner.svg";
  import ProcessingIcon from "$icons/ProcessingIcon.svg";
  import DeliveringIcon from "$icons/DeliveringIcon.svg";
  import DeliveredIcon from "$icons/DeliveredIcon.svg";
  import CancelledIcon from "$icons/CancelledIcon.svg";
  import ReturnedIcon from "$icons/ReturnedIcon.svg";
  import DefaultIcon from "$icons/DefaultIcon.svg";

  export let trackingId = ""; //  orderId
  export let changeLanguage;

  // Trạng thái và logic
  let showModal = false;
  let isLoading = false;
  let order: Tracking | null = null;
  let abortController: AbortController | undefined;
  let errorMessage: string | null = null;
  let statusConfig: {
    color: string;
    statusIcon: string;
    label: string;
  } = {
    color: "",
    statusIcon: "",
    label: "",
  };

  // Classes tái sử dụng
  const cardClass =
    "p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center min-w-[100px] sm:w-[200px] md:w-[250px]";
  const iconClass = "w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4";
  const titleClass = "text-sm sm:text-xl font-semibold";
  const buttonClass =
    "bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors text-sm sm:text-base";
  const inputClass =
    "flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-sm sm:text-base";

  async function trackOrder() {
    if (!trackingId) {
      setError($_("errorEmpty"));
      return;
    }

    // Hủy yêu cầu trước đó nếu có
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();

    isLoading = true;
    showModal = true;

    try {
      // call api routes/orders/server.ts
      const response = await fetch(`/orders?trackingId=${trackingId}`, {
        signal: abortController.signal,
      });
      const data = await response.json();

      if (response.ok) {
        order = data as Tracking;
        updateStatusConfig(order);
        clearError();
      } else {
        setError(data.message || $_("errorFetch"));
      }
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        console.log("Request aborted");
      } else {
        setError($_("errorConnection"));
      }
    } finally {
      isLoading = false;
    }
  }
  function closeModal() {
    resetState();
  }

  function setError(message: string) {
    errorMessage = message;
    order = null;
  }

  function clearError() {
    errorMessage = "";
  }

  function resetState() {
    showModal = false;
    order = null;
    errorMessage = "";
    // trackingId = "";
    isLoading = false;
  }

  // Định nghĩa cấu trúc dữ liệu hiển thị
  function updateStatusConfig(order: Tracking) {
    switch (order.status) {
      case "Processing": // Đang xử lý
        statusConfig = {
          color: "text-yellow-500",
          statusIcon: ProcessingIcon,
          label: $_("statusProcessing"),
        };
        break;
      case "Delivering": // Đang giao hàng
        statusConfig = {
          color: "text-blue-500",
          statusIcon: DeliveringIcon,
          label: $_("statusDelivering"),
        };
        break;
      case "Delivered": // Đã giao
        statusConfig = {
          color: "text-green-500",
          statusIcon: DeliveredIcon,
          label: $_("statusDelivered"),
        };
        break;
      case "Cancelled": // Hủy
        statusConfig = {
          color: "text-red-500",
          statusIcon: CancelledIcon,
          label: $_("statusCancelled"),
        };
        break;
      case "Returned": // Hoàn hàng
        statusConfig = {
          color: "text-yellow-700",
          statusIcon: ReturnedIcon,
          label: $_("statusReturned"),
        };
        break;
      default: // Không rõ
        statusConfig = {
          color: "text-gray-500",
          statusIcon: DefaultIcon,
          label: $_("statusUnknown"),
        };
        break;
    }
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      console.log("Tracking ID:", trackingId);
      trackOrder();
    }
  }
</script>

<section
  class="relative py-12 sm:py-16 bg-cover bg-top bg-no-repeat h-[480px] bg-[url('/images/logistics-bg01.jpg')]"
>
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative container mx-auto px-4 max-w-6xl text-center">
    <!-- Language Switcher -->
    <div class="flex justify-end gap-2 mb-4">
      <LanguageSwitcher {changeLanguage} />
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
        class={inputClass}
        placeholder={$_("trackingIdPlaceholder")}
      />
      <button on:click={trackOrder} class={buttonClass}>
        {$_("trackButton")}
      </button>
    </div>
  </div>

  <!-- Modal hiển thị trạng thái đơn hàng -->
  {#if showModal}
    <div
      class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
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
            <img
              src={LoadingSpinner}
              alt="Loading..."
              class="w-6 h-6 text-orange-500"
            />
            <p class="ml-2 text-gray-700 dark:text-gray-300">
              {$_("loading")}
            </p>
          </div>
        {:else if errorMessage}
          <p class="text-red-500 dark:text-red-400">{errorMessage}</p>
        {:else}
          <div class="space-y-4">
            <!-- Hiển thị mã đơn hàng -->
            {#if order}
              <p
                class="text-gray-800 dark:text-gray-200 text-xl flex items-center"
              >
                <span class="font-semibold">{$_("orderId")}:</span>
                <span class="ml-3">{order.trackingId}</span>
              </p>
            {/if}

            <!-- Hiển thị trạng thái -->
            <p
              class="text-gray-800 dark:text-gray-200 text-xl flex items-center"
            >
              <span class="font-semibold">{$_("status")}:</span>
              <span class="ml-3 flex items-center {statusConfig.color}">
                <img
                  src={statusConfig.statusIcon}
                  alt="Icon"
                  class="w-6 h-6 mr-3"
                />
                {statusConfig.label}
              </span>
            </p>

            <!-- Hiển thị vị trí -->
            {#if order?.location}
              <p
                class="text-gray-800 dark:text-gray-200 text-xl flex items-center"
              >
                <span class="font-semibold">{$_("location")}:</span>
                <span class="ml-3">{order.location}</span>
              </p>
            {/if}

            <!-- Hiển thị thời gian cập nhật -->
            {#if order?.updatedAt}
              <p
                class="text-gray-800 dark:text-gray-200 text-xl flex items-center"
              >
                <span class="font-semibold">{$_("updatedAt")}:</span>
                <span class="ml-3"
                  >{new Date(order.updatedAt).toLocaleString()}</span
                >
              </p>
            {/if}
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
</section>
