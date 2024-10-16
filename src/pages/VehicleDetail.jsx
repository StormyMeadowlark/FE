import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet"; // For managing document head
import axiosInstance from "../utils/axiosInstance";

export default function ProductDetailPage() {
  const { vehicleId } = useParams(); // Get vehicle ID from the URL
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Hardcoded tenantId for now
  const [car, setCar] = useState(null); // State to store vehicle and sale data
  const [selectedImage, setSelectedImage] = useState(null); // For image modal
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      try {
        // Fetch vehicle data from the vehicle service
        const vehicleResponse = await axiosInstance.get(
          `/vehicles/${tenantId}/${vehicleId}`
        );
        const vehicleData = vehicleResponse.data.vehicle;

        // Fetch sales data related to the vehicle
        const salesResponse = await axiosInstance.get(
          `/sales/${tenantId}/${vehicleId}`
        );
        const saleData = salesResponse.data;

        // Fetch media data related to the vehicle
        const mediaResponse = await axiosInstance.get(
          `/vehicle-media/${tenantId}/${vehicleId}`
        );
        const mediaData = mediaResponse.data.media;

        // Combine vehicle, sales, and media into one object
        setCar({
          ...saleData,
          vehicle: vehicleData,
          features: vehicleData.features, // Correctly accessing the features from vehicleId
          images:
            mediaData[0]?.photos ||
            mediaData[0]?.media?.map((m) => m.mediaUrl) ||
            [], // Check both `photos` and `media`
        });
      } catch (err) {
        setError("Error fetching vehicle details");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [vehicleId, tenantId]);

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

  // Dynamic Meta Information for SEO and Social Sharing
  const pageTitle = `Used ${car.vehicle.year} ${car.vehicle.make} ${
    car.vehicle.model
  } ${car.vehicle.trim || ""} | Topeka, KS | HEM Automotive`;
  const pageDescription = `Explore our used ${car.vehicle.year} ${
    car.vehicle.make
  } ${
    car.vehicle.model
  } with ${car.vehicle.mileage?.toLocaleString()} miles. Available now at HEM Automotive in Topeka, KS for ${car.salePrice?.toLocaleString()}. Schedule a test drive today!`;
  const pageImage = car.images[0] || "/path/to/default-image.jpg"; // Default image if no media available
  const pageUrl = `https://hemautomotive.com/sales/${car.vehicle._id}`;

  return (
    <>
      {/* Helmet for setting metadata */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Structured Data (JSON-LD for Search Engines) */}
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

      {/* The rest of your component */}
      <div className="bg-HEMgray text-white min-h-screen">
        {/* Hero Section with Car Image */}
        <section className="relative bg-black text-white">
          <img
            src={car.images[0]} // Display the first image
            alt={`${car.vehicle.make} ${car.vehicle.model}`}
            className="w-full h-auto max-h-[40rem] object-cover" // Enforce 1080x720 (3:2 aspect ratio)
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

        {/* Car Details Section */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
                {car.images && car.images.length > 0 ? (
                  car.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${car.vehicle.make} ${car.vehicle.model} Image ${
                        index + 1
                      }`}
                      className="w-full h-auto object-cover rounded-lg cursor-pointer"
                      style={{ aspectRatio: "3 / 2" }} // Maintain the aspect ratio of 1080x720
                      onClick={() => setSelectedImage(image)}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>

            {/* Car Information */}
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

              {/* Features Section */}
              {car.features && car.features.length > 0 && (
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

              {/* Call to Action */}
              <div className="mt-8">
                <button className="bg-HEMgreen text-black py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-black hover:text-HEMgreen transition-all">
                  Schedule a Test Drive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal for Full-Size Viewing */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking on the image
            >
              <img
                src={selectedImage}
                alt="Enlarged Image"
                className="max-w-full max-h-screen object-contain rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
