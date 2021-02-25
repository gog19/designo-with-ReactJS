import './Footer.css';
import '../Css/General.css';
import Facebook from './img/facebook.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Pinterest from './img/pinterest.svg';
import Instagram from './img/insta.svg';

import { useLanguage } from '../Language/Language';
import Info from '../LangInfo';

function Footer() {

  const [language, setLanguage] = useLanguage()
	const MENU = Info[language];
	const languageChange = e => setLanguage(e.target.value);

  return (
    <>
      <footer className='site-footer'>
        <div className='container'>
          <div className='site-footer-top d-flex align-items-center justify-content-between'>
            <a href='#'>
              <svg width="202" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7 21V1.2h5.436c1.408 0 2.716.252 3.924.756a9.73 9.73 0 013.168 2.112 9.67 9.67 0 012.124 3.156c.512 1.2.768 2.496.768 3.888 0 1.4-.252 2.7-.756 3.9a9.704 9.704 0 01-2.124 3.144 9.793 9.793 0 01-3.18 2.1c-1.208.496-2.516.744-3.924.744H42.7zm3.888-3.48h1.116c.896 0 1.724-.16 2.484-.48a5.95 5.95 0 001.98-1.344 6.186 6.186 0 001.308-2.028c.312-.784.468-1.64.468-2.568 0-.92-.156-1.768-.468-2.544a6.157 6.157 0 00-1.308-2.04 5.865 5.865 0 00-1.98-1.356 6.336 6.336 0 00-2.484-.48h-1.116v12.84zM67.036 21V1.2h11.016v3.408h-7.128v4.764h6.84v3.408h-6.84v4.812h7.128V21H67.036zm25.933.384c-.92 0-1.768-.104-2.544-.312-.776-.2-1.472-.452-2.088-.756a11.159 11.159 0 01-2.616-1.824l1.992-3.216c.264.232.58.492.948.78.368.288.78.564 1.236.828.456.256.948.472 1.476.648a5.665 5.665 0 001.704.252c.56 0 1.052-.088 1.476-.264a2.286 2.286 0 001.02-.78c.248-.352.372-.788.372-1.308 0-.472-.1-.872-.3-1.2-.2-.336-.496-.636-.888-.9a8.587 8.587 0 00-1.428-.792c-.56-.264-1.2-.552-1.92-.864a12.773 12.773 0 01-1.536-.816 6.709 6.709 0 01-1.284-1.08 4.948 4.948 0 01-.9-1.38 4.495 4.495 0 01-.324-1.74 5.4 5.4 0 01.456-2.184 5.825 5.825 0 011.296-1.86 6.418 6.418 0 012.016-1.296C91.917 1 92.79.84 93.75.84c.72 0 1.44.096 2.16.288.72.192 1.392.444 2.016.756a7.84 7.84 0 011.584 1.02l-1.62 3.048a6.296 6.296 0 00-1.176-.792 6.704 6.704 0 00-1.392-.576 5.231 5.231 0 00-1.488-.216c-.568 0-1.052.1-1.452.3-.392.2-.696.468-.912.804a2.018 2.018 0 00-.312 1.104c0 .336.068.624.204.864.144.232.344.436.6.612.256.168.564.332.924.492.36.152.756.316 1.188.492.928.392 1.768.78 2.52 1.164a9.321 9.321 0 011.932 1.284 4.668 4.668 0 011.224 1.632c.288.624.432 1.368.432 2.232 0 1.264-.304 2.348-.912 3.252-.6.904-1.44 1.596-2.52 2.076-1.08.472-2.34.708-3.78.708zm16.2-.384V1.2h3.888V21h-3.888zm22.584.384c-1.36 0-2.628-.26-3.804-.78a9.505 9.505 0 01-3.084-2.172 10.265 10.265 0 01-2.064-3.276c-.496-1.248-.744-2.6-.744-4.056 0-1.392.232-2.704.696-3.936a9.877 9.877 0 012.004-3.276 9.199 9.199 0 013.156-2.232c1.232-.544 2.612-.816 4.14-.816.864 0 1.732.096 2.604.288.88.192 1.724.476 2.532.852a9.74 9.74 0 012.184 1.356l-1.824 3.012c-.696-.648-1.54-1.148-2.532-1.5a8.447 8.447 0 00-2.916-.54c-.944 0-1.78.168-2.508.504a5.05 5.05 0 00-1.824 1.392 6.226 6.226 0 00-1.128 2.112 8.543 8.543 0 00-.384 2.616c0 1.032.144 1.968.432 2.808.288.84.688 1.564 1.2 2.172a5.462 5.462 0 001.812 1.404 5.198 5.198 0 002.244.492c.64 0 1.256-.104 1.848-.312a5.29 5.29 0 001.596-.9 4.385 4.385 0 001.104-1.356 3.62 3.62 0 00.408-1.704v-.3h-5.196v-3.012h9.156v3c0 1.208-.252 2.312-.756 3.312a8.055 8.055 0 01-2.04 2.58 9.836 9.836 0 01-2.928 1.68 9.908 9.908 0 01-3.384.588zM149.778 21V1.2h3.888l8.532 13.32V1.2h3.888V21h-3.888l-8.532-13.32V21h-3.888zm35.247.384a9.6 9.6 0 01-3.888-.792 9.973 9.973 0 01-3.18-2.196 10.528 10.528 0 01-2.148-3.276 10.456 10.456 0 01-.768-4.008c0-1.424.256-2.756.768-3.996a10.346 10.346 0 012.148-3.276 9.881 9.881 0 013.18-2.208 9.6 9.6 0 013.888-.792 9.6 9.6 0 013.888.792 9.881 9.881 0 013.18 2.208 10.18 10.18 0 012.136 3.276c.52 1.24.78 2.572.78 3.996s-.26 2.76-.78 4.008a10.356 10.356 0 01-2.136 3.276 9.973 9.973 0 01-3.18 2.196 9.6 9.6 0 01-3.888.792zm-.012-3.744c.848 0 1.624-.16 2.328-.48a5.459 5.459 0 001.836-1.356 6.308 6.308 0 001.212-2.064c.288-.8.432-1.676.432-2.628 0-.952-.144-1.824-.432-2.616a6.284 6.284 0 00-1.212-2.076 5.459 5.459 0 00-1.836-1.356c-.704-.32-1.48-.48-2.328-.48-.832 0-1.604.16-2.316.48a5.459 5.459 0 00-1.836 1.356 6.284 6.284 0 00-1.212 2.076c-.28.792-.42 1.664-.42 2.616 0 .952.14 1.828.42 2.628.288.792.692 1.48 1.212 2.064a5.459 5.459 0 001.836 1.356c.712.32 1.484.48 2.316.48z" fill="#fff" /><circle r="12" transform="matrix(0 -1 -1 0 12 12)" fill="url(#paint0_angular)" /><defs><radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(12 0 0 12 12 12)"><stop stopColor="#E7816B" stopOpacity=".01" /><stop offset=".999" stopColor="#E7816B" /></radialGradient></defs></svg>
            </a>
            <nav>
              <ul className='site-nav'>
                <li className='site-nav-item'>
                  <a className='site-nav-link text-white' href='#'>{MENU.company}</a>
                </li>
                <li className='site-nav-item'>
                  <a className='site-nav-link text-white' href='#'>{MENU.locations}</a>
                </li>
                <li className='site-nav-item'>
                  <a className='site-nav-link text-white' href='#'>{MENU.contacts}</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='site-footer-bottom d-flex justify-content-between'>
            <p className='site-footer-address mb-0'><span className='d-block font-weight-bold'>Designo Central Office</span> 3886 Wellington Street <br /> Toronto, Ontario M9C 3J5</p>
            <p className='site-footer-contact mb-0'>Contact Us (Central Office) <br /> P : +1 253-863-8967 <br /> M : contact@designo.co</p>
            <div>
              <ul className='list-unstyled d-flex align-items-center media mb-0'>
                <li className='site-footer-media'>
                  <a href='#'>
                    <img src={Facebook} />
                  </a>
                </li>
                <li className='site-footer-media'>
                  <a href='#'>
                    <img src={Youtube} />
                  </a>
                </li>
                <li className='site-footer-media'>
                  <a href='#'>
                    <img src={Twitter} />
                  </a>
                </li>
                <li className='site-footer-media'>
                  <a href='#'>
                    <img src={Pinterest} />
                  </a>
                </li>
                <li className='site-footer-media'>
                  <a href='#'>
                    <img src={Instagram} />
                  </a>
                </li>
              </ul>
              <select
                  className='site-lang'
                  defaultValue={language}
                  onChange={languageChange}
                >
                <option value='en'>Eng</option>
                <option value='uz'>Uz</option>
                <option value='ru'>Ru</option>
              </select>
            </div>
          </div>4
        </div>
      </footer>
    </>
  )
}

export default Footer;