"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from '../../public/assets/images/Images';

export default function Navbar() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Sample language data
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
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
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false);
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
          <div className="h-6 w-px bg-gray-700"></div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/signin" className="text-lg border font-manrope border-[#FFFFFF] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors" >
              Sign in
            </Link>
            <Link href="/signup" className="text-lg bg-[#FFFFFF] font-manrope text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium" >
              Sign up
            </Link>
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
              <div className="flex flex-col space-y-3 pt-2">
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