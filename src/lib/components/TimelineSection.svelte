<script lang="ts">
    type TimelineItem = {
      title: string;
      description: string;
      image: string;
    };
  
    export let items: TimelineItem[] = [
      {
        title: 'Consignment Booking',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/02/icon1.jpg'
      },
      {
        title: 'Tracking Device',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/02/icon3.jpg'
      },
      {
        title: 'Safety of Shipment',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/02/icon2.jpg'
      },
      {
        title: 'Delivery on Time',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/02/icon4.jpg'
      }
    ];
  </script>
  
  <section class="relative py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    
    <div class="max-w-7xl mx-auto relative">
  
      <!-- Line dọc trên mobile / ngang trên desktop -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 z-0 sm:hidden"></div>
      <div class="absolute top-16 left-0 w-full h-0.5 bg-gray-300 z-0 hidden sm:block"></div>
  
      <!-- Nội dung -->
      <div class="flex flex-col sm:flex-row sm:justify-between relative z-10">
        {#each items as item}
          <div class="w-full sm:w-1/4 px-4 flex flex-col items-center text-center mb-12 sm:mb-0 relative">
            <!-- Thumb -->
            <div class="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-gray-800 border-4 border-orange-500 flex items-center justify-center z-10 relative">
              <img src={item.image} alt={item.title} class="w-12 h-12 sm:w-20 sm:h-20 object-contain" />
            </div>
  
            <!-- Line dọc giữa các item trên mobile -->
            <div class="w-0.5 h-8 bg-gray-300 absolute top-full left-1/2 transform -translate-x-1/2 sm:hidden"></div>
  
            <!-- Tiêu đề + mô tả -->
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mt-3">{item.title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  