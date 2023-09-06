// quotes data
const QuotesData = [
	{
		image: '/stevee.png',
		name: 'Steve McConnell',
		position: 'an expert in software engineering and project management',
		message:
			"Coding is a simple part of software development. Understanding the problem you're trying to solve is the difficult part",
	},
	{
		image: '/robert.png',
		name: 'Robert A. Heinlein',
		position: 'Aeronautical engineer and Science fiction author',
		message:
			'If you want to be a good programmer, you must be lazy and find shortcuts.',
	},
	{
		image: '/mark.png',
		name: 'Mark Zuckerberg',
		position: 'CEO of Meta',
		message:
			"The value of our projects is not about how much money we make but how much we improve people's lives.",
	},
]

// import required modules

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'

// icons
import { FaQuoteLeft } from 'react-icons/fa'

// data

const QuotesSlider = () => {
	return (
		<Swiper
			navigation={true}
			pagination={{
				clickable: true,
			}}
			modules={[Navigation, Pagination]}
			// className='h-[340px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[510px] xxl:h-[630px]'
      className='h-[400px]'
		>
			{QuotesData.map((person, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
							{/* avatar, name, position */}
							<div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
								<div className='flex flex-col justify-center text-center'>
									{/* avatar */}
									<div className='mb-2 mx-auto'>
										<Image src={person.image} width={100} height={100} alt='' />
									</div>

									{/* name */}
									<div className='text-lg'>{person.name}</div>
									{/* position */}
									<div className='text-[12px] uppercase font-extralight tracking-widest'>
										{person.position}
									</div>
								</div>
							</div>
							{/* quote & message */}
							<div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
								{/* quote icon */}
								<div className='mb-4'>
									<FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
								</div>
								{/* quote message */}
								<div className='xl:text-lg text-center md:text-left'>
									{person.message}
								</div>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default QuotesSlider
