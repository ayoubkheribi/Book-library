import { Link } from "react-router-dom";

function BookCard({ id, title, authors, thumbnail }) {

  const shortTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;

  return (
    <div>
      {thumbnail && <img src={thumbnail} alt={title} />}
      <h3>{shortTitle}</h3>
      <p>{authors?.join(", ") || "Unknown"}</p>
      <Link to={`/book/${id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
