

import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
	return (
		<div className='h-full bg-primary/30 py-36 flex items-center'>
			<Circles />
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row gap-x-8'>
					{/* text */}

					<div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 text'>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='lg:text-4xl text-2xl xl:mt-16 mb-6'
						>
							First, solve the problem <br /> Then, write the code <span className='text-accent'>.</span>
						</motion.h2>
						
					</div>

					{/* slider */}

					<motion.div
						variants={fadeIn('down', 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full xl:max-w-[65%]'
					>
						<WorkSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	)
}

export default Work
