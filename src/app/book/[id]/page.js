import { Get } from '@/services/fetchServices/book';
import { GetCmt } from '@/services/fetchServices/comment';
import BookDetail from '@/components/bookDetail';
import { CmtDisplay, CmtDisplay_IO, CmtForm} from '@/components/commentSection';




async function BookPage({ params }) {
  var book = {};
  // const [bookArray, setBookArray] = useState([]);

  await Get(params.id).then(rs => {
    // Giá trị trả về là 1 mảng gồm 1 phần tử, lấy phần tử đầu tiên của mảng để hiển thị
    book = rs[0];
  });

  
  var cmtDisplay_fetch = [];
  try {
    await GetCmt(params.id).then(rs => {
      rs.forEach(i => {
        var key = 1;
        var mes = i.message;
        cmtDisplay_fetch.push(<CmtDisplay cmts={mes} key={key++} />)
      });
    });
  }
  catch (err) {
    console.log('_______ fetch comment failed', err);
  }



  return (
    <div className='flex-col items-center justify-between p-5'>
      <BookDetail book={book} />
      <CmtForm book_id={book.id} />
      {/* <CmtForm book_id={book.id} /> */}
      <CmtDisplay_IO book_id={book.id} />
      {cmtDisplay_fetch}

    </div>
  )
}

export default BookPage