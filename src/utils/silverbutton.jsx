export default function SilverButton({text= "I'm Empty Fill Me"}) {

  return (
    <button className="silverbg45 text-center shadow-lg rounded-xl shadow-[#222222] text-white hover:text-[#00ff00] hover:scale-[95%] text-normal font-Play font-semibold tracking-wide py-6 border-b border-[#00ff00]">
        <div className="">{text}</div>
    </button>
  );
}



