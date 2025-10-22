import React from 'react'

const MemberCard = () => {
    return (
        <>
            <div className='w-100 h-90 sm:w-100 sm:h-150 md:w-100 md:h-150 flex flex-col rounded-4xl shadow-2xl mt-10 p-15'>
                <div className='w-40 h-40 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-2xl'> {/* 1. Set a fixed size and hide overflow */}
                    <img src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg" alt="Profile" className='w-full h-full object-cover' />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-slate-600 sm:text-2xl mt-10">CEO of BK</h1>
                    <h2 className='text-xl text-slate-600 sm:text-2xl'>Dr. Ahmad Khan</h2>
                </div>
            </div>
        </>
    )
}

export default MemberCard
