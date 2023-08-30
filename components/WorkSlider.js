// import required modules
import { Pagination } from 'swiper'

import Image from 'next/image'


import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  BsArrowRight,

} from 'react-icons/bs'

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='h-[280px] sm:h-[480px]'
		>
			{workSlider.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
           slide
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default WorkSlider
