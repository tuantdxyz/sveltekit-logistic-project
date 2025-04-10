<script>
    const blogs = [
      {
        title: 'Giải pháp vận tải tối ưu trong thời đại số',
        image: 'https://logistik-html.themesdesign.in/assets/images/blog/img-1.jpg',
        date: '10 Th4, 2025',
        author: 'Admin',
        desc: 'Khám phá những xu hướng mới trong lĩnh vực logistics giúp doanh nghiệp tiết kiệm chi phí và nâng cao hiệu quả vận hành.'
      },
      {
        title: 'Tối ưu kho vận với công nghệ hiện đại',
        image: 'https://logistik-html.themesdesign.in/assets/images/blog/img-2.jpg',
        date: '8 Th4, 2025',
        author: 'Nguyễn Văn A',
        desc: 'Cách áp dụng AI và tự động hóa để cải tiến quy trình lưu kho và phân phối hàng hóa nhanh hơn.'
      },
      {
        title: 'Chiến lược giao hàng trong thương mại điện tử',
        image: 'https://logistik-html.themesdesign.in/assets/images/blog/img-3.jpg',
        date: '5 Th4, 2025',
        author: 'Trần Thị B',
        desc: 'Vai trò của dịch vụ giao hàng nhanh và hiệu quả trong việc tăng trải nghiệm khách hàng online.'
      }
    ];
  </script>
  
  <section class="bg-gray-50 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Bài viết mới nhất</h2>
      <div class="flex flex-wrap gap-8 justify-center">
        {#each blogs as blog}
          <div class="w-full md:w-[30%] flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={blog.image} alt={blog.title} class="h-48 w-full object-cover" />
            <div class="p-5 flex flex-col flex-1">
              <p class="text-sm text-gray-500 mb-1">{blog.date} • {blog.author}</p>
              <h3 class="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">{blog.title}</h3>
              <p class="text-gray-600 flex-1">{blog.desc}</p>
              <a href="#" class="text-blue-500 mt-4 hover:underline self-start font-medium">Xem chi tiết →</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  