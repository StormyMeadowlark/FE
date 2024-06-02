import {
    BoltIcon,
    CurrencyDollarIcon,
    GlobeAmericasIcon,
    CreditCardIcon,
    ClipboardDocumentListIcon,
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'No cost',
      description:
        "They say nothing in life is free of cost. Except this warranty. Really. A 12 month / 12,000 mile warranty on parts & the best part it's free",
      icon: CurrencyDollarIcon,
    },
    {
      id: 2,
      name: '35,000 participating shops',
      description:
        "After your warranty is registered, it's just one call from anywhere in the U.S. & you will be on your way to a repaired car.",
      icon: GlobeAmericasIcon,
    },
    {
      id: 3,
      name: 'Roadside Assistance',
      description:
        "The one call convenience doesn't end at repairing your vehicle, it also boasts a suite of roadside assistance, Services include towing, lock-out, flat tire changing, fuel, oil, fluid & water deliver service, & jump starts",
      icon: BoltIcon,
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'No Credit Needed',
      description:
        "And no hit to your FICO® Score. All you need is a phone number, email address, checking account, steady income of at least $750, and able to enter into a legal contract",
      icon: CreditCardIcon,
    },
    {
      id: 2,
      name: 'More Ways to Pay',
      description:
        "Each situation is unique which is why your goals depends on how you pay. Choose the lowest overall cost, most flexible, or lowest payment option. Sometimes life gets you downs, but with all these repayment options, it doesn't have too",
      icon: ClipboardDocumentListIcon,
    },
  ]
  
  export default function WarrantyAndFinancing() {
    return (
      <div className="overflow-hidden bg-[#333333] pb-10 text-white px-20">
        <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
  
          <div className="relative max-w-7xl">
            <h2 className="pt-8 pb-4 lg:text-5xl lg:max-w-5xl text-stroke text-stroke-fill-[#00ff00] text-stroke-black sm:text-4xl font-Bungee">
              we&apos;ve got you covered,<br />backed by the names you trust
            </h2>
            <div className='flex flex-1 justify-between pt-4 pb-8'>
              <a href='#' className='flex basis-1/4 px-3'>
                <img 
                  src='/src/assets/images/FactoryMotorPartsPartnersNetwork.png'
                  alt='Factory Motor Parts Logo'
                  className=''
                />
              </a>
              <a href='#' className='flex basis-1/4 px-3'>
                <img 
                  src='/src/assets/images/SnapLogo.png'
                  alt='Snap Financing Logo'
                  className=''
                />
              </a>
              <a href='#' className='flex basis-1/4 px-3'>
                <img 
                  src='/src/assets/images/CarFax.png'
                  alt='CarFax Car Care Service Center Logo'
                  className=''
                />
              </a>
              <a href='#' className='flex basis-1/4 px-3'>
                <img 
                  src='/src/assets/images/BBB.png'
                  alt='CarFax Car Care Service Center Logo'
                  className=''
                />
              </a>
            </div>
            <p className="font-Urbanist tracking-wider font-medium text-xl text-white lg:max-w-3xl">
              As proud members of FMP Partners Network Warranty Program, SNAP Financing, CarFax Car Care Service Shop Loyalty Program & Better Business Bureau we have so much to offer!
            </p>
          </div>
  
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl">12 Month / 12,000 Mile Warranty</h3>
              <p className="mt-4 text-lg font-Urbanist tracking-wider">
              Don&apos;t be surprised by a breakdown. Factory Motor Parts Network Partners Warranty Program offers one call claims, roadside assistance & many other benefits. After you activate it. Activate your warranty, just go do it. 
              </p>
              <div>
                <div className='rounded-full px-3 py-1 mt-4 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 shadow-xl shadow-black border-b border-[#00ff00] hover:scale-[98%] font-Play'>
                  Been to the shop recently? { ' ' }
                  <a href="#" className="font-semibold text-white">
                    <span className="inset-0" aria-hidden="true" />
                      Activate Your Warranty Here
                  </a>
                </div>
              </div>
  
              <dl className="mt-20 space-y-10 font-Urbanist tracking-wide">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative shadow-xl shadow-[#222222]">
                    <dt>
                      <div className="flex h-16 w-16 items-center justify-center hexagon bg-[#00ff00] text-black -ml-8">
                        <item.icon className="h-12 w-12" aria-hidden="true" />
                      </div>
                      <p className="px-10 -mt-8 pt-4 text-xl rounded-t-2xl bg-[#777777] text-[#00ff00] ">{item.name}</p>
                    </dt>
                    <dd className="px-10 border-b border-[#00ff00]/50 pb-4 rounded-b-2xl bg-[#777777] text-white shadow-xl shadow-[#222222]">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="/src/assets/images/FactorMotorPartsBothLogos.png"
                alt=""
              />
            </div>
          </div>
  
          <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
  
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-Urbanist font-semibold tracking-wider text-[#00ff00] sm:text-3xl">Up to $5000 in Financing</h3>
                <p className="mt-4 text-lg font-Urbanist tracking-wider">
                Break downs suck when you aren&apos;t prepared, we understand. Snap Financing offers financing for parts & repairs between $300-$5000. Get approved before repairs are made with no credit hit.
                </p>
                <div>
                  <p className='rounded-full px-3 py-1 mt-4 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 shadow-xl shadow-black border-b border-[#00ff00] hover:scale-[98%] font-Play'>
                  Interested in Financing?{ '  ' }
                  
                  <a href="#" className="font-semibold text-white">
                  <span className="inset-0" aria-hidden="true" />
                    Click Here to Apply
                  </a>
                </p>
              </div>
  
                <dl className="mt-20 space-y-10 font-Urbanist tracking-wide">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative shadow-xl shadow-[#222222]">
                      <dt>
                        <div className="flex h-16 w-16 items-center justify-center hexagon bg-[#00ff00] text-black -ml-8">
                          <item.icon className="h-12 w-12" aria-hidden="true" />
                        </div>
                        <p className="px-10 -mt-8 pt-4 text-xl rounded-t-2xl bg-[#777777] text-[#00ff00] ">{item.name}</p>
                      </dt>
                      <dd className="px-10 border-b border-[#00ff00]/50 pb-4 rounded-b-2xl bg-[#777777] text-white shadow-xl shadow-[#222222]">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
  
              <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                </svg>
                <img
                  className="relative mx-auto"
                  width={490}
                  src="/src/assets/images/Snap.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }