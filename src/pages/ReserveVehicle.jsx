import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

export default function ReserveVehiclePage() {
  const { vehicleId } = useParams();
  const tenantId = "66d063ca0800f9ad017e7cfc";
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("Submit");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const vehicleRes = await axiosInstance.get(`/vehicles/${tenantId}/${vehicleId}`);
        const vehicleData = vehicleRes.data.vehicle;
  
        const saleRes = await axiosInstance.get(`/sales/${tenantId}/${vehicleId}`);
        const saleData = saleRes.data;
  
        const mediaRes = await axiosInstance.get(`/vehicle-media/${tenantId}/${vehicleId}`);
        const mediaData = mediaRes.data.media;
  
        setCar({
          ...saleData,
          vehicle: vehicleData,
          features: vehicleData.features,
          images:
            mediaData[0]?.photos ||
            mediaData[0]?.media?.map((m) => m.mediaUrl) ||
            [],
        });
  
        setFormData((prev) => ({
          ...prev,
          message: `I'd like to reserve the ${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim || ""}.`,
        }));
      } catch (err) {
        console.error("Error fetching vehicle:", err);
      }
    };
  
    fetchCar();
  }, [vehicleId]);

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) errors.phoneNumber = "Phone number must be 10 digits";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post("https://my-garage-ed2e46b8c87b.herokuapp.com/api/v1/email/send-quote", formData, {
          headers: { "Content-Type": "application/json" },
        });
        setResult("✅ Thank you for your interest! We'll contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting reservation:", error);
        setResult("❌ There was an error. Please try again.");
      } finally {
        setStatus("Submit");
      }
    } else {
      setStatus("Submit");
    }
  };

  if (!car) return <p className="text-white p-10">Loading vehicle info...</p>;

  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white font-Urbanist">
            <div
      className="w-full bg-cover bg-center py-10 px-6"
      style={{
        backgroundImage: `url(${car.images?.[0] || "/fallback-image.jpg"})`,
      }}
    >
      <div className="max-w-4xl mx-auto mt-40 py-12 px-8 rounded-xl bg-HEMgray bg-opacity-50">
        <h1 className="text-3xl font-bold mb-4 text-HEMgreen">
          Reserve the {car.vehicle.year} {car.vehicle.make} {car.vehicle.model}
        </h1>
        <p className="mb-6 text-gray-300">
          We'll get in touch to confirm your interest in this vehicle and schedule a test drive or purchase.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["firstName", "lastName", "email", "phoneNumber"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-white shadow-md ring-1 ring-inset ring-white focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#333333]"
                required
              />
              {formErrors[field] && <p className="text-red-500">{formErrors[field]}</p>}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-white shadow-md ring-1 ring-inset ring-white focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#333333]"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-HEMgreen text-black py-2 px-6 rounded font-bold hover:bg-white hover:text-HEMgreen transition"
          >
            {status}
          </button>
          {result && <p className="mt-4">{result}</p>}
        </form>
      </div>
      </div>
    </div>
  );
}
