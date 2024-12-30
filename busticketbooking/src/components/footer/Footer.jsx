import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import MasterCardImg from "../../assets/mastercard.png"
import PaypalImg from "../../assets/paypal.png"
import CreditCardImg from "../../assets/creditcard.png"
const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 py-12 mt-8'>   
      <RootLayout className="space-y-10">
        
        {/* Footer other content */}
        <div className="w-full grid grid-cols-5 gap-8">
           <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            <div className="space-y-3">
            {/* Logo */}
            <Link to="/" className='text-6xl font-bold text-primary'>
            BusFinder
            </Link>
           

           {/* some description */ }
           <p className="text-sm text-neutral-500 font-normal">
           BusFinder is your reliable companion for seamless bus travel across Sri Lanka. Our platform connects passengers and bus operators, enabling convenient seat reservations, route exploration, and secure online payments. Designed for efficiency and simplicity, BusFinder ensures a stress-free travel planning experience for everyone.
           </p>
           </div>

                {/* social links */}
                <div className="w-full flex items-center gap-x-5">

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaInstagram className='w-5 h-5 text-neutral-50'/>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaFacebook className='w-5 h-5 text-neutral-50'/>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaYoutube className='w-5 h-5 text-neutral-50'/>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaXTwitter className='w-5 h-5 text-neutral-50'/>
                    </div>

                </div>
           </div>
           <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
                Quick Links
            </h1>

            <div className="space-y-2">
                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                About Us
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                My Account
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Reserve your ticket
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Create your account
                </Link>
            </div>
           </div>

           <div className="col-span-1 space-y-5">
           <h1 className="text-lg text-neutral-100 font-semibold">
                Top Reserved Routes
            </h1>

            <div className="space-y-2">
                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Matara - Galle
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Matara - Colombo
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Colombo - Kandy
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Colombo - Jaffna
                </Link>
            </div>
           </div>

           <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
                Support Links
            </h1>

            <div className="space-y-2">
                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Privacy Policy
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Terms &Conditions
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                Help & support Center
                </Link>

                <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                FaQs
                </Link>
            </div>
           </div>
        </div>

        {/* Seperator */}
        <div className="w-full h-px bg-neutral-800/50"  />

        {/* Copyright */}
        <div className="w-full flex items-center justify-between">
            <p className="text-sm text-neutral-600 font-normal">
                Coppyright & Coppy; 2025. All rights reserved.
            </p>
            <div className="flex item-center gap-x-2">
                <div className="">
                    <img src={MasterCardImg} alt="" className="w-fit h-9 object-contain object-center" />
                </div>
                <div className="">
                    <img src={PaypalImg} alt="" className="w-fit h-9 object-contain object-center" />
                </div>
                <div className="">
                    <img src={CreditCardImg} alt="" className="w-fit h-9 object-contain object-center" />
                </div>
            </div>
        </div>

      </RootLayout>
    </div>
  )
}






export default Footer
