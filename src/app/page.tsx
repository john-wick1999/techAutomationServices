import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <div className='relative h-auto'>
        <Image
          className='hidden md:block'
          src="/Home Page Brain 3.png"
          width={3840}
          height={2019}
          alt='Home Page'
        />
        <Image
          className='block md:hidden blur-xs'
          src="/Home Page Brain-phone.png"
          width={3840}
          height={2019}
          alt='Home Page'
        />
        <div className="absolute top-44 cmdm:top-1/2 left-1/2 cmdm:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl md:text-6xl xl:text-9xl font-bold text-white text-center cmdm:text-left">
            <span className="block">TECH</span>
            <span className="block text-purple-700 sm:text-purple-800">AUTOMATION</span>
            <span className="block">SERVICES</span>
          </h1>
        </div>
      </div>


      <section id='about' className="my-12 md:my-28 justify-between items-center">
        <div className="flex mx-28 my-12">

          <div className='flex'>
          <div className="w-full md:w-1/2 md:pr-5 lg:pr-10">
            <Image
              src="/team.png"
              alt="Team"
              layout="responsive"
              width={3840}
              height={2160} // These should be the aspect ratio of your image
              className="rounded-lg"
            />
          </div>
          
            <div className="flex items-center w-full md:w-1/2 md:-mr-10 lg:-mr-20 text-white">
              <div>
              <h2 className="cmd:text-6xl text-4xl font-extrabold mb-4 text-purple-700">ABOUT US</h2>
              <p className="mb-4 cmd:text-lg cmdm:text-msm text-sm">
                At Tech Automation Services, we pride ourselves on a decade of engineering excellence. Our team comprises seasoned engineers who specialize in delivering innovative solutions designed to modernize and automate businesses and industries.
              </p>
              <p className="mb-4 cmd:text-lg cmdm:text-msm text-sm">
                With over 10 years of experience, we understand the intricacies of technological evolution and are committed to transforming your operational challenges into competitive advantages. Whether streamlining processes or implementing cutting-edge automation, our goal is to enhance efficiency and productivity for clients across various sectors.
              </p>
            </div>
          </div>
        </div>
        
        </div>
      </section>

      <section id='solutions'>
        <div className='container mx-auto my-12 px-4 h-auto text-center'>
          <h2 className='text-6xl text-purple-700 font-extrabold mb-10'>SOLUTIONS</h2>

          <div className="grid my-18">
            <div className="grid__item grid__item--lg">
              <div className="flex items-center justify-center h-full">
                <h3>SOFTWARE</h3>
              </div>
            </div>
            <div className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <h3>VISION</h3>
              </div>
            </div>
            <div className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <h3>ROBOTICS</h3>
              </div>
            </div>
            <div className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <h3>MECHANICAL DESIGN</h3>
              </div>
            </div>
            <div className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <h3>MACHINE LEARNING</h3>
              </div>
            </div>
            <div className="grid__item grid__item--lg">
              <div className="flex items-center justify-center h-full">
                <h3>ELECTRICAL DESIGN</h3>
              </div>
            </div>
            <div className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <h3>IoT</h3>
              </div>
            </div>
            <div className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <h3>APP DEV</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}