import Image from 'next/image'
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <div className='relative h-auto'>
        <Image
          className='hidden md:block'
          src="/Home Page Brain 3.png"
          width={7680}
          height={4038}
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
          <h1 className="text-h1-main">
            <span className="block">TECH</span>
            <span className="block text-purple-700 sm:text-purple-800">AUTOMATION</span>
            <span className="block">SERVICES</span>
          </h1>
          <div className="contact-us-button text-7xl font-extrabold w-2/3 mt-40 ">
            <Link href="#about" className=''>
              <span className=''>CONTACT US</span>
            </Link>
          </div>
        </div>
      </div>


      <section id='about'>
        <div className='mx-auto mt-16 md:mt-56 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <Image
                src="/team.png"
                alt="Team"
                width={3840}
                height={2160}
                className="rounded-lg"
              />
            </div>

            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                ABOUT US
              </h2>
              <p className="text-main">
                At Tech Automation Services, we pride ourselves on a decade of engineering excellence. Our team comprises seasoned engineers who specialize in delivering innovative solutions designed to modernize and automate businesses and industries.
              </p>
              <p className="text-main">
                With over 10 years of experience, we understand the intricacies of technological evolution and are committed to transforming your operational challenges into competitive advantages. Whether streamlining processes or implementing cutting-edge automation, our goal is to enhance efficiency and productivity for clients across various sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='solutions'>
        <div className='mx-auto mt-24 md:mt-56 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <h2 className='text-h2-main text-9xl mb-10 md:mb-16'>
            SOLUTIONS
          </h2>

          <div className="grid my-18">
            <Link href="/" className="grid__item grid__item--lg">
              <div className="flex h-full items-center justify-center">
                <div id="software-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip absolute'>SOFTWARE</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="vision-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>VISION</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="robotics-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>ROBOTICS</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <div id="mechanical-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>MECHANICAL DESIGN</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <div id="machine-learning-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>MACHINE LEARNING</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--lg">
              <div className="flex items-center justify-center h-full">
                <div id="electrical-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>ELECTRICAL DESIGN</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="iot-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>IoT</h3>
              </div>
            </Link>
            <Link href="/" className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="app-dev-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>APP DEV</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <div className='mx-auto md:mt-96 px-9 2xl:px-20 3xl:px-40 4xl:px-96 text-center contact-us-button text-7xl font-extrabold w-1/3 mt-96'>
        <Link href="#about" className=''>
          <div className="">
            <span className=''>CONTACT US</span>
          </div>
        </Link>
      </div>

    </div>
  );
}