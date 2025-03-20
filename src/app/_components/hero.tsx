"use client"
import Image from 'next/image'
import React from 'react'

export function HeroSection() {
    return (
        <div className='relative w-full h-64 bg-rose-200 text-white'>
            <div className="absolute w-full z-10 bg-black/30 h-full" />
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center">
                <h2 className='text-3xl font-bold'>Ebra Store</h2>
                <p className='max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium suscipit vero esse doloribus voluptatem eaque quia placeat quas culpa explicabo?</p>
            </div>
            {/* <Image src={"/store-bg.jpg"} alt='store-bg' fill className='object-cover' /> */}
        </div>
    )
}
