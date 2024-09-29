import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Axios instance for API calls
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    VIN: "",
    mileage: "",
    saleStatus: "available", // Default sale status
    condition: "used", // Default condition (for sale)
    description: "",
    salePrice: "",
  });
  const [mediaFiles, setMediaFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const tenantId = "66d063ca0800f9ad017e7cfc"; // Hardcoded tenant ID for now

  // Handle input change for vehicle details
  const handleInputChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  // Handle media file selection
  const handleMediaChange = (e) => {
    setMediaFiles([...e.target.files]);
  };

  // Submit vehicle data and sales to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Step 1: Submit vehicle data
      const vehicleResponse = await axiosInstance.post(
        `/vehicles/${tenantId}`,
        vehicleData
      );

      // Get the vehicle ID from the response
      const vehicleId = vehicleResponse.data.vehicle._id;

      // Step 2: Submit sale data for the vehicle
      const saleData = {
        vehicleId: vehicleId, // Attach the vehicle ID
        salePrice: vehicleData.salePrice,
        condition: vehicleData.condition,
        status: vehicleData.saleStatus,
        description: vehicleData.description,
        marketingChannels: ["online", "social media"], // Example marketing channels
      };

      await axiosInstance.post(`/sales/${tenantId}/${vehicleId}`, saleData);

      // Step 3: Submit media files if any
      if (mediaFiles.length > 0) {
        const formData = new FormData();
        mediaFiles.forEach((file) => formData.append("media", file));

        await axiosInstance.post(`/vehicle-media/${tenantId}/${vehicleId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // Navigate to the vehicle management page after successful addition
      navigate("/superadmin/vehicle-management");
    } catch (err) {
      console.error("Error:", err.response.data);
      setError("Error adding vehicle or sales. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-40 text-white">
      <h1 className="text-3xl font-bold mb-6">Add New Vehicle</h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-green-500">Loading...</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Fields */}
        <div>
          <label className="block text-sm font-medium">Make</label>
          <input
            type="text"
            name="make"
            value={vehicleData.make}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Model</label>
          <input
            type="text"
            name="model"
            value={vehicleData.model}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Year</label>
          <input
            type="number"
            name="year"
            value={vehicleData.year}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={vehicleData.price}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* VIN and Mileage */}
        <div>
          <label className="block text-sm font-medium">VIN</label>
          <input
            type="text"
            name="VIN"
            value={vehicleData.VIN}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mileage</label>
          <input
            type="number"
            name="mileage"
            value={vehicleData.mileage}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* Sale Price */}
        <div>
          <label className="block text-sm font-medium">Sale Price</label>
          <input
            type="number"
            name="salePrice"
            value={vehicleData.salePrice}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={vehicleData.description}
            onChange={handleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* Media Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Media</label>
          <input
            type="file"
            name="media"
            multiple
            onChange={handleMediaChange}
            className="block w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
