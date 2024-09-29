import { Link } from "react-router-dom";
const VIN = () => {
  return (
    <div>
      <div>
        <label
          htmlFor="VIN"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          VIN{" "}
        </label>
        <div className="mt-2">
          <input
            placeholder="17 Digit- Vehicle Identification Number"
            id="VIN"
            name="VIN"
            type="VIN"
            autoComplete="VIN"
            required
            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
          />
        </div>
      </div>
      <div className="text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left hidden">
        <p className="block">
          Unsure of your vehicles VIN? It&apos;s okay, you can enter your
          vehicles <Link>year, make, model </Link>
          <p className="inline-block">or</p>
          <Link className=""> license plate number.</Link>
        </p>
      </div>
    </div>
  );
};

export default VIN