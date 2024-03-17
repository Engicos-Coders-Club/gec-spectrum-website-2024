"use client"
import React, { useState, FormEvent } from 'react';
import localFont from 'next/font/local'

interface OtpModalProps {
    onClose: () => void;
  }

const panchang = localFont({
    src: '../../../public/Panchang-Variable.ttf',
    display: 'swap',
})

const OtpModal: React.FC<OtpModalProps> = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(Array(4).fill('')); // Create an array of 4 empty strings
    const [otpModalVisible, setOtpModalVisible] = useState(false); // New state for OTP modal visibility
  
    const handleChange = (elementIndex:any, event:any) => {
        const newOtp = [...otp]; // Copy the existing OTP array
        newOtp[elementIndex] = event.target.value; // Change the value of the specific element
        setOtp(newOtp); // Update the OTP state
      };

      const handleOtpSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Handle OTP submission here
        console.log(`OTP: ${otp}`);
        onClose(); // Close the modal
        setOtpModalVisible(false); // Close the OTP modal
      };
    
  return (
    <>
    
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="text-white p-6 rounded-xl shadow-lg w-1/2 bg-[#06050A]">
      <div className="flex justify-between items-center">
        <h2 className={`mb-4 ${panchang.className} text-2xl text-[#FFBA25] font-semibold`}>Enter OTP</h2>
        <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <form onSubmit={handleOtpSubmit}>
        <label className="block mb-2 mx-auto">
          
          <div className="flex space-x-2 justify-center items-center">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e)}
                maxLength={1}
                required
                className="mt-1 p-2 w-12 text-center flex justify-center items-center bg-[#323232] text-white rounded-lg"
              />
            ))}
          </div>
        </label>
        <button type="submit" className="block w-1/6 mt-10 p-2 mx-auto bg-[#741CFF] text-white rounded-full rounded-tl-none">Login</button>
      </form>
    </div>
  </div>
  </>
  )
}

export default OtpModal