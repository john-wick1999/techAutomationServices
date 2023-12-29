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
        <img
          className='hidden md:block blur-s brightness-75'
          src="/about.png"
          width="7680"
          height="7038"
          alt='Home Page'
        />
        <img
          className='block md:hidden brightness-75'
          src="/team-mobile.png"
          width="3840"
          height="2019"
          alt='Home Page'
        />
        <div className="absolute top-52 cmdm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-h1">
            <span className="mr-7 md:mr-14 text-purple-700">ABOUT</span>
            <span className="">US</span>
          </h1>
        </div>
      </header>


      <section id='journey'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <img
                src="/team-1.jpg"
                alt="Team"
                width="3840"
                height="2160"
                className="rounded-lg"
              />
            </div>

            <div className="grid__item-about grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                OUR JOURNEY TO EXCELLENCE
              </h2>
              <p className="text-main">
                At Tech Automation Services, our journey began over a decade ago with a clear vision: to lead the wave of technological evolution and to use our engineering expertise to provide innovative solutions. Since our inception, we&apos;ve been driven by a passion for creating systems that not only meet the current demands of businesses but propel them into the future. Our story is one of continuous learning, relentless innovation, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='meet'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about xl:text-right">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                MEET OUR TEAM
              </h2>
              <p className="text-main">
                Behind every successful project is our team of seasoned engineers and visionary leaders. Each team member brings a unique set of skills and experiences, united by a common goal: to deliver excellence. Our team is our greatest asset, and their diverse backgrounds in various fields of engineering and technology are the backbone of our success.
              </p>
            </div>

            <div className="grid__item-about">
              {/* Content for Column 1 */}
              <img
                src="/members.png"
                alt="Team"
                width="3840"
                height="2160"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="goals-and-vision" className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div className="grid-about mx-auto px-4">
          <div className="grid__item-about grid__item-about-1">
            {/* Content for Column 1 */}
            <img
              src="/tech-2.png"
              alt="Team"
              width="770"
              height="900"
              className="rounded-lg hidden xl:block"
            />
            <img
              src="/tech.png"
              alt="Team"
              width="1200"
              height="900"
              className="rounded-lg block xl:hidden"
            />
          </div>

          <div className="text-main xl:text-left">
            <h2 className="text-h2-main mb-4">OUR GOALS AND VISION</h2>
            <p className="">
              Our mission is to empower businesses with technology that turns challenges into opportunities. We envision a world where businesses, large and small, harness the power of automation to thrive in an ever-changing landscape. Our goals are clear:
            </p>

            <div className="my-6">
              <h3 className="text-h3-grip mt-4">Innovation</h3>
              <p>
                To remain at the forefront of technological advancement and to continually offer cutting-edge solutions.
              </p>

              <h3 className="text-h3-grip mt-4">Customization</h3>
              <p>
                To tailor our services to the unique needs of each client, ensuring optimal integration and efficiency.
              </p>

              <h3 className="text-h3-grip mt-4">Sustainability</h3>
              <p>
                To develop solutions that not only benefit businesses but also contribute positively to our environment and society.
              </p>

              <h3 className="text-h3-grip mt-4">Growth</h3>
              <p>
                To grow alongside our clients and to foster partnerships that lead to mutual success.
              </p>
            </div>

            <p >
              As we look to the future, we are excited about the possibilities that lie ahead. We are dedicated to pushing boundaries, challenging the status quo, and setting new standards in the industry.
            </p>
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