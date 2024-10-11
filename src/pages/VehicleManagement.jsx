import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);

  const tenantId = "66d063ca0800f9ad017e7cfc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vehicleRes, salesRes, mediaRes] = await Promise.all([
          axiosInstance.get(`/vehicles/${tenantId}`),
          axiosInstance.get(`/sales/${tenantId}`),
          axiosInstance.get(`/vehicle-media/${tenantId}`),
        ]);

        const vehiclesData = vehicleRes.data.vehicles.docs;
        const salesData = salesRes.data.sales.docs;
        const mediaData = mediaRes.data.media;

        // Combine vehicle, sales, and media data
        const combinedData = vehiclesData.map((vehicle) => {
          const saleInfo = salesData.find(
            (sale) => sale.vehicleId && sale.vehicleId._id === vehicle._id
          );
          const mediaInfo = mediaData.find(
            (media) => media.vehicleId === vehicle._id
          );

          // Handle media data based on old and new schema
          const photos = mediaInfo
            ? mediaInfo.photos?.length > 0 // Check if 'photos' exists in the old schema
              ? mediaInfo.photos
              : mediaInfo.media?.filter((m) => m.mediaType.startsWith("image")) // Use 'media' from the new schema
            : [];

          return {
            ...vehicle,
            saleStatus: saleInfo ? saleInfo.status : "Unknown",
            salePrice: saleInfo ? saleInfo.salePrice : "N/A",
            listedOn: saleInfo ? saleInfo.listedOn : "N/A",
            photosCount: photos.length,
            thumbnail:
              photos.length > 0
                ? photos[0].mediaUrl || photos[0]
                : "default-thumbnail-url",
          };
        });

        setVehicles(combinedData);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching data");
      }
    };

    fetchData();
  }, [tenantId]);

  const deleteVehicle = async () => {
    if (!vehicleToDelete) return;

    try {
      await axiosInstance.delete(`/vehicles/${tenantId}/${vehicleToDelete}`);
      setVehicles(
        vehicles.filter((vehicle) => vehicle._id !== vehicleToDelete)
      );
      setVehicleToDelete(null);
      setShowDeleteConfirmation(false);
    } catch (err) {
      setError("Error deleting vehicle");
    }
  };

  return (
    <div className="container mx-auto py-40 text-white">
      <h1 className="text-3xl font-bold mb-6">Vehicle Management</h1>

      {error && <div className="text-red-500">{error}</div>}

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl">Current Vehicle Listings</h2>
        <Link
          to="/superadmin/vehicle-management/add"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add New Vehicle
        </Link>
      </div>

      <div className="overflow-x-auto">
        {vehicles.length > 0 ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Make</th>
                <th className="px-4 py-2 border">Model</th>
                <th className="px-4 py-2 border">Year</th>
                <th className="px-4 py-2 border">Mileage</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Sale Price</th>
                <th className="px-4 py-2 border">Photos</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle._id}>
                  <td className="px-4 py-2 border">{vehicle.make}</td>
                  <td className="px-4 py-2 border">{vehicle.model}</td>
                  <td className="px-4 py-2 border">{vehicle.year}</td>
                  <td className="px-4 py-2 border">{vehicle.mileage}</td>
                  <td className="px-4 py-2 border">{vehicle.saleStatus}</td>
                  <td className="px-4 py-2 border">${vehicle.salePrice}</td>
                  <td className="px-4 py-2 border">
                    {vehicle.photosCount}{" "}
                    <img
                      src={vehicle.thumbnail}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="h-16 w-16 object-cover inline-block"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <Link
                      to={`/superadmin/vehicle-management/edit/${vehicle._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        setVehicleToDelete(vehicle._id);
                        setShowDeleteConfirmation(true);
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No vehicles found.</p>
        )}
      </div>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black">
            <p>Are you sure you want to delete this vehicle?</p>
            <div className="mt-4">
              <button
                onClick={deleteVehicle}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleManagement;
