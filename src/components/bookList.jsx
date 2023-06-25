


import Link from "next/link";

function BookList({ bookArray }) {
    const rows = [];
    var a =1;
    bookArray.forEach(i => {
        rows.push(
            <BookItem book={i} key={a++}/>
        );
    });
    return (
        <>
            {rows}
        </>
    );
}
function BookItem({ book }) {
    var link = `/book/${book.id}`;
    return (
        <Link href={link}>
            <div className="mb-24">
                <h1>Title: {book.title}</h1>
                <p>Author: <i>{book.author}</i></p>
                <p>Price: $<b>{book.price}</b></p>
            </div>
        </Link>
    )
}

export default BookList;