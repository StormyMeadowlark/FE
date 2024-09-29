import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]); // Initialize vehicles as an array
  const [error, setError] = useState(null);

  // Fetch tenantId from headers or context if needed
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Example tenantId

  // Fetch vehicles when the component loads
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Fetch vehicles for the given tenantId
        const response = await axiosInstance.get(`/vehicles/${tenantId}`);

        // Access the 'docs' array from the response
        const fetchedVehicles = response.data.vehicles.docs || [];
        setVehicles(fetchedVehicles);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching vehicles");
      }
    };

    fetchVehicles();
  }, [tenantId]);

  // Delete a vehicle
  const deleteVehicle = async (vehicleId) => {
    try {
      await axiosInstance.delete(`/vehicles/${tenantId}/${vehicleId}`);
      setVehicles(vehicles.filter((vehicle) => vehicle._id !== vehicleId));
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
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle._id}>
                  <td className="px-4 py-2 border">{vehicle.make}</td>
                  <td className="px-4 py-2 border">{vehicle.model}</td>
                  <td className="px-4 py-2 border">{vehicle.year}</td>
                  <td className="px-4 py-2 border">{vehicle.saleStatus}</td>
                  <td className="px-4 py-2 border">
                    <Link
                      to={`/superadmin/vehicle-management/edit/${vehicle._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteVehicle(vehicle._id)}
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
    </div>
  );
};

export default VehicleManagement;
