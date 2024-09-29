import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";

const EditVehicle = () => {
  const { vehicleId } = useParams(); // Get vehicle ID from URL
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Hardcoded tenantId for now
  const [vehicleData, setVehicleData] = useState({
    VIN: "",
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    trim: "",
    engine: "",
    transmission: "",
    drivetrain: "",
    fuelType: "",
    bodyType: "",
    exteriorColor: "",
    interiorColor: "",
    saleStatus: "available",
    condition: "used", // Default to "used"
    previousOwners: 0,
    isCertified: false,
    description: "",
    marketingChannels: [], // To store multiple channels like 'online', 'social media'
    salePrice: "", // Sale price for the vehicle
    listedOn: "",
    soldOn: "",
  });
  const [mediaFiles, setMediaFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch vehicle and sales data when the component loads
  useEffect(() => {
    const fetchVehicleAndSales = async () => {
      try {
        const vehicleResponse = await axiosInstance.get(
          `/vehicles/${tenantId}/${vehicleId}`
        );
        const salesResponse = await axiosInstance.get(
          `/sales/${tenantId}/${vehicleId}`
        );
        setVehicleData({
          ...vehicleResponse.data.vehicle,
          salePrice: salesResponse.data.sale.salePrice,
          saleStatus: salesResponse.data.sale.status,
          condition: salesResponse.data.sale.condition,
          previousOwners: salesResponse.data.sale.previousOwners,
          isCertified: salesResponse.data.sale.isCertified,
          marketingChannels: salesResponse.data.sale.marketingChannels,
          listedOn: salesResponse.data.sale.listedOn,
          soldOn: salesResponse.data.sale.soldOn,
        });
      } catch (err) {
        setError(
          err.response?.data?.message || "Error fetching vehicle and sales data"
        );
      }
    };

    fetchVehicleAndSales();
  }, [vehicleId, tenantId]);

  // Handle input change for vehicle details
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setVehicleData({ ...vehicleData, [name]: newValue });
  };

  // Handle media file selection
  const handleMediaChange = (e) => {
    setMediaFiles([...e.target.files]);
  };

  // Handle form submission for both vehicle and sales data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Update vehicle data
      await axiosInstance.patch(
        `/vehicles/${tenantId}/${vehicleId}`,
        vehicleData
      );

      // Step 2: Update sales data
      await axiosInstance.patch(`/sales/${tenantId}/${vehicleId}`, {
        salePrice: vehicleData.salePrice,
        status: vehicleData.saleStatus,
        condition: vehicleData.condition,
        previousOwners: vehicleData.previousOwners,
        isCertified: vehicleData.isCertified,
        marketingChannels: vehicleData.marketingChannels,
        listedOn: vehicleData.listedOn,
        soldOn: vehicleData.soldOn,
      });

      // Step 3: Update media files if any
      if (mediaFiles.length > 0) {
        const formData = new FormData();
        mediaFiles.forEach((file) => formData.append("media", file));
        await axiosInstance.put(
          `/vehicle-media/${tenantId}/assign/${vehicleId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      // Navigate to the vehicle management page after successful edit
      navigate("/superadmin/vehicle-management");
    } catch (err) {
      console.error(
        "Error response data:",
        err.response ? err.response.data : err
      );
      setError("Error updating vehicle and sales data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-40 text-white">
      <h1 className="text-3xl font-bold mb-6">Edit Vehicle and Sales Data</h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-green-500">Loading...</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Details */}
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

        {/* All other vehicle details like make, model, year, etc... */}

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

        <div>
          <label className="block text-sm font-medium">Sale Status</label>
          <select
            name="saleStatus"
            value={vehicleData.saleStatus}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          >
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="pending_sale">Pending Sale</option>
            <option value="reserved">Reserved</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Condition</label>
          <select
            name="condition"
            value={vehicleData.condition}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          >
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="certified_preowned">Certified Pre-Owned</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Previous Owners</label>
          <input
            type="number"
            name="previousOwners"
            value={vehicleData.previousOwners}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Is Certified?</label>
          <input
            type="checkbox"
            name="isCertified"
            checked={vehicleData.isCertified}
            onChange={handleInputChange}
            className="block"
          />
        </div>

        {/* Marketing Channels */}
        <div>
          <label className="block text-sm font-medium">
            Marketing Channels
          </label>
          <input
            type="text"
            name="marketingChannels"
            value={vehicleData.marketingChannels.join(", ")} // Display as comma-separated
            onChange={(e) =>
              setVehicleData({
                ...vehicleData,
                marketingChannels: e.target.value
                  .split(",")
                  .map((item) => item.trim()),
              })
            }
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Vehicle and Sales
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
