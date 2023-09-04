// import required modules
import { Pagination } from 'swiper'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import { BsArrowRight } from 'react-icons/bs'

// data
const workSlider = {
	slides: [
		{
			images: [
				{
					title: 'E-COMMERCE ADMIN PANEL',
					path: '/admin-new.png',
					url: 'https://ecommerce-admin-lac-zeta.vercel.app/',
				},
				{
					title: 'E-COMMERCE STORE',
					path: '/store-new.png',
					url: 'https://ecommerce-store-nu-one.vercel.app/',
				},
				{
					title: 'WEATHER-APP',
					path: '/weather-new.jpg',
					url: 'https://weather-react-app-gules.vercel.app/',
				},
				
				{
					title: 'CRYPTO TRACKER',
					path: '/coinVibe-new.png',
					url: 'https://react-crypto-tracker-xi.vercel.app/',
				},
			],
		},
		{
			images: [
				{
					title: 'TODO-LIST',
					path: '/todo-new.png',
					url: 'https://react-todo-list-nine-xi.vercel.app/',
				},
				{
					title: 'TIP CALCULATOR',
					path: '/calculator-new.png',
					url: '#',
				},
				{
					title: 'IN PROGRESS ...',
					path: '/thumb2.jpg',
					url: '#',
				},
				{
					title: 'IN PROGRESS ...',
					path: '/thumb3.jpg',
					url: '#',
				},
			],
		},
	],
}

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='h-[340px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[510px] xxl:h-[630px]'
		>
			{workSlider.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='grid grid-cols-2 grid-rows-3 gap-4 '>
							{slide.images.map((image, index) => {
								return (
									<div
										key={index}
										className='relative rounded-lg overflow-hidden flex items-center justify-center group'
									>
										<div className='flex items-center justify-center relative overflow-hidden group'>
											{/* image */}

											<Image src={image.path} width={500} height={300} alt='' />

											{/* overlay gradient */}
											<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#265f63] to-[#aea762] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
											{/* title */}
											<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-16 group-hover:xl:-translate-y-24 transition-all duration-300'>
												<div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
													{/* icon */}
													<a
														href={image.url}
														target='_blank'
														rel='noopener noreferrer'
														className='flex items-center gap-x-1'
													>
                            {/* title */}
														<div className='translate-y-[500%] group-hover:translate-y-0 duration-300 delay-300'>
															{image.title}
														</div>

														<div className=' ml-5 transform transition-transform duration-300 delay-200'>
															<BsArrowRight className='text-xl group-hover:scale-150 animate-ping' />
														</div>
														
													</a>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default WorkSlider
