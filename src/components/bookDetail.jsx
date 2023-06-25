
import CommentSection from "./commentSection";

function BookDetail({ book }) {
    return (
        <>
            <div className="mb-32">
                <h1 className="text-bold">{book.title}</h1>
                <p>Author: <i>{book.author}</i></p>
                <p>Published Date: <i>{book.publishedDate}</i></p>
                <p>Description: <i>{book.description}</i></p>
                <p>Price: $<b>{book.price}</b></p>
            </div>
        </>
    )
}

export default BookDetail