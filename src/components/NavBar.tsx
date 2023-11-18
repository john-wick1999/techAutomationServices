'use client'
import Link from 'next/link';
import Image from 'next/image'
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10 
                    bg-black opacity-80 
                      h-15 cmd:h-20">
        <div className="justify-between
                        cmd:mx-20 
                        h-15 cmd:h-20 cmdm:px-8 px-4
                        cmdm:items-center cmdm:flex ">
          <div>
            <div className="flex py-3 
                            items-center justify-between 
                            cmdm:py-5 cmdm:block">
              {/* LOGO */}
              <Link href="/" className='flex items-center'>
                <Image
                  src="/Logo TAS 4.png"
                  width={50}
                  height={50}
                  alt="Tech Automation Services"
                />
                <span className="hidden cmd:inline-block cmd:flex-2 ml-3 text-xl font-bold text-white ">
                  TECH AUTOMATION SERVICES
                </span>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="cmdm:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FiX color="white" size="30" alt="close" />
                  ) : (
                    <FiMenu
                      color="white"
                      size="30"
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='cmdm:float-right'>
            <div className={`flex justify-center items-center pb-3 mt-8 cmdm:block cmdm:pb-0 cmdm:mt-0 ${
                navbar ? 'p-12 cmdm:p-0 block' : 'hidden'
              }`}            >
              <ul className="h-screen cmdm:h-auto items-center justify-center cmdm:flex ">
                <li className="py-2 items-center 
                               border-b-2 border-purple-900
                               text-xl font-bold text-white 
                               cmdm:px-6 text-center cmdm:border-b-0 cmdm:hover:bg-transparent
                             hover:bg-purple-900  border-purple-900  cmdm:hover:text-purple-600">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT US
                  </Link>
                </li>
                <li className="py-2 items-center 
                               border-b-2 border-purple-900
                               text-xl font-bold text-white 
                               cmdm:px-6 text-center cmdm:border-b-0 cmdm:hover:bg-transparent
                             hover:bg-purple-900  border-purple-900  cmdm:hover:text-purple-600">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    SOLUTIONS
                  </Link>
                </li>
                <li className="py-2 items-center 
                               border-b-2 border-purple-900
                               text-xl font-bold text-white 
                               cmdm:px-6 text-center cmdm:border-b-0 cmdm:hover:bg-transparent
                             hover:bg-purple-900  border-purple-900  cmdm:hover:text-purple-600">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    PROJECTS
                  </Link>
                </li>
                <li className="py-2 items-center 
                               border-b-2 border-purple-900
                               text-xl font-bold text-white 
                               cmdm:px-6 text-center cmdm:border-b-0 cmdm:hover:bg-transparent
                             hover:bg-purple-900  border-purple-900  cmdm:hover:text-purple-600">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    CAREERS
                  </Link>
                </li>
                <li className="py-2 items-center 
                               border-b-2 border-purple-900
                               text-xl font-bold text-white 
                               cmdm:px-6 text-center cmdm:border-b-0 cmdm:hover:bg-transparent
                             hover:bg-purple-900  border-purple-900  cmdm:hover:text-purple-600">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    <div className="rounded-lg px-5 py-2.5 items-center
                                    text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                                    hover:bg-gradient-to-br 
                                    focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800">
                      CONTACT US
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;