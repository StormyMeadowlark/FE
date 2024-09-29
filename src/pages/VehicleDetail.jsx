import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Mock data (Replace this with actual data fetching logic)
const cars = [
  {
    id: 1,
    make: "Infiniti",
    model: "SedanX50",
    year: 2018,
    price: "$25,000",
    exteriorColor: "Black",
    interiorColor: "Tan",
    vehicleType: "Sedan",
    motor: "V6",
    mileage: 35000,
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg",
    ],
    description:
      "This luxurious Infiniti SedanX50 offers unparalleled comfort and performance...",
    features: [
      "Leather Seats",
      "Sunroof",
      "Navigation System",
      "Bluetooth Connectivity",
      "Backup Camera",
    ],
  },
  {
    id: 2,
    make: "Tesla",
    model: "Model S",
    year: 2020,
    price: "$70,000",
    exteriorColor: "White",
    interiorColor: "Black",
    vehicleType: "Sedan",
    motor: "Electric",
    mileage: 15000,
    images: [
      "/path/to/tesla1.jpg",
      "/path/to/tesla2.jpg",
      "/path/to/tesla3.jpg",
    ],
    description:
      "Experience the future with this Tesla Model S featuring cutting-edge technology...",
    features: [
      "Autopilot",
      "Panoramic Sunroof",
      "Premium Sound System",
      "Heated Seats",
      "Wireless Charging",
    ],
  },
  // Add more car objects as needed
];

export default function ProductDetailPage() {
  const { vehicleId } = useParams();
  console.log('vehicleId:', vehicleId);
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Parse vehicleId to integer and find the car with matching id
    const selectedCar = cars.find((c) => c.id === parseInt(vehicleId, 10));
    setCar(selectedCar);
  }, [vehicleId]);

  if (!car) {
    return (
      <div className="bg-HEMgray text-white min-h-screen flex items-center justify-center">
        <p>Car not found</p>
      </div>
    );
  }

  return (
    <div className="bg-HEMgray text-white min-h-screen">
      {/* Hero Section with Car Image */}
      <section className="relative bg-black text-white">
        <img
          src={car.images[0]} // Display the first image
          alt={`${car.make} ${car.model}`}
          className="w-full h-96 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-Bungee mb-2">
            {car.year} {car.make} {car.model}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">{car.price}</p>
        </div>
      </section>

      {/* Car Details Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="flex flex-col gap-4">
              {car.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${car.make} ${car.model} Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Car Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-Urbanist mb-4">
              Vehicle Details
            </h2>
            <p className="mb-6">{car.description}</p>

            <ul className="space-y-2">
              <li>
                <strong>Make:</strong> {car.make}
              </li>
              <li>
                <strong>Model:</strong> {car.model}
              </li>
              <li>
                <strong>Year:</strong> {car.year}
              </li>
              <li>
                <strong>Price:</strong> {car.price}
              </li>
              <li>
                <strong>Exterior Color:</strong> {car.exteriorColor}
              </li>
              <li>
                <strong>Interior Color:</strong> {car.interiorColor}
              </li>
              <li>
                <strong>Vehicle Type:</strong> {car.vehicleType}
              </li>
              <li>
                <strong>Motor:</strong> {car.motor}
              </li>
              <li>
                <strong>Mileage:</strong> {car.mileage.toLocaleString()} miles
              </li>
            </ul>

            {/* Features */}
            <h3 className="text-xl md:text-2xl font-Urbanist mt-8 mb-4">
              Features
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-8">
              <button className="bg-HEMgreen text-black py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-black hover:text-HEMgreen transition-all">
                Schedule a Test Drive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
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
  );
}
