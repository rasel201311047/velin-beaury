"use client";
import React, { useState } from "react";

export default function ContractUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="bg-gradient-to-br from-[#FDFCFB] to-[#F7F3EA] py-8 w-full px-4">
      <div className="container mx-auto py-4">
        <h2 className="text-center font-playfair font-bold text-2xl py-3 text-[#222122]">
          The platform you were looking for!
        </h2>
        <p className="text-[#222122] font-manrope font text-center md:w-1/3 md:mx-auto mb-6 text-base">
          Have any questions, doubts, or curiosities? Write to us. We’ll get back
          to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-md w-11/12 md:w-8/12 mx-auto mx-2 space-y-4"  >
          {/* Name */}
          <div className="flex items-center border rounded-md px-3 py-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full outline-none text-[#555555] font-dm px-3" required />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-md px-3 py-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 6L12 13L2 6" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full outline-none text-[#555555] font-dm px-3" required />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-md px-3 py-4">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 17.4201V20.4201C22.0011 20.6986 21.944 20.9743 21.8324 21.2294C21.7209 21.4846 21.5572 21.7137 21.352 21.902C21.1468 22.0902 20.9045 22.2336 20.6407 22.3228C20.3769 22.412 20.0973 22.4452 19.8199 22.4201C16.7428 22.0857 13.7869 21.0342 11.1899 19.3501C8.77376 17.8148 6.72527 15.7663 5.18993 13.3501C3.49991 10.7413 2.44818 7.77109 2.11993 4.6801C2.09494 4.40356 2.12781 4.12486 2.21643 3.86172C2.30506 3.59859 2.4475 3.35679 2.6347 3.15172C2.82189 2.94665 3.04974 2.78281 3.30372 2.67062C3.55771 2.55843 3.83227 2.50036 4.10993 2.5001H7.10993C7.59524 2.49532 8.06572 2.66718 8.43369 2.98363C8.80166 3.30008 9.04201 3.73954 9.10993 4.2201C9.23656 5.18016 9.47138 6.12282 9.80993 7.0301C9.94448 7.38802 9.9736 7.77701 9.89384 8.15098C9.81408 8.52494 9.6288 8.86821 9.35993 9.1401L8.08993 10.4101C9.51349 12.9136 11.5864 14.9865 14.0899 16.4101L15.3599 15.1401C15.6318 14.8712 15.9751 14.6859 16.3491 14.6062C16.723 14.5264 17.112 14.5556 17.4699 14.6901C18.3772 15.0286 19.3199 15.2635 20.2799 15.3901C20.7657 15.4586 21.2093 15.7033 21.5265 16.0776C21.8436 16.4519 22.0121 16.9297 21.9999 17.4201Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full outline-none text-[#555555] font-dm px-3" />
          </div>

          {/* Service */}
          <div className="flex items-center border rounded-md px-3 py-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <input type="text" name="service" placeholder="Service You Need" value={formData.service} onChange={handleChange} className="w-full outline-none text-[#555555] font-dm px-3" />
          </div>

          {/* Note */}
          <div className="flex items-start border rounded-md px-3 py-4">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1977_97306)">
                <path d="M10.5415 3.83301H3.83317C3.32484 3.83301 2.83733 4.03494 2.47788 4.39439C2.11844 4.75383 1.9165 5.24134 1.9165 5.74967V19.1663C1.9165 19.6747 2.11844 20.1622 2.47788 20.5216C2.83733 20.8811 3.32484 21.083 3.83317 21.083H17.2498C17.7582 21.083 18.2457 20.8811 18.6051 20.5216C18.9646 20.1622 19.1665 19.6747 19.1665 19.1663V12.458" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.729 2.39621C18.1103 2.01496 18.6273 1.80078 19.1665 1.80078C19.7057 1.80078 20.2228 2.01496 20.604 2.39621C20.9853 2.77746 21.1994 3.29455 21.1994 3.83371C21.1994 4.37288 20.9853 4.88996 20.604 5.27121L11.4998 14.3754L7.6665 15.3337L8.62484 11.5004L17.729 2.39621Z" stroke="#422A3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1977_97306">
                  <rect width="23" height="23" rx="5" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <textarea
              name="note"
              placeholder="Any Note For Us"
              value={formData.note}
              onChange={handleChange}
              className="w-full outline-none resize-none h-24 text-[#555555] font-dm px-3"
            />
          </div>

          {/* Submit */}
          <button  type="submit" className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition" >
            SUBMIT
          </button>
        </form>
      </div>

    </div>
  );
}
