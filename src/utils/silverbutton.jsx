export default function SilverButton({href, text}) {

  return (
    <button className="silverbg rounded-md p-6 md:px-8 shadow-lg shadow-[#222222] text-white border-b border-[#00ff00] text-base font-Play font-semibold tracking-wide w-full text-left" href={href}>
      {text}
    </button>
  );
}



