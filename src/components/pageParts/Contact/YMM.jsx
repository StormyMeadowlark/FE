import { Link } from "react-router-dom";
const YMM = () => {
  return (
    <div>
      <div className="flex gap-x-4">
        <div className="basis-[33%]">
          <label
            htmlFor="Year"
            className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
          >
            Year{" "}
          </label>
          <div className="mt-2">
            <input
              placeholder="4-digit year"
              id="Year"
              name="Year"
              type="Year"
              autoComplete="Year"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            />
          </div>
        </div>
        <div className="basis-[33%]">
          <label
            htmlFor="Make"
            className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
          >
            Make{" "}
          </label>
          <div className="mt-2">
            <input
              placeholder="Vehicle Make"
              id="Make"
              name="Make"
              type="Make"
              autoComplete="Make"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            />
          </div>
        </div>
        <div className="basis-[33%]">
          <label
            htmlFor="Model"
            className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
          >
            Model{" "}
          </label>
          <div className="mt-2">
            <input
              placeholder="Model"
              id="Model"
              name="Model"
              type="Model"
              autoComplete="Model"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            />
          </div>
        </div>
      </div>
      <div className="text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left">
        <p className="block">
          Unsure of your vehicles year, make, and/or model? It&apos;s okay, you
          can enter your vehicles <Link className="">VIN </Link>
          <p className="inline-block">or</p>
          <Link className=""> license plate number.</Link>
        </p>
      </div>
    </div>
  );
};

export default YMM