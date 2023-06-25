

import CommentSection from "@/components/commentSection";
import { Get } from "@/services/fetchServices/fetchData";
import BookDetail from "@/components/bookDetail";


async function BookPage({ params }) {
  var book = {};
  // const [bookArray, setBookArray] = useState([]);

  await Get(params.id).then(rs => {
    // Giá trị trả về là 1 mảng gồm 1 phần tử, lấy phần tử đầu tiên của mảng để hiển thị
    book=rs[0];
  });

  // setBookArray(fetch());
  return (
    <div className="flex-col items-center justify-between p-5">
      <BookDetail book={book} />
      <CommentSection />
    </div>
  )
}

export default BookPage