import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-lime-500 bg-cyan-100'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-lg text-white animate-glow'>
                FourPoint
              </span>
              gaming
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://youtube.com/@realgaming2100?si=pUJf6TTZwdk3rIku'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Subscribe us YOUTUBE
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                   FourPoint gaming
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://discord.gg/f6eYn8dd'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discord
                </Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="FourPoint gaming"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://discord.gg/f6eYn8dd' icon={FaDiscord}/>
            <Footer.Icon href='https://youtube.com/@realgaming2100?si=pUJf6TTZwdk3rIku' icon={BsYoutube}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
