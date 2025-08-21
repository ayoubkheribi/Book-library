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
      <div className="w-full max-w-2xl bg-[#fff8dc] border-2 border-[#6b4f4f] rounded-lg shadow-lg p-6 mt-14">
        <Link to="/" className=" text-[#8b0000] hover:underline mb-4 inline-block">
          ← Back
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#3b2f2f]">
          {book.volumeInfo.title}
        </h2>
        <p className="text-[#6b4f4f] mb-1">
          <span className="font-semibold">Authors:</span> {book.volumeInfo.authors?.join(", ")}
        </p>
        <p className="text-[#6b4f4f] mb-1">
          <span className="font-semibold">Pages:</span> {book.volumeInfo.pageCount ?? "N/A"}
        </p>
        <p className="text-[#6b4f4f] mb-1">
          <span className="font-semibold">Categories:</span> {book.volumeInfo.categories?.join(", ") ?? "N/A"}
        </p>
        <p className="text-[#6b4f4f] mb-4">
          <span className="font-semibold">Published:</span> {book.volumeInfo.publishedDate}
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
        <p className="text-gray-700 text-base md:text-lg">{book.volumeInfo.description}</p>
      </div>
    </div>
  );

}

export default BookDetails;
