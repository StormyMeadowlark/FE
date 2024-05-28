export default function AccountCallToAction() {
  return (
    <div className="relative bg-[#00ff00]">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/4 translate-x-[55%] py-20">
        <img
          className="h-full w-full object-cover hexagon brightness-200"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />

      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-[33%]">
          <h2 className="font-semibold text-[#222222] font-Urbanist my-6">Okay, it&apos;s that time on the home page where we ask you to take a beneficial action ladies & gentelmen. But first these messages: </h2>
          <p className="mt-2 text-3xl font-Bungee  text-stroke text-stroke-fill-white text-stroke-[#333333] sm:text-4xl">Simplifying vehicle maintenance.</p>
          <p className="text-lg font-Urbanist text-[#111111] pt-4">
              Personalized maintenance reminders sent to your phone or email! Priority online scheduling & bill pay are just a few perks to creating an account with us! We take safety seriously. After all our motto is, breakdowns won&apos;t break you down! 
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md silverbg45 px-3.5 py-2.5 text-xl font-black  text-white shadow-xl border-b border-[#00ff00] shadow-[#222222]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#00dd00] font-Play hover:text-[#00ff00] hover:scale-[95%]"
            >
              Create Account Now
            </a>
            <a href="#" className=" bg-[#333333] text-white font-Play ml-6 ring-2 rounded-md   hover:ring-white shadow-[#222222] shadow-lg p-2">
                Join Our Email List <span aria-hidden="true"></span>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}