
import Image from 'next/image'
import Link from 'next/link';
import { routes } from '@/data/routes';
import { siteMetadata } from '../../config/siteMetadata.js';
import Video from 'twilio/lib/rest/Video.js';

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
        <video className='hidden md:block'
          src="/network.mp4"
          width={7680}
          height={7038}
          autoPlay muted loop
        />

        <div className="absolute top-52 cmdm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-h1">
            <span className="mr-7 md:mr-14 text-center text-purple-700">SOLUTIONS</span>
          </h1>
          <p className="text-center text-main">
          Making dreams real by means of technology 
          </p>
        </div>
      </header>


      <section id='software'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <video className='hidden md:block'
                src="/Software.mp4"
                width={3840}
                height={2160}
                autoPlay muted loop
              />
            </div>

            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                SOFTWARE
              </h2>
              <p className="text-main">
              Like manufacturing processes, computing processes can be automated using automation software. Process automation can bring efficiency and cost reduction to your personal or business processes. We are in the automation era, which means that to stay competitive automation is a must.
              </p>
              <p className="text-main">
              We can help you identify which processes could be automated in your business. We can design custom automation software solutions like applications, scripts, and even machine learning models to satisfy your personal and/or business automation needs.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id='electrical'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
          <div className="grid__item-about order-2 grid__item-about-2">
              {/* Content for Column 1 */}
              <video className='hidden md:block'
                src="/Electrical Design.mp4"
                width={3840}
                height={2160}
                autoPlay muted loop
              />
            </div>

          <div className="grid__item-about  grid__item-about-1 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                ELECTRICAL DESIGN
              </h2>
              <p className="text-main">
              Are you interested in a custom electronic product for yourself or a business? Or maybe you have in mind a potentially marketable electronic product? Well, we are your engineering power!
              </p>
              <p className="text-main">
              We are capable of designing electronic devices and delivering working prototypes on a printed circuit board like in the above video. Contact us and see what we can do for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='mechanical'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <video className='hidden md:block'
                src="/Mechanical design.mp4"
                width={3840}
                height={2160}
                autoPlay muted loop
              />
            </div>
            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                MECHANICAL DESIGN
              </h2>
              <p className="text-main">
              In need of custom mechanical parts and prototypes? We are also capable of designing mechanical parts and systems that may fit your needs. We work live and directly with our customers to achieve their custom needs.
              </p>
              <p className="text-main">
              We can also provide you sample 3D printed prototypes so you get hands-on! Contact us and see what we can do for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='contact-us-button 
                      mx-auto
                      w-1/2 md:w-1/3 
                      mt-32 md:mt-96
                      py-4 md:py-24'>
        <Link href={routes.Contact} className='w-full'>
          <div>
            <span>CONTACT US</span>
          </div>
        </Link>
      </div>

    </div>
  );
}