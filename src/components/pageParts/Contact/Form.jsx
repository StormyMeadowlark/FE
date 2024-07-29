<div>
  <h3 className=" text-stroke text-stroke-fill-[#00ff00] text-stroke-[#333333] px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-5xl uppercase font-Bungee font-black pt-10">
    Request a Quote
  </h3>
  <form className="space-y-6 py-10" onSubmit={handleSubmit}>
    <div>
      <fieldset>
        <h3
          className="block text-base font-medium leading-6 text-white
                font-Urbanist tracking-wide text-left"
        >
          What kind of customer are you?
          <p className="text-[.8rem] text-[#aaaaaa]">Defaults to retail</p>
        </h3>

        <div className="flex flex-row mt-2 gap-x-2">
          {["Retail", "Dealership", "Fleet", "Other"].map((category) => (
            <label key={category} className="flex items-center space-x-2 mt-2">
              <input
                type="radio"
                name="customerCategory"
                value={category}
                checked={formData.customerCategory === category}
                onChange={handleChange}
                className="form-radio text-[#00ff00] border border-[#00ff00]"
                required
              />
              <span className="text-white">{category}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
    <div className="flex gap-x-4">
      <div className="basis-[50%]">
        <label
          htmlFor="FirstName"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          First Name:
        </label>
        <div className="mt-2">
          <input
            id="firstName"
            name="firstName"
            type="Name"
            required={true}
            placeholder="FirstName"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            maxLength="100"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <div className="error">{formErrors.firstName}</div>
          )}
        </div>
      </div>

      <div className="basis-[50%]">
        <label
          htmlFor="LastName"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          Last Name:
        </label>
        <div className="mt-2">
          <input
            id="lastName"
            name="lastName"
            type="Name"
            required={true}
            placeholder="LastName"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            maxLength="100"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && (
            <div className="error">{formErrors.lastName}</div>
          )}
        </div>
      </div>
    </div>
    <div className="flex gap-x-4">
      <div className="basis-[30%]">
        <label
          htmlFor="phoneNumber"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          Phone Number:
        </label>
        <div className="mt-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            placeholder="7857302900"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            minLength="10"
            maxLength="10"
            pattern="^[0-9]{10}$"
            required={true}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && (
            <div className="error">{formErrors.phoneNumber}</div>
          )}
        </div>
      </div>

      <div className="basis-[70%]">
        <label
          htmlFor="email"
          className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
        >
          Email:
        </label>
        <div className="mt-2">
          <input
            placeholder="HEMautomotive@example.com"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required={true}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </div>
      </div>
    </div>

    <div>
      <label>Input Type:</label>
      <select
        name="inputType"
        value={formData.inputType}
        onChange={handleChange}
      >
        <option value="VIN">VIN</option>
        <option value="YearMakeModel">Year, Make, Model</option>
        <option value="LicensePlate">License Plate</option>
      </select>
    </div>
    {formData.inputType === "VIN" && (
      <div>
        <label>VIN:</label>
        <input
          type="text"
          name="vin"
          value={formData.vin}
          onChange={handleChange}
        />
        {formErrors.vin && <div className="error">{formErrors.vin}</div>}
      </div>
    )}
    {formData.inputType === "YearMakeModel" && (
      <>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            list="yearOptions"
          />
          <datalist id="yearOptions">
            {yearOptions.map((year) => (
              <option key={year} value={year} />
            ))}
          </datalist>
          {formErrors.year && <div className="error">{formErrors.year}</div>}
        </div>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            list="makeOptions"
          />
          <datalist id="makeOptions">
            {makeOptions.map((make) => (
              <option key={make} value={make} />
            ))}
          </datalist>
          {formErrors.make && <div className="error">{formErrors.make}</div>}
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            list="modelOptions"
          />
          <datalist id="modelOptions">
            {modelOptions.map((model) => (
              <option key={model} value={model} />
            ))}
          </datalist>
          {formErrors.model && <div className="error">{formErrors.model}</div>}
        </div>
      </>
    )}
    {formData.inputType === "LicensePlate" && (
      <div>
        <label>License Plate:</label>
        <input
          type="text"
          name="licensePlate"
          value={formData.licensePlate}
          onChange={handleChange}
        />
        {formErrors.licensePlate && (
          <div className="error">{formErrors.licensePlate}</div>
        )}
      </div>
    )}

    <div>
      <label
        htmlFor="message"
        className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
      >
        What repair or maintenance needs done?
      </label>

      <div className="mt-2">
        <textarea
          placeholder="Provide as many details as you feel necessary"
          id="message"
          name="message"
          required={true}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
      >
        {status}
      </button>
      <h5 className="text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left">
        {result}
      </h5>
    </div>
  </form>
</div>;
