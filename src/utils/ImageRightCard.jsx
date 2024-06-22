import SilverButton from "./silverbutton";

export default function ImageRightCard({title, src, description, href, text}) {
  return (
    <div className="bg-[#333333] text-white flex justify-center pb-10">
      <div className="max-w-7xl">
        <h3 className="flex justify-center py-10">{title}</h3>
        <div className="flex justify-center">
          <div className="basis-2/5 mx-10">
            <img src={src} />
          </div>
          <div className="flex flex-col basis-1/4 mx-10">
            <div>
              <p>{description}</p>
            </div>
            <SilverButton href={href} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
