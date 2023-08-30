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
			className='h-[340px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[510px] xxl:h-[630px]'
		>
			{workSlider.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
           <div className='grid grid-cols-2 grid-rows-3 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
                <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                  <div className='flex items-center justify-center relative overflow-hidden'>
   {/* image */}      
                  <Image src={image.path} width={500} height={300} alt=''/>
   {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
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
