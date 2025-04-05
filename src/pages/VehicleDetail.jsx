import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { vehicleId } = useParams();
  const tenantId = "66d063ca0800f9ad017e7cfc";
  const [car, setCar] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      try {
        const vehicleResponse = await axiosInstance.get(
          `/vehicles/${tenantId}/${vehicleId}`
        );
        const vehicleData = vehicleResponse.data.vehicle;

        const salesResponse = await axiosInstance.get(
          `/sales/${tenantId}/${vehicleId}`
        );
        const saleData = salesResponse.data;

        const mediaResponse = await axiosInstance.get(
          `/vehicle-media/${tenantId}/${vehicleId}`
        );
        const mediaData = mediaResponse.data.media;

        setCar({
          ...saleData,
          vehicle: vehicleData,
          features: vehicleData.features,
          images:
            mediaData[0]?.photos ||
            mediaData[0]?.media?.map((m) => m.mediaUrl) ||
            [],
        });
      } catch (err) {
        setError("Error fetching vehicle details");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [vehicleId, tenantId]);

  const closeImage = () => setSelectedImageIndex(null);
  const nextImage = () =>
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
  const prevImage = () =>
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length
    );

  if (loading) {
    return (
      <div className="bg-HEMgray text-white min-h-screen flex items-center justify-center">
        <p>Loading vehicle details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-HEMgray text-white min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="bg-HEMgray text-white min-h-screen flex items-center justify-center">
        <p>Car not found</p>
      </div>
    );
  }

  const pageTitle = `Used ${car.vehicle.year} ${car.vehicle.make} ${
    car.vehicle.model
  } ${car.vehicle.trim || ""} | Topeka, KS | HEM Automotive`;
  const pageDescription = `Explore our used ${car.vehicle.year} ${
    car.vehicle.make
  } ${
    car.vehicle.model
  } with ${car.vehicle.mileage?.toLocaleString()} miles. Available now at HEM Automotive in Topeka, KS for ${car.salePrice?.toLocaleString()}. Schedule a test drive today!`;
  const pageImage = car.images[0] || "/path/to/default-image.jpg";
  const pageUrl = `https://hemautomotive.com/sales/${car.vehicle._id}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "${car.vehicle.bodyType}",
              "name": "${car.vehicle.year} ${car.vehicle.make} ${
            car.vehicle.model
          }",
              "description": "${pageDescription}",
              "image": "${pageImage}",
              "url": "${pageUrl}",
              "brand": "${car.vehicle.make}",
              "model": "${car.vehicle.model}",
              "vehicleTransmission": "${car.vehicle.transmission || "N/A"}",
              "fuelType": "${car.vehicle.fuelType || "N/A"}",
              "mileageFromOdometer": "${car.vehicle.mileage?.toLocaleString()} miles",
              "offers": {
                "@type": "Offer",
                "price": "${car.salePrice?.toLocaleString()}",
                "priceCurrency": "USD",
                "url": "${pageUrl}"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="bg-HEMgray text-white min-h-screen">
        <section className="relative bg-black text-white">
          <img
            src={car.images[0]}
            alt={`${car.vehicle.make} ${car.vehicle.model}`}
            className="w-full h-auto max-h-[40rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-Bungee mb-2">
              {car.vehicle.year} {car.vehicle.make} {car.vehicle.model}{" "}
              {car.vehicle.trim}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold">
              ${car.salePrice?.toLocaleString()}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="image-gallery">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
                {car.images.length > 0 ? (
                  car.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${car.vehicle.make} ${car.vehicle.model} Image ${
                        index + 1
                      }`}
                      className="w-full h-auto object-cover rounded-lg cursor-pointer"
                      style={{ aspectRatio: "3 / 2" }}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-Urbanist mb-4">
                Vehicle Details
              </h2>
              <p className="mb-6">
                {car.description || "No description available"}
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Make:</strong> {car.vehicle.make}
                </li>
                <li>
                  <strong>Model:</strong> {car.vehicle.model}
                </li>
                <li>
                  <strong>Trim:</strong> {car.vehicle.trim || "N/A"}
                </li>
                <li>
                  <strong>Year:</strong> {car.vehicle.year}
                </li>
                <li>
                  <strong>Price:</strong> ${car.salePrice?.toLocaleString()}
                </li>
                <li>
                  <strong>Exterior Color:</strong> {car.vehicle.exteriorColor}
                </li>
                <li>
                  <strong>Interior Color:</strong> {car.vehicle.interiorColor}
                </li>
                <li>
                  <strong>Vehicle Type:</strong> {car.vehicle.bodyType || "N/A"}
                </li>
                <li>
                  <strong>Motor:</strong> {car.vehicle.engine || "N/A"}
                </li>
                <li>
                  <strong>Mileage:</strong>{" "}
                  {car.vehicle.mileage?.toLocaleString()} miles
                </li>
              </ul>

              {car.features && (
                <div className="mt-6">
                  <h3 className="text-xl md:text-2xl font-Urbanist mb-4">
                    Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex items-center gap-4">
                {/* CARFAX Button with Animation */}
                <a
                  href={`http://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&vin=${car.vehicle.VIN}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src="http://www.carfaxonline.com/assets/subscriber/carfax_free_button.gif"
                    alt="Free CARFAX Report"
                    className="rounded-lg h-20"
                  />
                </a>

                {/* Schedule a Test Drive Button */}
                <Link to={`/reserve/${car.vehicle._id}`} className="bg-HEMgreen text-black py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition hover:bg-black hover:text-HEMgreen">
                <p className="text-center">Reserve this</p>
                  <p className="text-center">{car.vehicle.year} {car.vehicle.make} {car.vehicle.model}</p>
                </Link>
                
              </div>
            </div>
          </div>
        </section>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-2 text-HEMgreen bg-HEMgray rounded-full focus:outline-none transform transition duration-300 hover:scale-110 hover:shadow-lg"
              onClick={closeImage}
            >
              &times;
            </button>
            <img
              src={car.images[selectedImageIndex]}
              alt="Selected Vehicle"
              className="w-full h-auto object-contain"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-HEMgray bg-HEMgreen rounded-full focus:outline-none transition hover:bg-black hover:text-HEMgreen hover:scale-110 hover:shadow-lg"
              onClick={prevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-HEMgray bg-HEMgreen rounded-full focus:outline-none transition hover:bg-black hover:text-HEMgreen hover:scale-110 hover:shadow-lg"
              onClick={nextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
