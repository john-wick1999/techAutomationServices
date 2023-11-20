import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className=" text-white p-6 text-center">
      <div className='flex flex-col pb-10 mt-20'>
        <div className="h-full mx-auto flex flex-col md:flex-row justify-between items-center w-1/2 pl-16">
          <div className=" md:mb-0 flex items-center place-self-start">
            <Image
              src="/Logo TAS 4.png"
              width={100}
              height={100}
              alt="Tech Automation Services"
              className="mr-8"
            />
            <h2 className="text-4xl font-bold">TECH AUTOMATION SERVICES</h2>
          </div>


          <div className="flex text-2xl text-left pr-16">
            <div className="flex place-items-end mb-4 md:mb-0 md:mr-14 ">
              <div className=''>
                <h3 className="font-semibold text-3xl mb-2">SERVICES</h3>
                <div className='mr-8'>
                  <ul>
                    <li><Link href='/'>Software</Link></li>
                    <li><Link href='/'>Vision</Link></li>
                    <li><Link href='/'>Machine Learning</Link></li>
                    <li><Link href='/'>App Development</Link></li>
                  </ul>
                </div>
              </div>
              <div className='flex'>
                <ul>
                  <li><Link href='/'>Mechanical Design</Link></li>
                  <li><Link href='/'>Electrical Design</Link></li>
                  <li><Link href='/'>IoT</Link></li>
                  <li><Link href='/'>Robotics</Link></li>
                </ul>
              </div>

            </div>
            <div className="ml-5">
              <h3 className="font-semibold text-3xl mb-2">COMPANY</h3>
              <ul>
                <li><Link href='/'>About us</Link></li>
                <li><Link href='/'>Projects</Link></li>
                <li><Link href='/'>Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-center mx-auto pt-6 border-t-2 border-dashed">
        <p className="text-2xl">© 2023 - Tech Automation Services - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;