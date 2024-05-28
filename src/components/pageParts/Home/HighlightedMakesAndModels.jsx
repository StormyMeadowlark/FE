export default function HighlightedMakesAndModels() {
    return (
      <div className="overflow-hidden py-40 bg-[#333333]">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-2xl lg:pb-8">
              <h2 className="text-3xl py-10 text-stroke text-stroke-black text-stroke-fill-[#00ff00] lg:text-7xl uppercase font-Bungee">Highlighted Makes & Models</h2>
              <p className="font-Urbanist tracking-wide font-medium text-xl  text-white">
                Although we do service almost every make & model manufactured after 2000, we do see certain vehicles in the shop more frequently.
              </p>
              <p className="mt-6 text-[#cccccc] font-Urbanist tracking-wide">
                Here to keep you on the road. Hover over the images to see what commonly brings these vehicles to the shop!
              </p>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="inline-flex rounded-md bg-[#00ff00] px-3.5 py-2.5 text-lg font-semibold text-[#333333] shadow-lg hover:bg-[#00cc00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#00dd00] font-Play shadow-black hover:text-white hover:scale-[98%]"
                >
                  View All Makes
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover hexagon"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover hexagon"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hexagon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }  