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
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl bg-[#f5f9ff] border-2 border-[#1e3a8a] rounded-lg shadow-lg p-6 mt-14">
        <Link to="/" className=" text-[#1e3a8a] hover:underline mb-4 inline-block">
          ← Back
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1e3a8a]">
          {book.volumeInfo.title}
        </h2>
        <p className="text-[#5e7ac6] mb-1">
          <span className="font-semibold">Authors:</span> {book.volumeInfo.authors?.join(", ")}
        </p>
        <p className="text-[#5e7ac6] mb-4">
          <span className="font-semibold">Publisher:</span> {book.volumeInfo.publisher}
        </p>
        <p className="text-[#5e7ac6] mb-4">
          <span className="font-semibold">Published:</span> {book.volumeInfo.publishedDate}
        </p>
        <p className="text-[#5e7ac6] mb-1">
          <span className="font-semibold">Pages:</span> {book.volumeInfo.pageCount ?? "N/A"}
        </p>
        <p className="text-[#5e7ac6] mb-1">
          <span className="font-semibold">Categories:</span> {book.volumeInfo.categories?.join(", ") ?? "N/A"}
        </p>
        {book.volumeInfo.imageLinks?.thumbnail && (
          <div className="flex justify-center mb-4">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="rounded shadow-md max-h-64 w-auto"
            />
          </div>
        )}
        <p className="text-[#1e3a8a] text-base md:text-lg">{book.volumeInfo.description}</p>
      </div>
    </div>
  );

}

export default BookDetails;
