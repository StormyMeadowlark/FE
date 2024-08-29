import React from "react";

export default function BlogHero() {
  return (
    <section className="bg-[#333333] text-white pb-20 pt-96">
      <div className="container mx-auto px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold font-Play text-[#00ff00] mb-6">
              Welcome to HEM AutoSchool
            </h1>
            <p className="text-lg font-Urbanist tracking-wide mb-8">
              Explore our expert insights, maintenance tips, and the latest
              automotive industry news. From car enthusiasts to everyday
              drivers, our blog is your go-to resource for keeping your vehicle
              in top shape.
            </p>
            <button className="bg-[#00ff00] text-[#333333] px-6 py-3 rounded-full text-xl font-bold hover:bg-[#00cc00] transition">
              Explore the Blog
            </button>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Automotive blog hero image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
