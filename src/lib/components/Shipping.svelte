<!-- src/lib/components/Shipping.svelte -->
<script lang="ts">
  let origin = "";
  let destination = "";
  let weight = "";

  async function submitShipping() {
    const response = await fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, destination, weight, status: "Pending" }),
    });
    if (response.ok) alert("Yêu cầu vận chuyển đã được gửi!");
    else alert("Có lỗi xảy ra!");
  }
</script>

<section class="py-12 bg-white">
  <div class="container mx-auto px-4 max-w-2xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
      Yêu Cầu Vận Chuyển
    </h2>
    <form on:submit|preventDefault={submitShipping} class="space-y-6">
      <div>
        <label for="origin" class="block text-sm font-medium text-gray-700 mb-1"
          >Điểm xuất phát</label
        >
        <input
          id="origin"
          type="text"
          bind:value={origin}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Nhập điểm xuất phát"
        />
      </div>
      <div>
        <label
          for="destination"
          class="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label
        >
        <input
          id="destination"
          type="text"
          bind:value={destination}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Nhập điểm đến"
        />
      </div>
      <div>
        <label for="weight" class="block text-sm font-medium text-gray-700 mb-1"
          >Khối lượng (kg)</label
        >
        <input
          id="weight"
          type="number"
          bind:value={weight}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Nhập khối lượng"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Gửi yêu cầu
      </button>
    </form>
  </div>
</section>
