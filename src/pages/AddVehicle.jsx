import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Axios instance for API calls
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    VIN: "",
    make: "",
    model: "",
    year: "",
    trim: "",
    engine: "",
    transmission: "",
    drivetrain: "",
    fuelType: "",
    bodyType: "",
    exteriorColor: "",
    interiorColor: "",
    mileage: "",
  });

  const [saleData, setSaleData] = useState({
    salePrice: "",
    status: "available",
    condition: "used",
    marketingChannels: ["online", "social media"], // Example channels
    description: "",
    soldOn: "",
    previousOwners: 0,
    soldBy: "",
    isCertified: false,
    buyer: "",
  });

  const [mediaFiles, setMediaFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const tenantId = "66d063ca0800f9ad017e7cfc"; // Hardcoded tenant ID for now

  // Handle input change for vehicle details
  const handleVehicleInputChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  // Handle input change for sale details
  const handleSaleInputChange = (e) => {
    setSaleData({ ...saleData, [e.target.name]: e.target.value });
  };

  // Handle media file selection
  const handleMediaChange = (e) => {
    setMediaFiles([...e.target.files]);
  };

  // Submit vehicle data, sales, and media to the backend
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
      
      const fullSaleData = {
        ...saleData,
        vehicleId, // Attach the vehicle ID
      };
console.log(fullSaleData);
      await axiosInstance.post(`/sales/${tenantId}`, fullSaleData); // No need to append vehicleId in URL, it's in the payload

      // Step 3: Submit media files if any
      if (mediaFiles.length > 0) {
        const formData = new FormData();
        mediaFiles.forEach((file) => formData.append("media", file)); // Ensure photos is the correct field name as per your schema

        await axiosInstance.post(`/vehicle-media/${tenantId}/${vehicleId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // Navigate to the vehicle management page after successful addition
      navigate("/superadmin/vehicle-management");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      setError("Error adding vehicle, sales, or media. Please try again.");
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
          <label className="block text-sm font-medium">VIN (required)</label>
          <input
            type="text"
            name="VIN"
            value={vehicleData.VIN}
            onChange={handleVehicleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Year (required)</label>
          <input
            type="number"
            name="year"
            value={vehicleData.year}
            onChange={handleVehicleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Make (required)</label>
          <input
            type="text"
            name="make"
            value={vehicleData.make}
            onChange={handleVehicleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Model (required)</label>
          <input
            type="text"
            name="model"
            value={vehicleData.model}
            onChange={handleVehicleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Trim</label>
          <input
            type="text"
            name="trim"
            value={vehicleData.trim}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Engine</label>
          <input
            type="text"
            name="engine"
            value={vehicleData.engine}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Transmission</label>
          <input
            type="text"
            name="transmission"
            value={vehicleData.transmission}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Drivetrain</label>
          <input
            type="text"
            name="drivetrain"
            value={vehicleData.drivetrain}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Fuel Type</label>
          <input
            type="text"
            name="fuelType"
            value={vehicleData.fuelType}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Body Style</label>
          <input
            type="text"
            name="bodyType"
            value={vehicleData.bodyType}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Exterior Color</label>
          <input
            type="text"
            name="exteriorColor"
            value={vehicleData.exteriorColor}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Interior Color</label>
          <input
            type="text"
            name="interiorColor"
            value={vehicleData.interiorColor}
            onChange={handleVehicleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mileage</label>
          <input
            type="number"
            name="mileage"
            value={vehicleData.mileage}
            onChange={handleVehicleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* Sale Fields */}
        <div>
          <label className="block text-sm font-medium">
            Sale Price (required)
          </label>
          <input
            type="number"
            name="salePrice"
            value={saleData.salePrice}
            onChange={handleSaleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Condition</label>
          <select
            name="condition"
            value={saleData.condition}
            onChange={handleSaleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          >
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="certified_preowned">Certified Pre-Owned</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Description (required)
          </label>
          <textarea
            name="description"
            value={saleData.description}
            onChange={handleSaleInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Sold On</label>
          <input
            type="Date"
            name="soldOn"
            value={saleData.soldOn}
            onChange={handleSaleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Number of Previous Owners
          </label>
          <input
            type="number"
            name="previousOwners"
            value={saleData.previousOwners}
            onChange={handleSaleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Sold By</label>
          <input
            type="text"
            name="soldBy"
            value={saleData.soldBy}
            onChange={handleSaleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Certified</label>
          <input
            type="text"
            name="isCertified"
            value={saleData.isCertified}
            onChange={handleSaleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Buyer</label>
          <input
            type="text"
            name="buyer"
            value={saleData.buyer}
            onChange={handleSaleInputChange}
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
