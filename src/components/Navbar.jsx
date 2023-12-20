import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';
import { logo } from '../assets';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';

const languageOptions = [
  { value: 'en', label: 'us', title: 'EN' },
  { value: 'fr', label: 'fr', title: 'FR' },
];

const SingleValue = ({ ...props }) => (
  <components.SingleValue {...props}>
    <span className="flex items-center">
      <img src={`https://flagcdn.com/w20/${props.data.label}.png`} alt={props.data.label} />
    </span>
  </components.SingleValue>
);

SingleValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

const Option = props => {
  return (
    <components.Option {...props}>
      <div className="flex items-center">
        <img src={`https://flagcdn.com/w20/${props.data.label}.png`} alt={props.data.label} />
        <span className="ml-2">{props.data.title}</span>
      </div>
    </components.Option>
  );
};

Option.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');
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

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const handleMenuToggle = (event) => {
    event.stopPropagation();
    setToggle(prevToggle => !prevToggle);
  };

  const handleLanguageChange = (selectedOption) => {
    setCurrentLanguage(selectedOption.value);
    i18next.changeLanguage(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'transparent',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      backdropFilter: 'blur(10px)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    }),
  };

  const navLinks = i18next.t('navLinks', { returnObjects: true });

  return (
    <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo ism34 ismail bassaoud" className="w-[70px] h-[70px] object-contain ml-2" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ismail &nbsp;<span className="sm:block hidden">| Ism34</span>
          </p>
        </Link>
          <div className="my-2 z-10 rounded-lg right-0 ml-auto mr-6 text-white border border-white border-opacity-10">
            <Select
              className="text-white"
              components={{ Option, SingleValue }}
              options={languageOptions}
              value={languageOptions.find(option => option.value === currentLanguage)}
              onChange={handleLanguageChange}
              isSearchable={false}
              styles={customStyles}
            />
          </div>
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
        <div className="sm:hidden mr-2">
          <button type="button" onClick={handleMenuToggle}>
            {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>
      {toggle && (
        <div ref={menuRef} className="absolute top-[80px] left-0 w-full bg-primary py-5 px-10">
          <ul className="list-none flex flex-col gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title 
                    ? 'text-white'
                    : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  handleMenuToggle(event);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;