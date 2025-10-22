import MemberCard from '@/components/MemberCard'
import React from 'react'
import TextType from '@/components/TextType'

const About = () => {
    return (
        <div>
            <section className='flex flex-col text-center justify-center my-10 sm:my-25 md:my-30'>
                <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight py-4'>
                    Meet The Best Organic Company<span className='flex items-center gap-2 text-1xl font-bold sm:text-2xl lg:text-4xl sm:gap-6'>In Pakistan</span>
                </h1>
                <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl gradient-title'>
                    <TextType
                        text={["Our mission is to make pure, organic products accessible to everyone"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        textColors={["slate-600"]}
                    />
                </p>
                <div className='shadow-xl rounded-4xl p-8 sm:p-20 md:p-20'>
                    <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight md:mt-30'>About BK Organics</h1>
                    <p className='text-gray-900 mt-0 sm:mt-4 md:mt-4 text-xs md:text-2xs sm:text-xl'>Bk Organic is dedicated to providing 100% natural and high-quality products that promote a healthy and sustainable lifestyle. We specialize in pure honey, cold-pressed mustard oil, gurr (jaggery), and a range of naturally sourced items made without any artificial chemicals or preservatives.</p>
                    <p className='text-gray-900 mt-0 sm:mt-4 md:mt-4 text-xs md:text-2xs sm:text-xl'>Our products come directly from trusted local farmers who follow traditional and eco-friendly farming methods. Every batch is carefully checked to ensure freshness, purity, and authenticity before it reaches you.</p>
                    <p className='text-gray-900 mt-0 sm:mt-4 md:mt-4 text-xs md:text-2xs sm:text-xl'>At Bk Organic, we believe in building long-term trust with our customers through transparency, quality, and consistency. Our goal is to make organic living simple, reliable, and accessible for everyone.</p>
                    <p className='text-gray-900 mt-0 sm:mt-4 md:mt-4 text-xs md:text-2xs sm:text-xl'>Choose Bk Organic — where nature meets quality.</p>
                </div>

            </section>


            <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight mt-30'>Why US?</h1>
            <div className='flex shadow-xl rounded-4xl mb-20'>
                {/* Left Column */}
                <div className=' w-50 inline-block sm:w-170'>

                    {/* Item 1: Purity */}
                    <div className='flex justify-end p-10'>
                        <div className='w-25 h-25 md:w-40 md:h-40 bg-slate-500 rounded-full text-center flex justify-center items-center text-2xl font-bold'>Purity</div>
                    </div>
                    <div className='flex justify-between p-10'>
                        <div className=' w-80 h-30 flex text-right items-center text-xl'>We believe in purity, straight from the source. Every product we offer is crafted using only 100% certified organic ingredients.</div>
                        <div className=' w-80 h-30 flex justify-end items-center text-xl'>-----------------------</div>
                    </div>

                    {/* Item 3: Ethical */}
                    <div className='flex justify-end p-10'>
                        <div className='w-25 h-25 md:w-40 md:h-40 bg-slate-500 rounded-full text-center flex justify-center items-center text-2xl font-bold'>Ethical</div>
                    </div>
                    <div className='flex justify-between p-10'>
                        <div className=' w-80 h-30 flex text-right items-center text-xl'>We are passionate about protecting our planet. We partner with sustainable farms and ethical, cruelty-free suppliers who share our values.</div>
                        <div className=' w-80 h-30 flex justify-end items-center text-xl'>-----------------------</div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='w-170 inline-block'>

                    {/* Item 2: Safety */}
                    <div className='flex justify-between p-10'>
                        <div className=' w-80 h-30 flex justify-start items-center text-xl'>-----------------------</div>
                        <div className=' w-80 h-30 flex text-start items-center text-xl'>Your well-being is our top priority. Our products are meticulously formulated to be 100% free from parabens, sulfates, and other harsh chemicals.</div>
                    </div>
                    <div className='flex justify-start p-10'>
                        <div className='w-25 h-25 md:w-40 md:h-40 bg-slate-500 rounded-full text-center flex justify-center items-center text-2xl font-bold'>Safety</div>
                    </div>

                    {/* Item 4: Effective */}
                    <div className='flex justify-between p-10'>
                        <div className=' w-80 h-30 flex justify-start items-center text-xl'>-----------------------</div>
                        <div className=' w-80 h-30 flex text-start items-center text-xl'>We create products we love ourselves. Each item is produced in small batches to ensure maximum freshness, potency, and real results.</div>
                    </div>
                    <div className='flex justify-start p-10'>
                        <div className='w-25 h-25 md:w-40 md:h-40 bg-slate-500 rounded-full text-center flex justify-center items-center text-2xl font-bold'>Effective</div>
                    </div>
                </div>
            </div>

            {/* Member */}
                <div className='w-full h-80 flex justify-around items-center rounded-4xl shadow-2xl mt-20'>
                <div>
                    <h1 className="text-2xl font-bold text-slate-600 sm:text-6xl">Meet Our Founder</h1>
                    <h2 className='text-xl text-slate-600 sm:text-2xl'>Dr. Ahmad Khan</h2>
                </div>
                <div className='w-40 h-40 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-2xl'> 
                    <img src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg" alt="Profile" className='w-full h-full object-cover' />
                </div>
            </div>

            <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight mt-30'>Meet Our Staff</h1>
            <div className='flex gap-10 justify-between flex-wrap'>
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>

        </div>
    )
}

export default About

/*
<div className='w-full h-80 flex justify-around items-center rounded-4xl shadow-2xl'>
                <div>
                    <h1 className="text-2xl font-bold text-slate-600 sm:text-6xl">Meet Our Founder</h1>
                    <h2 className='text-xl text-slate-600 sm:text-2xl'>Dr. Ahmad Khan</h2>
                </div>
                <div className='w-40 h-40 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-2xl'> 
                    <img src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg" alt="Profile" className='w-full h-full object-cover' />
                </div>
            </div>

            <h1 className='flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight mt-30'>Meet Our Staff</h1>
            <div className='flex gap-10 justify-between flex-wrap'>
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
*/
