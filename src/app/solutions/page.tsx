
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
        <video className='hidden md:block'
          src="/network.mp4"
          width={7680}
          height={7038}
          muted loop
        />
        <video className='block md:hidden'
          src="/network-mobile.mp4"
          width={1200}
          height={1400}
          muted loop
        />

        <div className="absolute top-52 cmdm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-h1">
            <span className="mr-7 md:mr-14 text-center text-purple-700">SOLUTIONS</span>
          </h1>
          <p className="text-main text-center">
            Making dreams real by means of technology
          </p>
        </div>
      </header>

      <section id='software'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <img className="rounded-lg"
                src="/softwareSolution.png"
                width={3840}
                height={2160}
              />
            </div>

            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                SOFTWARE
              </h2>
              <p className="text-main">
              Discover the pinnacle of software development with us. Specializing in crafting scalable, robust software solutions, we blend high-quality coding with modern architectural designs. Our expertise ranges from cloud applications to sophisticated desktop software, focusing on delivering exceptional quality and innovation.
              </p>
              <p className="text-main">
              Our dedicated team ensures each project is tailored to meet your specific needs, providing solutions that are not just functional but strategically aligned with your business objectives. Trust us to be your partner in navigating the dynamic world of software technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='electrical' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">

          <div className="grid__item-about xl:text-right">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                ELECTRICAL DESIGN
              </h2>
              <p className="text-main">
              Revolutionize your projects with our state-of-the-art electrical design services. We prioritize energy efficiency, sustainability, and the integration of cutting-edge technology to deliver reliable and innovative electrical systems.
              </p>
              <p className="text-main">
              Our team is adept at tackling challenges across various applications, from commercial to industrial, ensuring each design is not only functional but also forward-thinking and environmentally conscious.
              </p>
            </div>

            <div className="grid__item-about">
              {/* Content for Column 1 */}
              <video className=''
                src="/Electrical Design.mp4"
                width={3840}
                height={2160}
                autoPlay muted loop
              />
            </div>
          </div>
        </div>
      </section>

      <section id='vision'>
        <div className='mx-auto mt-16 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <video className=''
                src="/Software.mp4"
                width={3840}
                height={2160}
                autoPlay muted loop
              />
            </div>

            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                VISION
              </h2>
              <p className="text-main">
              Explore the frontiers of vision technology with our advanced solutions. Specializing in image processing, pattern recognition, and real-time analytics, we drive innovation across numerous industries.
              </p>
              <p className="text-main">
              Our technology is designed to enhance security, automation, and data analysis, providing you with tools that are not just powerful but also intuitive and adaptable to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='robotics' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">

          <div className="grid__item-about xl:text-right">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                ROBOTICS
              </h2>
              <p className="text-main">
              Step into the future with our advanced robotics solutions. We excel in merging mechanics, electronics, and computer science to develop innovative and efficient robotic systems for a variety of industries.
              </p>
              <p className="text-main">
              Our team focuses on creating robots that are not only technically proficient but also adaptable to real-world applications. From automated manufacturing processes to advanced research and development, our robotics solutions are designed to enhance productivity, precision, and innovation in every task they undertake.
              </p>
            </div>

            <div className="grid__item-about">
              {/* Content for Column 1 */}
              <img
                src="/roboticSolution.png"
                width={3840}
                height={2160}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id='mechanical' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <video className=''
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
              Discover engineering excellence with our enhanced mechanical design services. Integrating the latest in material science and 3D modeling, we create mechanical systems that are efficient, durable, and innovative.
              </p>
              <p className="text-main">
              Our focus is on developing solutions that not only meet today&apos;s demands but also anticipate future challenges, ensuring that your projects are at the forefront of mechanical engineering technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='machine-learning' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">

          <div className="grid__item-about xl:text-right">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                MACHINE LEARNING
              </h2>
              <p className="text-main">
              Experience the transformative power of machine learning with our expert solutions. We leverage the latest in data analytics to train models for predictive analytics, natural language processing, etc.
              </p>
              <p className="text-main">
              Our approach turns complex data into actionable insights, driving decision-making and innovation. We focus on creating models that are not just accurate but also ethical and transparent, ensuring they can be trusted and understood by all stakeholders involved.
              </p>
            </div>

            <div className="grid__item-about">
              {/* Content for Column 1 */}
              <img className="rounded-lg"
                src="/machinelearningsolution.png"
                width={3840}
                height={2160}
              />
            </div>
          </div>
        </div>
      </section>

      <section id='app-dev' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">
            <div className="grid__item-about grid__item-about-1">
              {/* Content for Column 1 */}
              <img className="rounded-lg"
                src="/appdevsolution.png"
                width={3840}
                height={2160}
              />
            </div>
            <div className="grid__item-about order-2 grid__item-about-2 xl:text-left">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                APP DEVELOPMENT
              </h2>
              <p className="text-main">
              Elevate your digital presence with our cutting-edge app development services. Specializing in both mobile and web applications, we focus on creating products that are user-centric, featuring seamless functionality and cross-platform compatibility. 
              </p>
              <p className="text-main">
              Our approach is tailored to meet your unique needs, ensuring that each app we develop not only reaches a wide audience but also delivers a memorable and engaging user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='iot' className='mx-auto mt-20 md:mt-40 px-9 2xl:px-20 3xl:px-40 4xl:px-96 h-auto text-center'>
        <div >
          <div className="grid-about mx-auto px-4">

          <div className="grid__item-about xl:text-right">
              {/* Content for Column 2 */}
              <h2 className="text-h2-main mb-4">
                IoT
              </h2>
              <p className="text-main">
              Embrace the connected world with our IoT solutions. We specialize in connecting devices to the internet, enabling smart automation and efficient data gathering. Our IoT technology is designed to enhance decision-making and operational efficiency in diverse sectors including smart homes, cities, and industries.
              </p>
              <p className="text-main">
              Our commitment to security and user-friendly design ensures that our IoT solutions not only perform exceptionally but also integrate seamlessly into everyday life.
              </p>
            </div>

            <div className="grid__item-about">
              {/* Content for Column 1 */}
              <img className="rounded-lg"
                src="/iotsolution.png"
                width={3840}
                height={2160}
              />
            </div>
          </div>
        </div>
      </section>

      <div className='contact-us-button 
                      mx-auto
                      w-1/2 md:w-1/3 
                      mt-28 md:mt-72
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