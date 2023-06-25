
import BookList from '@/components/bookList';
import { Get } from '../../services/fetchServices/fetchData';

export default async function BookListPage() {

    var bookArray = [];

    if (bookArray.length === 0) {
        bookArray =  await Get();
    }

    return (
        <div className="flex-col items-center justify-between p-5">
            <BookList bookArray={bookArray} />
        </div>
    )
}

