export default function HeaderTwo({textOne, textTwo, textThree, textFour}){
    return(
        <h2 className=" text-white px-8 md:px-4 lg:px-0 text-3xl md:text-5xl lg:text-7xl uppercase font-Bungee">
        {textOne}<br />{textTwo}<br /><br />{textThree}<br />{textFour}
      </h2>
    )
}