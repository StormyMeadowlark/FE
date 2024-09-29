import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Axios instance for API calls
import { Link } from "react-router-dom";

const MediaManagement = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all media when the component loads
  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/media`);
        setMediaItems(response.data.media); // Assuming the response contains media array
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching media");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  // Handle media deletion
  const deleteMedia = async (mediaId) => {
    try {
      await axiosInstance.delete(`/media/${mediaId}`);
      setMediaItems(mediaItems.filter((media) => media._id !== mediaId));
    } catch (err) {
      setError("Error deleting media");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Media Management</h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-green-500">Loading media...</div>}

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl">Uploaded Media</h2>
        <Link
          to="/superadmin/media-management/add"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Upload New Media
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.length > 0 ? (
          mediaItems.map((media) => (
            <div key={media._id} className="border p-4 rounded-lg shadow-md">
              <img
                src={media.url}
                alt={media.description || "Media file"}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-600">{media.description}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/superadmin/media-management/edit/${media._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteMedia(media._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No media uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default MediaManagement;
