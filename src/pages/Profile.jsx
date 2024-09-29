import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance" // Use Axios instance

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`/users/${tenantId}/profile`);
        setProfileData(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching profile");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="pt-60 text-white">
      {error ? <p>{error}</p> : <p>Welcome, {profileData?.username}!</p>}
    </div>
  );
};

export default Profile;
