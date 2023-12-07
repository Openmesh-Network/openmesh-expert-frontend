/* eslint-disable react/no-unescaped-entities */
// how to return abs
const Hero5 = () => {
  return (
    <>
      <section
        id="learning"
        className="relative z-10 overflow-hidden bg-white px-[20px] pb-[50px] pt-[45px] text-[#000000] lg:pb-[5px] lg:pt-[90px]"
      >
        <div className="mx-auto">
          <div className="flex justify-center text-center text-[24px] font-bold -tracking-[2%] text-[#000000] lg:text-[33px] xl:text-[48px]">
            Journey to become an Openmesh Expert
          </div>
          <div className="mx-auto mt-[21px] flex w-[140px] justify-center text-center text-[14px] font-bold -tracking-[2%] text-[#000000] lg:mt-[42px]  xl:text-[20px]">
            Start here
          </div>
          <div className="mt-[40px] justify-center lg:mt-[9px] lg:flex">
            <div className="border-[#D4D4D4] lg:border-r-[1px] lg:px-[72px] lg:py-[64px]">
              <div className="lg:w-[350px] xl:w-[400px]">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/new/requiremente.png`}
                  alt="image"
                  className={`rounded-[5px]`}
                />
                <div className="mt-[10px] text-[18px] font-bold !leading-[150%] lg:mt-[20px] lg:text-[22px] xl:text-[32px]">
                  Requirement
                </div>
                <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  To expedite the process of becoming certified, you will need a
                  track record and fundamental understandings of:
                </div>
                <ul className="mt-[10px] list-inside list-disc pl-[5px] text-[10px] font-medium text-[#959595] lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  <li>Decentralized systems and data infrastructures</li>
                  <li>
                    Proficiency in Apache Kafka, PostgreSQL, Kubernetes, and
                    other relevant cloud deployment technologies
                  </li>
                  <li>
                    Past projects that exhibit strong problem-solving abilities
                    and communication skills
                  </li>
                  <li>
                    Experience in working with system integration, consulting,
                    and solution architecture
                  </li>
                </ul>
              </div>
              <div className="mt-[60px] lg:mt-[802px] lg:w-[350px] xl:w-[400px]">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/new/assessment.png`}
                  alt="image"
                  className={`rounded-[5px]`}
                />
                <div className="mt-[10px] text-[18px] font-bold !leading-[150%] lg:mt-[20px] lg:text-[22px] xl:text-[32px]">
                  Assessment
                </div>
                <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  To earn the official certification badge, you will be assessed
                  for Openmesh proficiencies.
                </div>
                <div className="mt-[10px] text-[10px] font-bold lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  Once passed, you will receive a certification badge, recorded
                  publicly on-chain and be placed in our landing page as an
                  official member of the OpenMesh Expert Network.
                </div>
                <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  You can display this badge for marketing purposes and
                  approaching potential clients.
                </div>
              </div>
            </div>
            <div className="lg:px-[72px] lg:pt-[743px]">
              <div className="mt-[60px] lg:mt-0 xl:w-[400px]">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/new/learning-path.png`}
                  alt="image"
                  className={`rounded-[5px]`}
                />
                <div className="mt-[10px] text-[18px] font-bold !leading-[150%] lg:mt-[20px] lg:text-[22px] xl:text-[32px]">
                  Learning Path
                </div>
                <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  Once the requirements are met, we will provide you with an
                  extensive library of learning materials - categorized into two
                  paths:
                </div>
                <ul className="mt-[10px] list-inside list-disc pl-[5px] text-[10px] font-medium text-[#959595] lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  <li>
                    Principles of on-chain and off-chain data implementation
                  </li>
                  <li>Core Openmesh Services: xNode, UnifiedAPI, and Pythia</li>
                </ul>
                <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  We also provide virtual sessions with our engineers to dive
                  deeper into the technical implementation plans
                </div>
                <div className="mt-[10px] w-[170px] rounded-[10px] bg-[#F3F3F3] px-[10px] pt-[10px] pb-[20px] lg:mt-[20px] xl:w-[270px]">
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                        ? process.env.NEXT_PUBLIC_BASE_PATH
                        : ''
                    }/images/hero5/woman.png`}
                    alt="image"
                    className={`w-[100px] lg:w-[254px]`}
                  />
                  <div className="mt-[10px] flex items-start">
                    <div className="text-[11px] font-bold lg:text-[16px]">
                      What is xNode?
                      <div className="text-[11px] font-medium text-[#959595] lg:text-[16px]">
                        Setup your node with just a few clicks instead of a few
                        months
                      </div>
                    </div>
                    <img
                      src={`${
                        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                          ? process.env.NEXT_PUBLIC_BASE_PATH
                          : ''
                      }/images/hero5/plus.svg`}
                      alt="image"
                      className="mt-0 flex items-start  justify-start text-start"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/hero4/license.png`}
          alt="image"
          className={`mx-auto w-[160px] lg:w-[254px]`}
        />
      </div>
      <section
        id="stories"
        className="relative z-10 overflow-hidden bg-[#fff] px-[20px] pt-[103px] pb-[25px] text-[#000000] lg:pb-[23px]"
      >
        {/* <div className="mx-auto xl:w-[1200px]">
          <div className="flex justify-center text-[32px] font-bold lg:text-[48px] lg:!leading-[77px]  xl:text-[64px]">
            Success Stories
          </div>
          <div className="mt-[30px] flex justify-center text-center text-[14px] font-medium -tracking-[2%] text-[#505050] lg:mt-[56px] lg:text-[20px] lg:!leading-[34px] xl:text-[28px]">
            Find out how OpenMesh Core Services have impacted organizations by
            making data infrastructure accessible
          </div>
          <div className="mx-auto mt-[42px] justify-center md:mt-[84px] md:grid  md:grid-cols-3 md:gap-x-[60px]">
            <div className="xl:w-[360px]">
              <div className="h-[170px] w-[145px] rounded-[10px] bg-[#E6E6E6] xl:h-[342px] xl:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[22px] lg:!leading-[150%] xl:text-[32px]">
                10Clouds{' '}
                <span className="font-medium text-[#959595]">using xNode</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                Hedge funds and algo-trading companies - Building a dynamic
                Knowledge Graph of DeFi data to facilitate real-time financial
                decisions
              </div>
            </div>
            <div className="mt-[45px] md:mt-0 xl:w-[370px]">
              <div className="h-[170px] w-[145px] rounded-[10px] bg-[#E6E6E6] xl:h-[342px] xl:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold -tracking-[2.2%] lg:mt-[20px] lg:text-[22px] lg:!leading-[150%] xl:w-[370px] xl:text-[32px]">
                Cast.ai{' '}
                <span className="font-medium text-[#959595]">
                  using UnifiedAPI
                </span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:w-[294px] lg:text-[14px] xl:text-[20px]">
                dApps - integrate APIs directly to the functionality of
                decentralized applications
              </div>
            </div>
            <div className="mt-[45px] md:mt-0 xl:w-[360px]">
              <div className="h-[170px] w-[145px] rounded-[10px] bg-[#E6E6E6] xl:h-[342px] xl:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[22px] lg:!leading-[150%] xl:text-[32px]">
                Mikhal{' '}
                <span className="font-medium text-[#959595]">using Pythia</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:w-[294px] xl:text-[20px]">
                A blockchain journalist or researcher can build a customized
                data product to keep track of specific events or trends in the
                crypto space
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default Hero5
