import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"; // Axios instance already contains tenantId in headers

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Use the tenantId in the request URL
        const response = await axiosInstance.get(
          `/users/66d063ca0800f9ad017e7cfc/profile`
        );

        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="pt-60 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="pt-60 text-red-500">{error}</div>;
  }

  return (
    <div className="pt-60 text-white">
      <h1 className="text-3xl mb-4">Welcome, {profileData?.username}!</h1>
      <p>Email: {profileData?.email}</p>
      <p>Role: {profileData?.role}</p>

      {/* Show Super Admin link if user has the SuperAdmin role */}
      {profileData?.role === "SuperAdmin" && (
        <div className="mt-6">
          <Link
            to="/SuperAdmin"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Super Admin Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
