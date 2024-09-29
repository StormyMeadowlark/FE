import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Dummy data for car listings (Simulate large inventory for testing)
const allCars = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  make: index % 2 === 0 ? "Infiniti" : "Tesla",
  model: index % 2 === 0 ? "SedanX50" : "Model S",
  year: 2018 + (index % 5),
  price: `$${(25000 + index * 1000).toLocaleString()}`,
  exteriorColor: index % 2 === 0 ? "Black" : "White",
  interiorColor: index % 2 === 0 ? "Tan" : "Black",
  vehicleType: "Sedan",
  motor: index % 2 === 0 ? "V6" : "Electric",
  mileage: 15000 + index * 500,
  image: "/path/to/image.jpg",
}));

export default function InventoryPage() {
  const [cars, setCars] = useState(allCars.slice(0, 10)); // Initially load 10 cars
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const [selectedFilters, setSelectedFilters] = useState({
    make: "",
    model: "",
    year: "",
    exteriorColor: "",
    minMileage: 0,
    maxMileage: 100000,
    minPrice: 0,
    maxPrice: 100000,
  });

  const loadMoreCars = () => {
    if (loading) return; // Prevent duplicate fetches while loading
    setLoading(true);
    const nextCars = allCars.slice(page * 10, (page + 1) * 10);
    setTimeout(() => {
      setCars((prevCars) => [...prevCars, ...nextCars]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulate network latency
  };

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreCars();
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: value,
    });
  };

  const handleMileageChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: Number(value),
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter cars based on selected criteria
  const filteredCars = cars.filter((car) => {
    const {
      make,
      model,
      year,
      exteriorColor,
      minMileage,
      maxMileage,
      minPrice,
      maxPrice,
    } = selectedFilters;

    const carPrice = Number(car.price.replace(/[^0-9.-]+/g, ""));
    return (
      (make === "" || car.make === make) &&
      (model === "" || car.model === model) &&
      (year === "" || car.year.toString() === year) &&
      (exteriorColor === "" || car.exteriorColor === exteriorColor) &&
      car.mileage >= minMileage &&
      car.mileage <= maxMileage &&
      carPrice >= minPrice &&
      carPrice <= maxPrice
    );
  });

  // Sort the filtered cars based on the selected sorting option
  const sortedCars = filteredCars.sort((a, b) => {
    const carPriceA = Number(a.price.replace(/[^0-9.-]+/g, ""));
    const carPriceB = Number(b.price.replace(/[^0-9.-]+/g, ""));
    switch (sortOption) {
      case "priceLowToHigh":
        return carPriceA - carPriceB;
      case "priceHighToLow":
        return carPriceB - carPriceA;
      case "yearNewest":
        return b.year - a.year;
      case "yearOldest":
        return a.year - b.year;
      case "mileageLowToHigh":
        return a.mileage - b.mileage;
      case "mileageHighToLow":
        return b.mileage - a.mileage;
      default:
        return 0;
    }
  });

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
          <h1 className="text-5xl font-Bungee mb-4">
            FIND YOUR PERFECT USED CAR
          </h1>
          <p className="text-xl mb-6">Which Vehicle Are You Looking For?</p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <select
              name="make"
              value={selectedFilters.make}
              onChange={handleFilterChange}
              className="bg-HEMgray text-white py-2 px-4 border"
            >
              <option value="">All Makes</option>
              <option value="Infiniti">Infiniti</option>
              <option value="Tesla">Tesla</option>
            </select>
            <select
              name="model"
              value={selectedFilters.model}
              onChange={handleFilterChange}
              className="bg-HEMgray text-white py-2 px-4 border"
            >
              <option value="">All Models</option>
              <option value="SedanX50">SedanX50</option>
              <option value="Model S">Model S</option>
            </select>
            <select
              name="year"
              value={selectedFilters.year}
              onChange={handleFilterChange}
              className="bg-HEMgray text-white py-2 px-4 border"
            >
              <option value="">All Years</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <select
            name="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="bg-HEMgray text-white py-2 px-4 border border-HEMgreen rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="yearNewest">Year: Newest to Oldest</option>
            <option value="yearOldest">Year: Oldest to Newest</option>
            <option value="mileageLowToHigh">Mileage: Low to High</option>
            <option value="mileageHighToLow">Mileage: High to Low</option>
          </select>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-Urbanist mb-6">Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCars.map((car) => (
            <div
              key={car.id}
              className="bg-HEMgray text-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 relative group"
            >
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-xl font-bold">
                {car.make} {car.model}
              </h3>
              <p className="text-sm">{car.year}</p>
              <p className="text-lg font-semibold">{car.price}</p>
              <p className="text-sm">Exterior: {car.exteriorColor}</p>
              <p className="text-sm">Interior: {car.interiorColor}</p>
              <p className="text-sm">Mileage: {car.mileage} miles</p>
              <Link to={`/sales/${car.id}`}>
                <button className="mt-4 bg-HEMgreen text-black py-2 px-4 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center text-HEMgreen mt-8">
            Loading more cars...
          </div>
        )}
      </section>
    </div>
  );
}
