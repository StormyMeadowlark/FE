import ImageButtonOne from "../../../utils/imageButton1"
export default function ListServices(props) {
    return (
      <div className="grid md:grid-cols-4 grid-cols-3 -translate-y-16 text-white ">
        {props.services.map((service) => {
          return (
            <ul key={service.index}>
              <li className="p-1 md:text-2xl md:-my-6 -my-4">
                <ImageButtonOne
                  href={service.href}
                  icon={service.icon}
                  title={service.title}
                />
              </li>
            </ul>
          );
        })}
      </div>
    );
}