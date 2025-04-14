<script lang="ts">
    const logos = [
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/LinkedIn_logo_initials.png',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Meta_Platforms_Inc._logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_without_text.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    ];
  </script>
  
  <section class="w-full bg-white dark:bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Đối tác của chúng tôi</h2>
  
      <div class="overflow-x-auto">
        <ul class="flex space-x-6 sm:space-x-8 md:space-x-10 min-w-full">
          {#each logos as logo}
            <li class="flex-shrink-0 w-36 h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <img src={logo} alt="Logo đối tác" class="h-12 sm:h-14 md:h-16 max-w-full object-contain filter dark:invert" />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  