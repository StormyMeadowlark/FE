import useHover from "../../../hooks/useHover"
import ListServices from "../shared/ListServices"
import HeaderOne from "../../../utils/header1"
import CheckOil from "/src/assets/images/OilEngine.jpg?react"
import Diagnostics from "/src/assets/images/Diagnostics.jpg?react"
import Tires from '/src/assets/images/Tire2.jpeg?react'
import Alignment from '/src/assets/images/Alignment2.jpg?react'
import Brakes from '/src/assets/images/Brake3.jpg?react'
import SteeringSuspension from '/src/assets/images/SteeringSuspension.jpg?react'
import RemoveReplace from '/src/assets/images/EngineReplace.jpeg?react'
import HeatAC from '/src/assets/images/HeatingAC.jpg?react'
import Electrical from '/src/assets/images/Electrical.jpg?react'
import EconomyDiesel from '/src/assets/images/EconomyLightDuty.jpg?react'
import Inspection from '/src/assets/images/Inspection.jpg?react'
import AllServices from '/src/assets/images/AllServices.jpeg?react'
function ServiceOfferings() {
  const services= [
    {
      title: 'Preventative Maintenance',
      href: 'preventative-maintenance',
      icon: CheckOil,
    },
    {
      title: 'Diagnostics',
      href: 'diagnostics',
      icon: Diagnostics,
    },
    {
      title: 'Tires',
      href: 'tires',
      icon: Tires,
    },
    {
      title: 'Alignments',
      href: 'alignments',
      icon: Alignment,
    },
    {
      title: 'Brakes',
      href: 'brakes',
      icon: Brakes,
    },
    {
      title: 'Steering & Suspension',
      href: 'steering-and-suspension',
      icon: SteeringSuspension,
    },
    {
      title: 'Remove & Replace',
      href: 'remove-and-replace',
      icon: RemoveReplace,
    },
    {
      title: 'A/C & Heating',
      href: 'heat-and-air',
      icon: HeatAC,
    },
    {
      title: 'Electrical',
      href: 'electrical',
      icon: Electrical,
    },
    {
      title: 'Economy & Light Duty Diesel',
      href: 'economy-and-light-duty-diesel',
      icon: EconomyDiesel,
    },
    {
      title: 'Used Vehicle Inspections',
      href: 'used-vehicle-inspection',
      icon: Inspection,
    },
    {
      title: 'All Services',
      href: '',
      icon: AllServices,
    },
  ]


    return(
      <div className="relative bg-[#00ff00]">
        <div className="bg-[#333333] py-20 px-10">
        <div className="relative mx-auto max-w-7xl ">
          <HeaderOne textOne='We offer You' />
          <p className="relative max-w-7xl text-xl text-[#eeeeee] py-4 font-Urbanist tracking-wider">Full service repair & maintenance for most models manufactured after 2000. Just call us for older vehicles or other items with wheels, it isn&apos;t like we can&apos;t work on them... you just have to draw the line somewhere. </p>
        </div>
        </div>
        <section className="relative mx-auto max-w-7xl bg-[#00ff00] -mb-20 font-Play">
          <ListServices services={services}/>
        </section>
        </div>
    )
  }

export default ServiceOfferings