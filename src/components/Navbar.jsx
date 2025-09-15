"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from '../../public/assets/images/Images';
import Cookies from 'js-cookie';

export default function Navbar({ sign }) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [signoutbutt, setsignoutbutt] = useState(false)

  // Sample language data
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const langCookie = Cookies.get('googtrans');
    if (langCookie) {
      const langParts = langCookie.split('/');
      if (langParts.length > 2) {
        const lang = langParts[2];
        const found = languages.find(l => l.code === lang);
        if (found) setSelectedLanguage(found);
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
      if (mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.hamburger-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const selectLanguage = (lang) => {
    Cookies.set('googtrans', `/en/${lang.code}`, { path: '/' });
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black w-full py-2 md:py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/*---------- Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Images.darklogo} alt="Logo" className='md:w-20 h-auto w-16' />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#FFFFFF] hover:text-gray-300 transition-colors text-lg font-manrope">
              About Us
            </Link>
            <Link href="/" className="text-[#FFFFFF] hover:text-gray-300 transition-colors text-lg font-manrope">
              Contact Us
            </Link>
          </div>

          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleLanguageDropdown} className="flex items-center space-x-1 text-[#FFFFFF] hover:text-gray-300 transition-colors px-3 py-2 rounded-md hover:bg-gray-800" >
              <span className="text-lg text-[#FFFFFF] font-manrope">{selectedLanguage.flag}</span>
              <span className="text-lg text-[#FFFFFF] font-manrope uppercase ">{selectedLanguage.code}</span>
              <svg className={`w-6 h-6 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-left  hover:bg-gray-800 transition-colors ${selectedLanguage.code === lang.code ? 'bg-gray-800 text-white' : 'text-gray-300'
                      }`}
                  >
                    <span className="text-lg font-manrope">{lang.flag}</span>
                    <span className="text-lg font-manrope">{lang.name}</span>
                    <span className="text-base text-gray-500 uppercase font-manrope">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}

          </div>
          <button>
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16.5H16V9.5314C16 5.64806 12.866 2.5 9 2.5C5.13401 2.5 2 5.64806 2 9.5314V16.5ZM9 0.5C13.9706 0.5 18 4.54348 18 9.5314V18.5H0V9.5314C0 4.54348 4.02944 0.5 9 0.5ZM6.5 19.5H11.5C11.5 20.8807 10.3807 22 9 22C7.6193 22 6.5 20.8807 6.5 19.5Z" fill="white" />
            </svg>
          </button>
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/signin" className={`${sign === 'signin' ? 'hidden' : ''} text-lg border font-manrope border-[#FFFFFF] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors`} >
              Sign in
            </Link>
            <button className={`${sign === 'signin' ? 'hidden' : ''} text-lg bg-[#FFFFFF] font-manrope text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium`} >
              <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 13.5913 22.3679 15.1174 21.2426 16.2426C20.1174 17.3679 18.5913 18 17 18C15.4087 18 13.8826 17.3679 12.7574 16.2426C11.6321 15.1174 11 13.5913 11 12C11 10.4087 11.6321 8.88258 12.7574 7.75736C13.8826 6.63214 15.4087 6 17 6C18.5913 6 20.1174 6.63214 21.2426 7.75736C22.3679 8.88258 23 10.4087 23 12ZM20 12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15C16.2044 15 15.4413 14.6839 14.8787 14.1213C14.3161 13.5587 14 12.7956 14 12C14 11.2044 14.3161 10.4413 14.8787 9.87868C15.4413 9.31607 16.2044 9 17 9C17.7956 9 18.5587 9.31607 19.1213 9.87868C19.6839 10.4413 20 11.2044 20 12Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 0C7.8875 0 0.5 7.3875 0.5 16.5C0.5 25.6125 7.8875 33 17 33C26.1125 33 33.5 25.6125 33.5 16.5C33.5 7.3875 26.1125 0 17 0ZM3.5 16.5C3.5 19.635 4.5695 22.521 6.362 24.813C7.62116 23.1602 9.24523 21.8207 11.1075 20.8991C12.9697 19.9775 15.0197 19.4987 17.0975 19.5C19.1486 19.4976 21.1731 19.9636 23.0167 20.8626C24.8603 21.7615 26.4743 23.0695 27.7355 24.687C29.0352 22.9824 29.9103 20.9928 30.2883 18.8829C30.6664 16.7729 30.5366 14.6033 29.9097 12.5535C29.2828 10.5037 28.1768 8.63257 26.6832 7.09506C25.1896 5.55754 23.3514 4.39779 21.3206 3.71176C19.2898 3.02574 17.1248 2.83316 15.0048 3.14996C12.8848 3.46676 10.8707 4.28384 9.12915 5.53358C7.38762 6.78332 5.96872 8.42981 4.98984 10.3368C4.01097 12.2438 3.50027 14.3565 3.5 16.5ZM17 30C13.9009 30.005 10.8952 28.9388 8.492 26.982C9.45922 25.5969 10.7468 24.4661 12.2451 23.6857C13.7434 22.9053 15.4081 22.4985 17.0975 22.5C18.7658 22.4985 20.4103 22.8952 21.8945 23.657C23.3787 24.4188 24.6596 25.5237 25.631 26.88C23.2092 28.9005 20.154 30.0049 17 30Z" fill="black" />
              </svg>
            </button>

            <button onClick={() => setsignoutbutt(!signoutbutt)} className={`${sign === 'signin' ? '' : 'hidden'} relative text-lg bg-[#FFFFFF] flex items-center justify-between font-manrope text-black px-4 py-1 rounded-md hover:bg-gray-100 transition-colors font-medium`} >

              <div className='flex items-start gap-1'>
                <Image src={Images.option4} alt="User" className='w-10 h-10 rounded-full' />

                <div className='font-poppins font-medium text-base'>
                  <p className='font-poppins font-medium text-sm text-start'>Hi Marium</p>
                  <p className='font-poppins font-medium text-sm text-[#666666] text-start'>7529 E. Pecan St.</p>
                </div>

              </div>
              <div>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.9999 5.6714L11.9497 0.72168L13.3639 2.13589L6.9999 8.4999L0.635986 2.13589L2.0502 0.72168L6.9999 5.6714Z" fill="#666666" />
                </svg>
              </div>

              <div className={`${signoutbutt ? '' : 'hidden'} bg-[#F4F0E9]  absolute top-[102%] z-50 left-0 right-0 rounded-lg`}>
                <div className='w-full text-center hover:bg-[#f1e1c3] rounded-lg text-base py-2 cursor-pointer'>Sign Out</div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden hamburger-menu text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#FFFFFF] hover:text-gray-300 transition-colors text-lg font-manrope py-2">
                About Us
              </Link>
              <Link href="/" className="text-[#FFFFFF] hover:text-gray-300 transition-colors text-lg font-manrope py-2">
                Contact Us
              </Link>

              {/* Mobile Language Selector */}
              <div className="relative py-2" ref={dropdownRef}>
                <button onClick={toggleLanguageDropdown} className="flex items-center space-x-2 text-[#FFFFFF] hover:text-gray-300 transition-colors px-3 py-2 rounded-md hover:bg-gray-800 w-full" >
                  <span className="text-lg">{selectedLanguage.flag}</span>
                  <span className="text-lg uppercase">{selectedLanguage.code}</span>
                  <svg className={`w-6 h-6 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangDropdownOpen && (
                  <div className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors ${selectedLanguage.code === lang.code ? 'bg-gray-700 text-white' : 'text-gray-300'
                          }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-lg">{lang.name}</span>
                        <span className="text-base text-gray-500 uppercase">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-px bg-gray-700 my-2"></div>

              {/* Mobile Auth Buttons */}
              <div className={`${sign === 'signin' ? '' : 'hidden'} text-lg border text-center font-manrope border-[#FFFFFF] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer`}>
                Sign Out
              </div>

              <div className={`flex flex-col space-y-3 pt-2 ${sign === 'signin' ? 'hidden' : ''}`}>
                <Link href="/signin" className="text-lg border text-center font-manrope border-[#FFFFFF] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors" >
                  Sign in
                </Link>
                <Link href="/signup" className="text-lg bg-[#FFFFFF] text-center font-manrope text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium" >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}