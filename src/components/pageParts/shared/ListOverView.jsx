export default function ListOverview(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 border-t-2 border-[#00ff00]">
        {props.OverviewCards.map((overviewCard) => (
          <div key={overviewCard.Title} className=''>
            <img   
              src={overviewCard.image} 
              alt=""
              aria-hidden="true"
              className='brightness-[30%]' 
            />
            <div className="">
              <div className="px-6 pb-8 md:px-8">
                <h3 className="text-2xl font-Urbanist tracking-wider  lg:text-xl font-medium text-stroke text-stroke-fill-white text-stroke-white uppercase mt-8 text-wrap">{overviewCard.name}</h3>
                <p className="mt-4 text-lg text-[#cccccc] lg:text-normal font-Urbanist tracking-wide text-stroke-[#dddddd] text-stroke text-stroke-fill-[#dddddd] font-extralight normal-case">{overviewCard.description}</p>
              </div>
              </div>
            </div>
          ))}
      </div>
    )
}