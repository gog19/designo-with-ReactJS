import { useState } from 'react';
import '../Css/General.css';
import './Header.css';

function Header() {

  const [nightMode, setNightMode] = useState(true);
  const [openMenu, toggleClass] = useState(false);

  if (!nightMode) {
    document.querySelector('body').classList.toggle('site-theme-switcher')
  }

  if (!openMenu) {
    document.querySelector('header').classList.toggle('header-menu--open')
  }

  return (
    <>
      <header>
        <div className='container site-header-container'>
          <a className='site-logo' href='index.html'>
            <svg className='site-logo-svg' width="196" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M92.972 21.384c1.44 0 2.7-.238 3.78-.714 1.08-.476 1.922-1.166 2.526-2.07.604-.904.906-1.988.906-3.252 0-.864-.142-1.608-.426-2.232a4.794 4.794 0 00-1.23-1.638 9.471 9.471 0 00-1.932-1.278 38.542 38.542 0 00-2.52-1.164 58.554 58.554 0 01-1.188-.498 5.784 5.784 0 01-.924-.492 1.92 1.92 0 01-.594-.612c-.14-.236-.21-.522-.21-.858 0-.408.106-.778.318-1.11.212-.332.516-.598.912-.798.396-.2.878-.3 1.446-.3.504 0 1.002.072 1.494.216.492.144.956.334 1.392.57.436.236.826.502 1.17.798l1.62-3.048a7.84 7.84 0 00-1.584-1.02 10.599 10.599 0 00-2.016-.756 8.351 8.351 0 00-2.16-.288c-.96 0-1.83.16-2.61.48-.78.32-1.452.752-2.016 1.296a5.782 5.782 0 00-1.302 1.86 5.4 5.4 0 00-.456 2.184c0 .64.11 1.218.33 1.734.22.516.518.978.894 1.386.376.408.806.766 1.29 1.074.484.308.994.582 1.53.822.72.312 1.362.598 1.926.858a9.59 9.59 0 011.428.792c.388.268.682.568.882.9.2.332.3.734.3 1.206 0 .52-.124.954-.372 1.302-.248.348-.586.61-1.014.786-.428.176-.922.264-1.482.264-.6 0-1.166-.086-1.698-.258a7.868 7.868 0 01-1.482-.648c-.456-.26-.868-.534-1.236-.822a21.826 21.826 0 01-.948-.78l-1.992 3.216a10.88 10.88 0 002.622 1.818 10.65 10.65 0 002.082.768 9.99 9.99 0 002.544.306zM48.136 21c1.408 0 2.718-.25 3.93-.75a9.75 9.75 0 003.18-2.1 9.666 9.666 0 002.118-3.144c.504-1.196.756-2.494.756-3.894 0-1.392-.254-2.688-.762-3.888a9.797 9.797 0 00-5.298-5.268c-1.208-.504-2.516-.756-3.924-.756H42.7V21h5.436zm-.432-3.48h-1.116V4.68h1.116c.896 0 1.724.16 2.484.48.76.32 1.42.77 1.98 1.35.56.58.996 1.26 1.308 2.04.312.78.468 1.63.468 2.55 0 .928-.156 1.782-.468 2.562a6.171 6.171 0 01-1.308 2.034 5.95 5.95 0 01-1.98 1.344c-.76.32-1.588.48-2.484.48zm30.356.072V21H67.044V1.2H78.06v3.408h-7.128v4.764h6.84v3.408h-6.84v4.812h7.128zM109.168 1.2h3.888V21h-3.888V1.2zm22.58 20.184a9.818 9.818 0 003.384-.594 9.667 9.667 0 002.928-1.68 8.042 8.042 0 002.046-2.58c.5-.996.75-2.098.75-3.306v-3H131.7v3.012h5.196v.3a3.62 3.62 0 01-.408 1.704c-.272.52-.64.972-1.104 1.356a5.207 5.207 0 01-1.59.894 5.491 5.491 0 01-1.854.318c-.8 0-1.546-.164-2.238-.492a5.383 5.383 0 01-1.812-1.404c-.516-.608-.918-1.332-1.206-2.172-.288-.84-.432-1.776-.432-2.808a8.6 8.6 0 01.384-2.622 6.235 6.235 0 011.128-2.106 5.097 5.097 0 011.83-1.398c.724-.332 1.558-.498 2.502-.498.96 0 1.934.178 2.922.534.988.356 1.83.858 2.526 1.506l1.824-3.012a9.906 9.906 0 00-2.184-1.362 12.338 12.338 0 00-2.526-.846 12.161 12.161 0 00-2.61-.288c-1.528 0-2.908.27-4.14.81a9.307 9.307 0 00-3.156 2.232 9.958 9.958 0 00-2.004 3.276 11.123 11.123 0 00-.696 3.942c0 1.456.248 2.808.744 4.056a10.193 10.193 0 002.064 3.27 9.462 9.462 0 003.084 2.178c1.176.52 2.444.78 3.804.78zm21.92-13.704V21h-3.888V1.2h3.888l8.532 13.32V1.2h3.888V21H162.2l-8.532-13.32zm31.364 13.704a9.6 9.6 0 003.888-.792 9.927 9.927 0 003.18-2.202 10.351 10.351 0 002.916-7.278 10.351 10.351 0 00-2.916-7.278 9.927 9.927 0 00-3.18-2.202 9.6 9.6 0 00-3.888-.792 9.6 9.6 0 00-3.888.792 9.927 9.927 0 00-3.18 2.202 10.351 10.351 0 00-2.916 7.278 10.351 10.351 0 002.916 7.278 9.927 9.927 0 003.18 2.202 9.6 9.6 0 003.888.792zm-2.322-4.224c.708.32 1.478.48 2.31.48.848 0 1.624-.16 2.328-.48a5.459 5.459 0 001.836-1.356 6.296 6.296 0 001.212-2.07c.288-.796.432-1.67.432-2.622s-.144-1.826-.432-2.622a6.296 6.296 0 00-1.212-2.07 5.459 5.459 0 00-1.836-1.356c-.704-.32-1.48-.48-2.328-.48-.832 0-1.602.16-2.31.48a5.442 5.442 0 00-1.842 1.356 6.214 6.214 0 00-1.206 2.07c-.284.796-.426 1.67-.426 2.622s.142 1.826.426 2.622a6.214 6.214 0 001.206 2.07 5.442 5.442 0 001.842 1.356z" fill="#333136" /><circle r="12" transform="matrix(0 -1 -1 0 12 12)" fill="url(#paint0_angular)" /><defs><radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(12 0 0 12 12 12)"><stop stopColor="#E7816B" stopOpacity=".01" /><stop offset=".999" stopColor="#E7816B" /></radialGradient></defs></svg>
          </a>
          <div className='site-theme'>
            <button className='sun bg-transparent border-0 p-0 mb-0' onClick={() => setNightMode(!nightMode)}>
              <svg className='d-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </button>
            <button className='moon bg-transparent border-0 p-0 mb-0 d-none' onClick={() => setNightMode(!nightMode)}>
              <svg className='d-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
          <nav className='navbar'>
            <ul className='site-nav'>
              <li className='site-nav-item'>
                <a className='site-nav-link' href='#'>OUR COMPANY</a>
              </li>
              <li className='site-nav-item'>
                <a className='site-nav-link' href='#'>LOCATIONS</a>
              </li>
              <li className='site-nav-item'>
                <a className='site-nav-link' href='#'>CONTACT</a>
              </li>
              <li className='site-theme-small'>
                <button className='sun bg-transparent border-0 p-0 mb-0' onClick={() => setNightMode(!nightMode)}>
                  <svg className='d-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </button>
                <button className='moon bg-transparent border-0 p-0 mb-0 d-none' onClick={() => setNightMode(!nightMode)}>
                  <svg className='d-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <button className='header-menu border-0 bg-transparent p-0 m-0' onClick={() => toggleClass(!openMenu)}></button>
        </div>
      </header>
    </>
  )
}

export default Header;