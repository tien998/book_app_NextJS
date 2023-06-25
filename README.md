# Book app hiển thị thông tin sách và cho phép bình luận sách

### Mã nguồn dự án trong thư mục `src`
    
    NextJS định tuyến (routing) dựa trên cấu trúc thư mục (folder). Để một thư mục được định tuyến, thư mục đó phải chứa tệp (file) page.js

    Để truyền tham số vào định tuyến (route), thì tên thư mục chứa định tuyến được truyền tham số phải được đặt tên trong dấu ngoặc vuông [id], trong đó `id` là tham số của định tuyến 

        |--- app/page.js
        |
        |--- app/book/page.jsx
        |
        |--- app/book/[id]/page.js
        |
    
    

### Các components có thể tái sử dụng đặt trong `src/components`

### Các dịch vụ kết nối đến Fastify Server được đặt trong `src/services`


        |--- fetchServices/fetchData.js => lấy dữ liệu sách từ máy chủ Fastify
        |
        |--- socket.io.js               => Cho phép gửi và nhận dữ liệu thời gian thực, cung cấp cho khả năng chat nhóm theo thời gian thực
        |
        |
        