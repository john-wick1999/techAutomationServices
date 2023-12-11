import Image from 'next/image'
import Link from 'next/link';
import { routes } from '@/data/routes';
import { siteMetadata } from '../../config/siteMetadata.js';

export const metadata = {
  title: siteMetadata.title, //title of the tab
  description: `At Tech Automation Services, we pride ourselves on a decade of engineering excellence.
    Our team comprises seasoned engineers who specialize in delivering innovative solutions designed to modernize and automate businesses and industries.

    With over 10 years of experience, we understand the intricacies of technological evolution and are committed to transforming your operational challenges into competitive advantages. Whether streamlining processes or implementing cutting-edge automation, our goal is to enhance efficiency and productivity for clients across various sectors.`,
  icons: {
    icon: siteMetadata.favicon, // Path of the favicon of the page
  },
};

export default function Home() {

  return (
    <div>
      <header className='relative h-auto items-center '>
        <Image
          className='hidden md:block blur-s brightness-75'
          src="/about.png"
          width={7680}
          height={7038}
          alt='Home Page'
        />
        <Image
          className='block md:hidden brightness-75'
          src="/team-mobile.png"
          width={3840}
          height={2019}
          alt='Home Page'
        />
        <div className="absolute top-52 cmdm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-h1">
            <span className="mr-7 md:mr-14 text-purple-700">ABOUT</span>
            <span className="">US</span>
          </h1>
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

      <div className='contact-us-button 
                      mx-auto
                      w-1/2 md:w-1/3 
                      mt-24 md:mt-80
                      py-5 md:py-16'>
        <Link href={routes.Contact} className='w-full'>
          <div>
            <span>CONTACT US</span>
          </div>
        </Link>
      </div>

    </div>
  );
}