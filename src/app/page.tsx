import { routes } from '@/data/routes';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <header className='relative h-auto items-center'>
        <Image
          className='hidden md:block'
          src="/Home Page Brain 3.png"
          width={7680}
          height={7038}
          alt='Home Page'
        />
        <Image
          className='block md:hidden blur-xs'
          src="/Home Page Brain-phone.png"
          width={3840}
          height={2019}
          alt='Home Page'
        />
        <div className="absolute top-44 cmdm:top-1/2 left-1/2 cmdm:left-1/4 transform -translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-h1-main">
            <span className="block ">TECH</span>
            <span className="block text-purple-700" >AUTOMATION</span>
            <span className="block">SERVICES</span>
          </h1>

          <Link href={routes.Contact}>
            <div className="contact-us-button md:w-2/3
                          mt-8 md:mt-16 cmd:mt-24 2-5xl:mt-36 3xl:mt-40
                          py-2 md:py-9
                          mx-8 md:mx-0">
              <span className=''>CONTACT US</span>
            </div>
          </Link>
        </div>
      </header>


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
            <Link href={routes.Solutions} className="grid__item grid__item--lg">
              <div className="flex h-full items-center justify-center">
                <div id="software-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip absolute'>SOFTWARE</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="vision-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>VISION</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="robotics-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>ROBOTICS</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <div id="mechanical-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>MECHANICAL DESIGN</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--db">
              <div className="flex items-center justify-center h-full">
                <div id="machine-learning-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>MACHINE LEARNING</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--lg">
              <div className="flex items-center justify-center h-full">
                <div id="electrical-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>ELECTRICAL DESIGN</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="iot-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>IoT</h3>
              </div>
            </Link>
            <Link href={routes.Solutions} className="grid__item grid__item--sm">
              <div className="flex items-center justify-center h-full">
                <div id="app-dev-bg" className="grid__item-image"></div>
                <h3 className='text-h3-grip'>APP DEV</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Link href={routes.About} className=''>
          <div className="contact-us-button mt-32 md:mt-96 py-28 mx-auto
                      w-1/2 md:w-1/3 ">
            <span>CONTACT US</span>
          </div>
      </Link>

    </div>
  );
}