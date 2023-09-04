"use client"

import React, { useState } from 'react'
import userImage from '../public/userimage.svg'
import Image from 'next/image'
import { FaUser } from "react-icons/fa"

const Userpage = () => {
    return (
        <div className='flex px-14 my-24 justify-between items-start'>
            {/* Side Navigation */}
            <div className='flex items-start gap-3 shrink-0 rounded-3xl bg-[#1E1E1E]'>
                <div className='flex flex-col gap-14 pt-12 pl-5 pr-10 pb-20'>
                    <div className='flex items-center gap-7 text-white'>
                        <Image className='w-24 h-24 rounded-full' src={userImage} />
                        <p className='font-inter text-2xl font-bold leading-normal'>User’s Name</p>
                    </div>
                    <div className='flex flex-col items-start gap-14'>
                        <button className={`w-full h-12 shrink-0 rounded-lg bg-white px-9`}>
                            <div className={`flex items-center gap-3`}>
                                <FaUser className={`text-black text-2xl`} />
                                <p className={`text-black font-inter text-base font-medium leading-normal opacity-95`}>Profile</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* Profile Page */}
            <div className='flex flex-col items-start gap-16'>
                <div className='flex items-center justify-between w-full'>
                    <p className='text-[#272727] font-inter text-2xl font-semibold leading-normal'>Profile</p>
                    <button className='flex px-12 py-4 w-56 h-14 justify-center items-center gap-3 rounded-[82.971px] bg-[#3A3A3A]'>
                        <p className='text-white font-inter text-lg font-semibold leading-normal'>Edit</p>
                    </button>
                </div>
                <div className='flex flex-col items-start gap-36'>
                    <div className='flex flex-col items-start gap-16'>
                        <div className='flex items-start gap-7'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Candidate Name</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>Vinesh Kumar Sharma</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>E-mail Address</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>randomemail@gmail.com</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Address</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>random house no., random street, state, country, 121003</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-14'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Alternative E-mail Address</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>randomemail@gmail.com </p>
                            </div>
                            <div className='flex flex-col items-start gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Crypto Wallet</p>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className={`w-3 h-3 rounded-full bg-[#26D118]`}></div>
                                    <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-16'>
                        <div className='flex items-start gap-14'>
                            <div className='flex items-start gap-12'>
                                <div className='flex flex-col gap-5'>
                                    <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Oraganization Name</p>
                                    <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>Random Name</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Contact Name</p>
                                    <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>Random Name</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Organization Address</p>
                                    <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>random house no., random street, state, country, 121003</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-12'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Contact Address</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>random house no., random street, state, country, 121003</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#363636] font-inter text-xl font-semibold leading-normal underline'>Contact Token</p>
                                <p className='text-[#1B1B1B] font-inter text-lg font-medium leading-normal'>10381402400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userpage
