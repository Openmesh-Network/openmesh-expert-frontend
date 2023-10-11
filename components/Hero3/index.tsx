/* eslint-disable react/no-unescaped-entities */
const Hero3 = () => {
  return (
    <>
      <div className="pt-[80px]"></div>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[195px]"
      >
        <div className="mx-auto xl:min-w-[720px]">
          <div className="mx-auto xl:min-w-[720px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/hero3/manTwo.png`}
              alt="image"
              className={`absolute top-0 left-[2px] right-0 z-[-1] m-auto w-[380px] lg:min-w-[550px] xl:min-w-[730px]`}
            />
            <div className="mt-[120px] hidden justify-center text-[32px] font-bold tracking-[2.2%] md:flex md:text-[33px] lg:mt-0 lg:text-[48px] xl:text-[64px]">
              Joining{' '}
              <span className="mr-[14px] ml-[5px] text-white">
                {' '}
                the Openmesh Expert
              </span>{' '}
              Network
            </div>
            <div className="mt-[120px] justify-center text-[20px] font-bold tracking-[2.2%] text-white md:hidden lg:text-[64px]">
              Joining the Openmesh Expert Network
            </div>
          </div>
          <div className="mx-auto mt-[100px] items-start justify-center md:mt-[150px] md:grid md:grid-cols-3 md:gap-x-[90px] md:gap-y-[50px] lg:mt-[301px] lg:gap-y-[100px] xl:w-[1250px] xl:gap-x-[120px] xl:gap-y-[146px]">
            <div className="xl:w-[320px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                Cost, speed, and scale
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Deploy, and manage data infrastructure and data applications in
                minutes instead of months
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[320px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px]  lg:!leading-[150%] xl:text-[24px]">
                One-stop for all your needs
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Infrastructure deployment and management tools, APIs, data
                connectivity, analytics, access to data all in one place
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[320px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%]  xl:text-[24px]">
                Extreme flexibility and customization
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                All Openmesh stack is open source. You’ll have full freedom for
                customization with the Openmesh Open License (OOL)
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[320px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                Fast-growing ecosystem
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Fueled by active community contribution, Openmesh ecosystem is
                growing at unprecedented pace
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[320px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                Rapid deployment
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Openmesh empowers developers to build, deploy and manage their
                own decentralized data infrastructure in mere minutes, instead
                of months
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[330px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                OEN NFT Badge and Tokens
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Certified Openmesh Experts receive an OEN NFT badge as a
                recognition of your expertise
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[330px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                Pioneering expertise
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                By becoming an OE, you'll be at the forefront of decentralized
                data technology, positioning yourself as an expert in a field
                that's shaping the future of the internet
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[330px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%] xl:text-[24px]">
                Networking Opportunities
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Being an OE means joining a network of like-minded
                professionals, fostering collaboration, partnerships, and
                business opportunities
              </div>
            </div>
            <div className="mt-[20px] md:mt-0 xl:w-[330px]">
              <div className="text-[14px] font-bold tracking-[2.2%] lg:text-[17px] lg:!leading-[150%]  xl:text-[24px]">
                Visibility to get external clients
              </div>
              <div className="mt-[10px] text-[12px] font-medium text-[#959595] lg:mt-[15px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Openmesh will develop a dedicated website where Openmesh Experts
                will be listed based on their expertise, specialization, and
                region
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[55px] flex h-[1px] bg-[#D4D4D4] lg:mt-[107px] xl:w-[900px]"></div>
      </section>
    </>
  )
}

export default Hero3
