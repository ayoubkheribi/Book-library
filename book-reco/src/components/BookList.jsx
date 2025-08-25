import BookCard from "./BookCard";
import useBookStore from "../store/useBookStore";

function BookList() {

  const { books } = useBookStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
