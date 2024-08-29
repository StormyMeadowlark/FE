import { Link } from "react-router-dom";

export default function BlogPostPanel({ id, title, excerpt, image }) {
  return (
    <div className="bg-[#222222] text-white rounded-lg shadow-lg overflow-hidden mb-8">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-Play text-[#00ff00] mb-4">
          {title}
        </h3>
        <p className="text-lg font-Urbanist tracking-wide mb-4">{excerpt}</p>
        <Link to={`/autoSchool/${id}`}>
          <button className="bg-[#00ff00] text-[#333333] px-4 py-2 rounded-full text-lg font-bold hover:bg-[#00cc00] transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
