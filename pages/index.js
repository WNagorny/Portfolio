import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const Home = () => {
	return (
		<div className='bg-primary/60 h-full'>
			<div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
				<div className='text-center flex flex-col justify-center xxl:pt40 xxl:text-left h-full container mx-auto'>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h1 xxl:text-7xl'
					>
						Transforming Ideas <br /> {''} Into{' '}
						<span className='text-accent'>Digital Reality</span>{' '}
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-sm xxl:max-w-xl mx-auto xxl:mx-0 mb-10 xxl:mb-16 xxl:text-2xl'
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni id
						amet perferendis rem inventore delectus!
					</motion.p>
					<div className='flex justify-center xl:hidden relative'>
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn('down', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden xl:flex'
					>
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>

			<div className='w-[1500px] h-full absolute right-0 bottom-0'>
				<div className='bg-none xxl:bg-computer xxl:bg-cover xxl:bg-right xxl:bg-no-repeat w-full h-full absolute  mix-blend-color-dodge'>
				</div>

				{/* <ParticlesContainer/> */}
				
			</div>
		</div>
	)
}

export default Home
