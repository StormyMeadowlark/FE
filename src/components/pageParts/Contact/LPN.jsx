import { Link } from "react-router-dom";
const LPN = () => {
  return (
    <div>
      <div>
        <label
          htmlFor="LicensePlateNumber"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          License Plate Number
        </label>
        <div className="mt-2">
          <input
            placeholder="License Plate Number"
            id="LicensePlateNumber"
            name="LicensePlateNumber"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
          />
        </div>
      </div>
      <div className="text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left">
        <p className="block">
          Unsure of your license plate number? It&apos;s okay, you can enter
          your vehicles <Link className="">year, make, model </Link>
          <p className="inline-block">or</p>
          <Link className=""> your VIN.</Link>
        </p>
      </div>
    </div>
  );
};

export default LPN