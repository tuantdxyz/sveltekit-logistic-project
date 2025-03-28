<script lang="ts">
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
  import ProcessingIcon from "../icons/ProcessingIcon.svg"; // Icon mới cho "Đang xử lý"
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

  async function trackOrder() {
    if (!trackingId) {
      errorMessage = "Vui lòng nhập mã theo dõi!";
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
        errorMessage = data.message || "Có lỗi xảy ra khi tra cứu đơn hàng";
      }
    } catch (error) {
      orderStatus = null;
      errorMessage = "Lỗi kết nối, vui lòng thử lại!";
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

  // Hàm để lấy màu trạng thái
  function getStatusColor(status: string): string {
    switch (status) {
      case "Đang xử lý":
        return "text-yellow-500";
      case "Đang giao hàng":
        return "text-blue-500";
      case "Đã giao":
        return "text-green-500";
      case "Hủy":
        return "text-red-500";
      default:
        return "text-gray-700 dark:text-gray-300";
    }
  }

  // Hàm để lấy icon dựa trên trạng thái
  function getStatusIcon(status: string): string {
    switch (status) {
      case "Đang xử lý":
        return "processing"; // Thay "warehouse" bằng "processing"
      case "Đang giao hàng":
        return "delivery";
      case "Đã giao":
        return "checkmark";
      case "Hủy":
        return "cancel";
      default:
        return "default";
    }
  }

  // Hàm để chọn loại phương tiện giao hàng (dựa trên trạng thái và vị trí)
  function getDeliveryIcon(location: string | undefined): string {
    if (!location) return "default";
    switch (location) {
      case "Hà Nội":
      case "Đà Nẵng":
        return "motorbike";
      case "TP.HCM":
      case "Cần Thơ":
        return "car";
      case "Hải Phòng":
        return "plane";
      default:
        return "default";
    }
  }

  // Hàm xử lý khi nhấn Enter
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      trackOrder();
    }
  }
</script>

<main class="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
  <!-- Hero Section -->
  <section
    class="relative py-12 sm:py-16 bg-cover bg-top bg-no-repeat min-h-screen"
    style="background-image: url('/images/logistics-bg01.jpg');"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative container mx-auto px-4 max-w-6xl text-center">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
      >
        Chào mừng đến với Velog Logistic
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
        Dịch vụ vận chuyển nhanh chóng, đáng tin cậy
      </p>

      <!-- 3 ô chức năng (dùng Flexbox) -->
      <div
        class="flex flex-row gap-3 sm:gap-6 justify-center items-center overflow-x-auto sm:overflow-x-visible"
      >
        <!-- Ô 1: Báo Giá -->
        <a
          href="/pricing"
          class="bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center w-[100px] sm:w-[200px] md:w-[250px]"
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
            Báo Giá
          </h3>
        </a>

        <!-- Ô 2: Theo dõi -->
        <a
          href="#"
          class="bg-purple-600 dark:bg-purple-700 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center w-[100px] sm:w-[200px] md:w-[250px] text-white"
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
          <h3 class="text-sm sm:text-xl font-semibold">Theo dõi</h3>
        </a>

        <!-- Ô 3: Vận chuyển -->
        <a
          href="/shipping"
          class="bg-white dark:bg-gray-800 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center w-[100px] sm:w-[200px] md:w-[250px]"
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
            Vận chuyển
          </h3>
        </a>
      </div>

      <!-- Ô nhập ID Theo dõi -->
      <div
        class="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-lg mx-auto"
      >
        <input
          type="text"
          bind:value={trackingId}
          on:keydown={handleKeydown}
          class="w-full sm:w-2/3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-sm sm:text-base"
          placeholder="ID Theo dõi"
        />
        <button
          on:click={trackOrder}
          class="w-full sm:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors text-sm sm:text-base"
        >
          Theo dõi
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
          Trạng thái đơn hàng
        </h3>
        {#if isLoading}
          <div class="flex justify-center items-center">
            <img src={LoadingSpinner} alt="Loading" class="w-6 h-6" />
            <p class="ml-2 text-gray-700 dark:text-gray-300">Đang tải...</p>
          </div>
        {:else if errorMessage}
          <p class="text-red-500 dark:text-red-400">{errorMessage}</p>
        {:else if orderStatus}
          <div class="space-y-2">
            <p class="text-gray-700 dark:text-gray-300">
              <span class="font-semibold">Mã:</span>
              {orderStatus.trackingId}
            </p>
            <p class="text-gray-700 dark:text-gray-300 flex items-center">
              <span class="font-semibold">Trạng thái:</span>
              <span
                class="ml-2 flex items-center {getStatusColor(
                  orderStatus.status
                )}"
              >
                {#if getStatusIcon(orderStatus.status) === "processing"}
                  <img
                    src={ProcessingIcon}
                    alt="Processing"
                    class="w-5 h-5 mr-1"
                  />
                {:else if getStatusIcon(orderStatus.status) === "delivery"}
                  {#if getDeliveryIcon(orderStatus.location) === "motorbike"}
                    <img
                      src={MotorbikeIcon}
                      alt="Motorbike"
                      class="w-5 h-5 mr-1"
                    />
                  {:else if getDeliveryIcon(orderStatus.location) === "car"}
                    <img src={CarIcon} alt="Car" class="w-5 h-5 mr-1" />
                  {:else if getDeliveryIcon(orderStatus.location) === "plane"}
                    <img src={PlaneIcon} alt="Plane" class="w-5 h-5 mr-1" />
                  {/if}
                {:else if getStatusIcon(orderStatus.status) === "checkmark"}
                  <img
                    src={CheckmarkIcon}
                    alt="Checkmark"
                    class="w-5 h-5 mr-1"
                  />
                {:else if getStatusIcon(orderStatus.status) === "cancel"}
                  <img src={CancelIcon} alt="Cancel" class="w-5 h-5 mr-1" />
                {/if}
                {orderStatus.status}
              </span>
            </p>
            {#if orderStatus.location}
              <p class="text-gray-700 dark:text-gray-300 flex items-center">
                <span class="font-semibold">Vị trí:</span>
                <span class="ml-2 flex items-center">
                  {#if getStatusIcon(orderStatus.status) === "processing"}
                    <img
                      src={WarehouseIcon}
                      alt="Warehouse"
                      class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                    />
                  {:else if getStatusIcon(orderStatus.status) === "delivery"}
                    {#if getDeliveryIcon(orderStatus.location) === "motorbike"}
                      <img
                        src={MotorbikeIcon}
                        alt="Motorbike"
                        class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                      />
                    {:else if getDeliveryIcon(orderStatus.location) === "car"}
                      <img
                        src={CarIcon}
                        alt="Car"
                        class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                      />
                    {:else if getDeliveryIcon(orderStatus.location) === "plane"}
                      <img
                        src={PlaneIcon}
                        alt="Plane"
                        class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                      />
                    {/if}
                  {/if}
                  {orderStatus.location}
                </span>
              </p>
            {/if}
            {#if orderStatus.updatedAt}
              <p class="text-gray-700 dark:text-gray-300">
                <span class="font-semibold">Cập nhật:</span>
                {new Date(orderStatus.updatedAt).toLocaleString()}
              </p>
            {/if}
          </div>
        {/if}
        <button
          on:click={closeModal}
          class="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 transition-colors"
        >
          Đóng
        </button>
      </div>
    </div>
  {/if}
</main>
