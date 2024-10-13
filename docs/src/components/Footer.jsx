import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

export default function FooterCom() {
  return (
    <Footer container className='bg-slate-700 border-t-8 border-lime-500 text-white'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-white dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-lg text-white animate-glow'>
                FourPoint
              </span>
              <span className='text-white'> gaming</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://youtube.com/@realgaming2100?si=pUJf6TTZwdk3rIku'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-gray-300'
                >
                  Subscribe us YOUTUBE
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  className='text-white hover:text-gray-300'
                >
                  FourPoint gaming
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://discord.gg/f6eYn8dd'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-gray-300'
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='text-white hover:text-gray-300'>Privacy Policy</Footer.Link>
                <Footer.Link href='#' className='text-white hover:text-gray-300'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='border-white' />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="FourPoint gaming"
            year={new Date().getFullYear()}
            className='text-white'
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href='#'
              icon={BsFacebook}
              className='text-white hover:text-gray-300 transition-colors duration-300'
            />
            <Footer.Icon
              href='#'
              icon={BsInstagram}
              className='text-white hover:text-gray-300 transition-colors duration-300'
            />
            <Footer.Icon
              href='#'
              icon={BsTwitter}
              className='text-white hover:text-gray-300 transition-colors duration-300'
            />
            <Footer.Icon
              href='https://discord.gg/f6eYn8dd'
              icon={FaDiscord}
              className='text-white hover:text-gray-300 transition-colors duration-300'
            />
            <Footer.Icon
              href='https://youtube.com/@realgaming2100?si=pUJf6TTZwdk3rIku'
              icon={BsYoutube}
              className='text-white hover:text-gray-300 transition-colors duration-300'
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
