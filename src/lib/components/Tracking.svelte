<script lang="ts">
  import type { Tracking } from "$lib/models";

  let trackingId = "";
  let loading = false;
  let error = "";
  let result: Tracking | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      trackOrder();
    }
  }

  async function trackOrder() {
    if (!trackingId) {
      error = "Vui lòng nhập mã theo dõi";
      return;
    }

    loading = true;
    error = "";
    result = null;

    try {
      const res = await fetch(`/orders?trackingId=${trackingId}`, {
        method: "GET",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Có lỗi xảy ra");
      }

      result = data;
    } catch (err: any) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
      Theo Dõi Đơn Hàng
    </h2>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <input
        type="text"
        bind:value={trackingId}
        on:keydown={handleKeydown}
        class="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-200"
        placeholder="Nhập mã theo dõi (VD: ABC123)"
        disabled={loading}
      />
      <button
        on:click={trackOrder}
        class="w-full sm:w-auto bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
        disabled={loading}
      >
        {#if loading}
          Đang tra cứu...
        {:else}
          Tra cứu
        {/if}
      </button>
    </div>

    {#if loading}
      <div class="mt-6 text-center text-gray-600">Đang tải...</div>
    {:else if error}
      <div class="mt-6 p-6 bg-red-50 rounded-lg shadow-md text-center">
        <p class="text-lg text-red-600">{error}</p>
      </div>
    {:else if result}
      <div class="mt-6 p-6 bg-white rounded-lg shadow-md text-center">
        <p class="text-lg font-semibold text-gray-700">ID: {result.id}</p>
        <p class="text-lg font-semibold text-gray-700">
          Mã theo dõi: {result.trackingId}
        </p>
        <p class="text-lg font-semibold text-purple-600">
          Trạng thái: {result.status}
        </p>
      </div>
    {/if}
  </div>
</section>
