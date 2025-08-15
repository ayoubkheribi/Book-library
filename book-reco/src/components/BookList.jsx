import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          thumbnail={book.volumeInfo.imageLinks?.thumbnail}
        />
      ))}
    </div>
  );
}

export default BookList;
