import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link' // Import Link from next/link

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {

	RxPencil2,
	RxDesktop,
	RxRocket,
	RxArrowTopRight,
} from 'react-icons/rx'
import {FaPeopleArrows} from 'react-icons/fa'

import {BiSupport} from 'react-icons/bi'

// import required modules
import { FreeMode, Pagination } from 'swiper'

// data
const serviceData = [
	{
		icon: <RxDesktop />,
		title: 'Development',
		description: '',
	},
	{
		icon: <RxPencil2 />,
		title: 'UI/UX Design',
		description: '',
	},
	{
		icon: <BiSupport />,
		title: 'Consultations ',
		description: '',
	},
	{
		icon: <FaPeopleArrows />,
		title: 'Technical Support',
		description: '',
	},
	{
		icon: <RxRocket />,
		title: 'Custom Solutions',
		description: '',
	},
]

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className='h-[180px] sm:h-[270px]'
		>
			{serviceData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300'>
							{/* icon */}
							<div className='text-4xl text-accent mb-2'>{item.icon}</div>
							{/* title && description */}
							<div className='mb-3'>
								<div className='mb-2 text-lg'>{item.title}</div>
							</div>
							{/* arrow */}
							<div className='text-3xl'>
								<Link href='/contact'>
									<RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent trasition-all duration-300' />
								</Link>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default ServiceSlider
