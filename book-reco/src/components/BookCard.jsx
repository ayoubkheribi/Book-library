import { Link } from "react-router-dom";

function BookCard({ id, title, authors, thumbnail, publisher }) {

  const shortTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;

  return (
    <Link to={`/book/${id}`}>
      <div className="border-2 border-[#1e3a8a] rounded-lg p-4 bg-[#f5f9ff] shadow-md flex flex-col hover:bg-[#ecf1f9] transition-transform transform hover:scale-105 duration-300">
        {thumbnail && <img src={thumbnail} alt={title} className="w-full h-60 object-cover mb-3 rounded" />}
        <h3 className="text-m font-semibold text-[#1e3a8a]">{shortTitle}</h3>
        <p className="text-xs italic text-[#5e7ac6]">Author : {authors?.join(", ") || "Unknown"}</p>
        <p className="text-xs text-[#5e7ac6]">Publisher : {publisher || "Unknown Publisher"}</p>
      </div>
    </Link>
  );
}

export default BookCard;
