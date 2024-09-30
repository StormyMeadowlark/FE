import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

const InventoryPage = () => {
  const [cars, setCars] = useState([]); // Initialize cars array
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(false); // Loading state
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Example tenantId

  // Fetch vehicle, sales, and media information when the component loads
  useEffect(() => {
    const fetchVehiclesWithSalesAndMedia = async () => {
      setLoading(true);
      try {
        // Fetch available vehicles from the sales service
        const salesResponse = await axiosInstance.get(`/sales/${tenantId}/status/available`);
        const availableSales = salesResponse.data.sales || [];

        // For each sale, fetch the vehicle and media details
        const vehiclesWithDetails = await Promise.all(
          availableSales.map(async (sale) => {
            const vehicleId = sale.vehicleId?._id; // Ensure vehicleId exists
            if (!vehicleId) {
              return null; // Skip if no vehicleId
            }

            try {
              // Fetch vehicle details from the vehicle service
              const vehicleResponse = await axiosInstance.get(`/vehicles/${tenantId}/${vehicleId}`);
              const vehicleData = vehicleResponse.data.vehicle;

              // Fetch media for the vehicle from the media service
              const mediaResponse = await axiosInstance.get(`/vehicle-media/${tenantId}/${vehicleId}`);
              const mediaData = mediaResponse.data.media;
              const primaryImage = mediaData[0]?.photos[0] || "/path/to/default/image.jpg";

              // Combine vehicle, sales, and media information
              return {
                ...sale,
                vehicle: vehicleData,
                primaryImage, // Use the first media image as the primary image
              };
            } catch (vehicleError) {
              console.error(`Error fetching details for vehicleId: ${vehicleId}`, vehicleError);
              return null; // Skip this vehicle if there's an error fetching details
            }
          })
        );

        // Filter out any `null` values (where vehicle or sales data couldn't be fetched)
        setCars(vehiclesWithDetails.filter(Boolean));
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching vehicle or sales data");
      } finally {
        setLoading(false);
      }
    };

    fetchVehiclesWithSalesAndMedia();
  }, [tenantId]);

  return (
    <div className="bg-HEMgray text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-80">
        <img
          src="/path/to/hero-image.jpg"
          alt="Car Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-Bungee mb-4">FIND YOUR PERFECT USED CAR</h1>
          <p className="text-xl mb-6">Which Vehicle Are You Looking For?</p>
        </div>
      </section>

      {/* Error and Loading States */}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {loading && <div className="text-center text-HEMgreen mt-4">Loading vehicles...</div>}

      {/* Product Listing Section */}
      {!loading && !error && cars.length > 0 && (
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-Urbanist mb-6">Available Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.vehicle._id}
                className="bg-HEMgray text-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 relative group"
              >
                <img
                  src={car.primaryImage}
                  alt={`${car.vehicle.make} ${car.vehicle.model}`}
                  className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <h3 className="text-xl font-bold">
                  {car.vehicle.make} {car.vehicle.model}
                </h3>
                <p className="text-sm">{car.vehicle.year}</p>
                <p className="text-lg font-semibold">${car.salePrice}</p>
                <p className="text-sm">Mileage: {car.vehicle.mileage} miles</p>
                <Link to={`/sales/${car.vehicle._id}`}>
                  <button className="mt-4 bg-HEMgreen text-black py-2 px-4 rounded-lg">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default InventoryPage;