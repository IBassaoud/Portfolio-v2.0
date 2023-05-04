import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [menuRef]);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo" className="w-[70px] h-[70px] object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ismail &nbsp;<span className="sm:block hidden">| Ism34</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <div onClick={handleMenuToggle}>
            <img 
              src={close} 
              alt="close"
              className="w-[25px] h-[25px] object-contain cursor-pointer"
              />
          </div>
        ) : (
          <img 
            src={menu} 
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={handleMenuToggle} 
          />
        )}
          <div ref={menuRef} className={`${toggle ? 'flex' : 'hidden'} p-6 glass-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-filter backdrop-blur-md border border-solid border-secondary border-opacity-10`}>
            <ul className="list-none flex justify-end items-end flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title 
                      ? 'text-blue-500'
                      : 'text-gray-300'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar