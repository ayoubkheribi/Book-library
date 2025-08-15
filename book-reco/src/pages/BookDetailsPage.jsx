import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">← Back</Link>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors?.join(", ")}</p>
      <p>{book.volumeInfo.publishedDate}</p>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      )}
      <p>{book.volumeInfo.description}</p>
    </div>
  );
}

export default BookDetails;
