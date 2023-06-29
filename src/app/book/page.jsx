

import BookList from '@/components/bookList';
import { Get } from '../../services/fetchServices/book';

export default async function BookListPage({ projects }) {

    var projects = await Get();

    return (
        <div className="flex-col items-center justify-between p-5">
            <BookList bookArray={projects} />
        </div>
    )
}

