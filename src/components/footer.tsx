import Image from 'next/image'
import Link from 'next/link'

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';

import { routes } from '../data/routes'

function Footer() {
  return (
    <footer className="text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href={routes.About} className="text-base md:text-4xl leading-6 text-white hover:text-gray-900">
              About us
            </a>
          </div>
          <div className="px-5 py-2">
            <a href={routes.Solutions} className="text-base md:text-4xl leading-6 text-white hover:text-gray-900">
              Solutions
            </a>
          </div>
          <div className="px-5 py-2">
            <a href={routes.Projects} className="text-base md:text-4xl leading-6 text-white hover:text-gray-900">
              Projects
            </a>
          </div>
          <div className="px-5 py-2">
            <a href={routes.Careers} className="text-base md:text-4xl leading-6 text-white hover:text-gray-900">
              Careers
            </a>
          </div>
          <div className="px-5 py-2">
            <a href={routes.Contact} className="text-base md:text-4xl leading-6 text-white hover:text-gray-900">
              Contact us
            </a>
          </div>

        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href={routes.Facebook} className="text-gray-400 hover:text-gray-500">
            
            <span className="sr-only">Facebook</span>
          </a>
          <a href={routes.Instagram} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
          </a>
          <a href={routes.X} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">X</span>
          </a>
          <a href={routes.Github} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
          </a>
          <a href={routes.Linkedin} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
          </a>
        </div>
        <p className="mt-8 text-base md:text-2xl leading-6 text-center text-gray-400">
          © 2023 Tech Automation Services, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;