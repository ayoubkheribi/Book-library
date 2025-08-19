import { Link } from "react-router-dom";

function BookCard({ id, title, authors, thumbnail }) {

  const shortTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;

  return (
    <div className="border-2 border-[#6b4f4f] rounded-lg p-4 bg-[#fff8dc] shadow-md flex flex-col">
      {thumbnail && <img src={thumbnail} alt={title} className="w-full h-60 object-cover mb-3 rounded" />}
      <h3 className="text-lg font-semibold text-[#3b2f2f]">{shortTitle}</h3>
      <p className="text-sm italic text-[#6b4f4f]">{authors?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${id}`} className="mt-3 text-[#8b0000] hover:underline">View Details</Link>
    </div>
  );
}

export default BookCard;
