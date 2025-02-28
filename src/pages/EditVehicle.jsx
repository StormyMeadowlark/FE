import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";

const EditVehicle = () => {
  const { vehicleId } = useParams(); // Get vehicle ID from URL
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Hardcoded tenantId for now

  // Separate states for vehicle and sales data
  const [vehicleData, setVehicleData] = useState({
    VIN: "",
    make: "",
    model: "",
    year: "",
    exteriorColor: "",
    interiorColor: "",
    mileage: "",
  });

  const [salesData, setSalesData] = useState({
    saleId: "", // New field to hold the sale ID
    salePrice: "",
    status: "available",
    condition: "used", // Default to "used"
    previousOwners: 0,
    isCertified: false,
    description: "",
    marketingChannels: [], // To store multiple channels like 'online', 'social media'
    listedBy: "",
    listedOn: "",
  });

  // Media state
  const [existingMedia, setExistingMedia] = useState([]); // Existing media files
  const [newMediaFiles, setNewMediaFiles] = useState([]); // New media files to upload
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch vehicle, sales, and media data when the component loads
  useEffect(() => {
    const fetchVehicleAndSales = async () => {
      try {
        // Fetch sales data which includes vehicle data
        const salesResponse = await axiosInstance.get(
          `/sales/${tenantId}/${vehicleId}`
        );
        const sales = salesResponse.data;

        // Extract vehicle data from nested vehicleId
        setVehicleData({
          VIN: sales.vehicleId.VIN,
          make: sales.vehicleId.make,
          model: sales.vehicleId.model,
          year: sales.vehicleId.year,
          exteriorColor: sales.vehicleId.exteriorColor,
          interiorColor: sales.vehicleId.interiorColor,
          mileage: sales.vehicleId.mileage,
        });

        // Set sales data including the sale ID
        setSalesData({
          saleId: sales._id, // Store the sale ID for future patch requests
          salePrice: sales.salePrice,
          status: sales.status,
          condition: sales.condition,
          previousOwners: sales.previousOwners,
          isCertified: sales.isCertified,
          description: sales.description,
          marketingChannels: sales.marketingChannels,
          listedBy: sales.listedBy,
          listedOn: sales.listedOn,
        });

        // Fetch media data
        const mediaResponse = await axiosInstance.get(
          `/vehicle-media/${tenantId}/${vehicleId}`
        );
        setExistingMedia(mediaResponse.data.media); // Ensure response structure matches
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Error fetching vehicle, sales, or media data."
        );
      }
    };

    fetchVehicleAndSales();
  }, [vehicleId, tenantId]);

  // Handle input change for vehicle details
  const handleVehicleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  // Handle input change for sales details
  const handleSalesInputChange = (e) => {
    const { name, value } = e.target;
    setSalesData({ ...salesData, [name]: value });
  };

  // Handle media file selection for new files
  const handleMediaChange = (e) => {
    setNewMediaFiles([...e.target.files]);
  };

  // Handle deleting an existing media file
  const handleDeleteMedia = async (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirmDelete) return;

    try {
      const updatedMedia = existingMedia.filter((_, i) => i !== index);
      setExistingMedia(updatedMedia);

      // Update backend by removing the file
      await axiosInstance.delete(`/vehicle-media/${tenantId}/${vehicleId}`, {
        data: { index }, // Specify which photo to remove by index
      });
    } catch (err) {
      setError("Error deleting media. Please try again.");
    }
  };

  // Handle form submission for both vehicle, sales, and media data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Update vehicle data
      await axiosInstance.patch(
        `/vehicles/${tenantId}/${vehicleId}`,
        vehicleData
      );

      // Step 2: Update sales data using the sale ID
      await axiosInstance.patch(`/sales/${tenantId}/${vehicleId}/${salesData.saleId}`, {
        salePrice: salesData.salePrice,
        status: salesData.status,
        condition: salesData.condition,
        previousOwners: salesData.previousOwners,
        isCertified: salesData.isCertified,
        description: salesData.description,
        marketingChannels: salesData.marketingChannels,
        listedBy: salesData.listedBy,
        listedOn: salesData.listedOn,
      });

      // Step 3: Update media files if any new media is added
      if (newMediaFiles.length > 0) {
        const formData = new FormData();
        newMediaFiles.forEach((file) => formData.append("media", file));
        await axiosInstance.post(
          `/vehicle-media/${tenantId}/${vehicleId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      // Navigate to the vehicle management page after successful edit
      navigate("/superadmin/vehicle-management");
    } catch (err) {
      console.error(err);
      setError("Error updating vehicle, sales, or media. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-40 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Edit Vehicle, Sales, and Media
      </h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-green-500">Loading...</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Fields */}
        <div>
          <label className="block text-sm font-medium">VIN</label>
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
          <label className="block text-sm font-medium">Make</label>
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
          <label className="block text-sm font-medium">Model</label>
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
          <label className="block text-sm font-medium">Year</label>
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

        {/* Sale Fields */}
        <div>
          <label className="block text-sm font-medium">Sale Price</label>
          <input
            type="number"
            name="salePrice"
            value={salesData.salePrice}
            onChange={handleSalesInputChange}
            required
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Sale Status</label>
          <select
            name="status"
            value={salesData.status}
            onChange={handleSalesInputChange}
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
            value={salesData.condition}
            onChange={handleSalesInputChange}
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
            value={salesData.previousOwners}
            onChange={handleSalesInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Is Certified?</label>
          <input
            type="checkbox"
            name="isCertified"
            checked={salesData.isCertified}
            onChange={handleSalesInputChange}
            className="block"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={salesData.description}
            onChange={handleSalesInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Listed By</label>
          <input
            type="text"
            name="listedBy"
            value={salesData.listedBy}
            onChange={handleSalesInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Listed On</label>
          <input
            type="date"
            name="listedOn"
            value={salesData.listedOn.split("T")[0]} // Assuming date format is ISO string
            onChange={handleSalesInputChange}
            className="block w-full p-2 border rounded-md text-black"
          />
        </div>

        {/* Media Section */}
        <h2 className="text-2xl font-semibold">Manage Media</h2>
        <div className="grid grid-cols-3 gap-4">
          {existingMedia.length > 0 ? (
            existingMedia.map((mediaUrl, index) => (
              <div key={index} className="relative">
                <img
                  src={mediaUrl}
                  alt={`media-${index}`}
                  className="w-full h-auto"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteMedia(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No media available</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Add More Media</label>
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
          Update Vehicle, Sales, and Media
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
