import SilverButton from "./silverbutton";

export default function ImageRightCard({title, src, description, href, text}) {
  return (
    <div className="bg-[#333333] text-white flex justify-center pb-20">
      <div className="lg:max-w-[55vw]">
        <h3 className="flex justify-center py-10 text-3xl font-Play font-black tracking-wide text-[#00ff00]">
          {title}
        </h3>
        <div className="lg:flex lg:justify-center">
          <div className="lg:basis-2/5 mx-10">
            <img src={src} className="hexagon aspect-[6/5] mt-8" loading="lazy" />
          </div>
          <div className="lg:flex lg:justify-center lg:flex-col lg:basis-2/5 mx-10">
            <div className="py-6">
              <p className="font-Urbanist tracking-wide text-lg text-[#eeeeee]">
                {description}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
