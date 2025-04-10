<script lang="ts">
  import type {
    VendorProduct,
    Product,
    ServiceDiscount,
    PotentialProduct,
    SupplierDiscount,
  } from "../../models";

  export let activeTab: string;
  export let sellers: VendorProduct[];
  export let products: Product[];
  export let services: ServiceDiscount[];
  export let potentialProducts: PotentialProduct[];
  export let supplierDiscounts: SupplierDiscount[];
</script>

<div>
  {#if activeTab === "top-sellers"}
    <!-- Danh sách nhà bán hàng -->
    <ul>
      {#each sellers as { rank, avatar, name, description, points }}
        <li
          class="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-300 dark:border-gray-700"
        >
          <div class="flex items-center">
            <span class="text-lg font-semibold mr-4">{rank}</span>
            <img
              src={avatar}
              alt="Logo của {name}"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <span class="text-gray-800 dark:text-gray-100 font-semibold block"
                >{name}</span
              >
              <span class="text-gray-500 dark:text-gray-400 text-sm"
                >{description}</span
              >
            </div>
          </div>
          <span class="text-green-500 font-semibold">{points} Points</span>
        </li>
      {/each}
    </ul>
  {:else if activeTab === "top-products"}
    <!-- Danh sách sản phẩm bán chạy -->
    <ul>
      {#each products as { rank, image, name, sold }}
        <li
          class="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-300 dark:border-gray-700"
        >
          <div class="flex items-center">
            <span class="text-lg font-semibold mr-4">{rank}</span>
            <img
              src={image}
              alt="Hình của {name}"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <span class="text-gray-800 dark:text-gray-100 font-semibold block"
                >{name}</span
              >
            </div>
          </div>
          <span class="text-green-500 font-semibold">{sold} Sold</span>
        </li>
      {/each}
    </ul>
  {:else if activeTab === "monthly-deals"}
    <!-- Ưu đãi trong tháng -->
    <ul>
      {#each services as { serviceName, originalPrice, discountedPrice }}
        <li
          class="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-300 dark:border-gray-700"
        >
          <div>
            <span class="text-gray-800 dark:text-gray-100 font-semibold block"
              >{serviceName}</span
            >
          </div>
          <div class="text-right">
            <span
              class="line-through text-gray-500 dark:text-gray-400 text-sm block"
            >
              Giá gốc: {originalPrice}
            </span>
            <span class="text-green-500 font-bold"
              >Giá ưu đãi: {discountedPrice}</span
            >
          </div>
        </li>
      {/each}
    </ul>
  {:else if activeTab === "potential-products"}
    <!-- Danh sách sản phẩm tiềm năng -->
    <ul>
      {#each potentialProducts as { name, category, potentialScore, image }}
        <li
          class="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-300 dark:border-gray-700"
        >
          <div class="flex items-center">
            <img
              src={image}
              alt="Hình của {name}"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <span class="text-gray-800 dark:text-gray-100 font-semibold block"
                >{name}</span
              >
              <span class="text-gray-500 dark:text-gray-400 text-sm"
                >{category}</span
              >
            </div>
          </div>
          <span class="text-green-500 font-bold">{potentialScore} điểm</span>
        </li>
      {/each}
    </ul>
  {:else if activeTab === "supplier-discounts"}
    <!-- Danh sách nhà cung cấp giảm sâu -->
    <ul>
      {#each supplierDiscounts as { supplierName, discountRate, description, logo }}
        <li
          class="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-300 dark:border-gray-700"
        >
          <div class="flex items-center">
            <img
              src={logo}
              alt="Logo của {supplierName}"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <span class="text-gray-800 dark:text-gray-100 font-semibold block"
                >{supplierName}</span
              >
              <span class="text-gray-500 dark:text-gray-400 text-sm"
                >{description}</span
              >
            </div>
          </div>
          <span class="text-red-500 font-bold">{discountRate}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>
