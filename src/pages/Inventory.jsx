import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

const InventoryPage = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Example tenantId

  useEffect(() => {
    const fetchVehiclesWithSalesAndMedia = async () => {
      setLoading(true);
      try {
        const salesResponse = await axiosInstance.get(
          `/sales/${tenantId}/status/available`
        );
        const availableSales = salesResponse.data.sales || [];

        const vehiclesWithDetails = await Promise.all(
          availableSales.map(async (sale) => {
            const vehicleId = sale.vehicleId?._id;
            if (!vehicleId) {
              return null;
            }

            try {
              const vehicleResponse = await axiosInstance.get(
                `/vehicles/${tenantId}/${vehicleId}`
              );
              const vehicleData = vehicleResponse.data.vehicle;

              const mediaResponse = await axiosInstance.get(
                `/vehicle-media/${tenantId}/${vehicleId}`
              );
              const mediaData = mediaResponse.data.media;

              const photos =
                mediaData[0]?.photos?.length > 0
                  ? mediaData[0].photos
                  : mediaData[0]?.media?.filter((m) =>
                      m.mediaType.startsWith("image")
                    ) || [];

              const primaryImage =
                photos[0]?.mediaUrl ||
                photos[0] ||
                "/path/to/default/image.jpg";

              return {
                ...sale,
                vehicle: vehicleData,
                primaryImage,
              };
            } catch (vehicleError) {
              console.error(
                `Error fetching details for vehicleId: ${vehicleId}`,
                vehicleError
              );
              return null;
            }
          })
        );

        setCars(vehiclesWithDetails.filter(Boolean));
      } catch (err) {
        setError(
          err.response?.data?.message || "Error fetching vehicle or sales data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVehiclesWithSalesAndMedia();
  }, [tenantId]);

  return (
    <div className="bg-HEMgray text-white min-h-screen">
      <section className="relative bg-black text-white py-80">
        <img
          src="/path/to/hero-image.jpg"
          alt="Car Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-Bungee mb-4">
            FIND YOUR PERFECT USED CAR
          </h1>
          <p className="text-xl mb-6">Which Vehicle Are You Looking For?</p>
        </div>
      </section>

      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {loading && (
        <div className="text-center text-HEMgreen mt-4">
          Loading vehicles...
        </div>
      )}

      {!loading && !error && cars.length > 0 && (
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-Urbanist mb-6">Available Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.vehicle._id}
                className="bg-HEMgray text-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 relative group"
              >
                <div className="w-full h-auto">
                  <img
                    src={car.primaryImage}
                    alt={`${car.vehicle.make} ${car.vehicle.model} ${car.vehicle.trim}`}
                    className="w-full object-contain rounded-lg mb-4"
                    style={{ aspectRatio: "3/2" }} // Enforcing the 1080x720 aspect ratio
                  />
                </div>
                <h3 className="text-xl font-bold">
                  {car.vehicle.make} {car.vehicle.model} {car.vehicle.trim}
                </h3>
                <p className="text-sm">{car.vehicle.year}</p>

                {/* Format sale price and mileage with commas */}
                <p className="text-lg font-semibold">
                  ${Number(car.salePrice).toLocaleString()}
                </p>
                <p className="text-sm">
                  Mileage: {Number(car.vehicle.mileage).toLocaleString()} miles
                </p>

                <Link to={`/sales/${car.vehicle._id}`}>
                  <button className="mt-4 bg-HEMgreen text-black py-2 px-4 rounded-lg">
                    View Details
                  </button>
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
