import React, { useState } from 'react'

// icons
import { FaJs, FaReact, FaFigma, FaSass, FaBootstrap} from 'react-icons/fa'

import { SiTailwindcss, SiTypescript } from 'react-icons/si'

import { SiNextdotjs, SiAdobexd, SiAdobephotoshop } from 'react-icons/si'

//  data
const aboutData = [
	{
		title: 'Known Technologies',
		info: [
			{
				title: 'Web Development',
				icons: [
					<FaJs key='fa-js' />,
					<FaReact key='fa-react' />,
					<SiNextdotjs key='si-nextdotjs' />,
					<FaBootstrap key='bootstrap-react'/>,
					<SiTailwindcss key='si-tailwindcss' />,
					<FaSass key='fa-sass' />,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [
					<FaFigma key='fa-figma' />,
					<SiAdobexd key='si-adobexd' />,
					<SiAdobephotoshop key='si-adobephotoshop' />,
				],
			},
		],
	},
	
]

// components

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

// framer motion

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// counter
import CountUp from 'react-countup'

const About = () => {
	const [index, setIndex] = useState(0)
	console.log(index)

	return (
		<div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
			<Circles />
			<motion.div
				variants={fadeIn('right', 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='hidden xl:flex absolute bottom-0 -left-[370px]'
			>
				<Avatar />
			</motion.div>
			<div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
				{/* text */}

				<div className='flex-1 flex flex-col justify-center mt-8'>
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h2'
					>
						The only way to do <span className='text-accent'>great </span> work is to love what you do
					</motion.h2>
					<motion.p
						variants={fadeIn('right', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-[700px] mx-auto xl:mx-0 mb-10 mt-6 xl:mb-16 px-2  xl:px-0'
					>
						From a distance, it appeared that I had reached the pinnacle of my career as a team leader in a renowned company. I was part of something significant. However, something still tugged at my heart. <br /><br /> At a certain point, I realized that in order to fulfill this dream, I had to leave the comfortable paths. I resigned from a position that seemed to be the goal in itself to begin working on my true passion. <br /><br />
						 It was a pivotal moment, a bold step into the unknown, towards fulfilling my dreams. This is a story of courage, passion, and the pursuit of my own path in the world of professional success.
					</motion.p>

					{/* counters */}

					<motion.div
						variants={fadeIn('right', 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
					>
						<div className='flex flex-1 xl:gap-x-6'>
							{/* experience */}
							<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold text-accent  mb-2'>
									<CountUp start={0} end={2} duration={7} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] my-2'>
									Years of experince
								</div>
							</div>
							{/* cleints */}
							<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
									<CountUp start={0} end={150} duration={7} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] my-2'>
									sleepless nights
								</div>
							</div>
							{/* projects */}
							<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold text-accent  mb-2'>
									<CountUp start={0} end={1500} duration={7} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] my-2'>
									hours of study
								</div>
							</div>
							{/* awards */}
							<div className='relative flex-1'>
								<div className='text-2xl xl:text-4xl font-extrabold text-accent  mb-2'>
									<CountUp start={0} end={15} duration={7} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] my-2'>
								Finished projects
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info */}

				<motion.div
					variants={fadeIn('left', 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='flex flex-col w-full xl:max-w-[45%] h-[580px]'
				>
					<div className='flex gap-x-3 md:gap-x-8 text-xl xl:text-2xl xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className='text-accent'
									onClick={() => setIndex(itemIndex)}
								>
									{item.title}
								</div>
							)
						})}
					</div>

					<div className='py-4 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start'>
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className='flex-1 flex flex-col md:flex-row max-2-max gap-x-2 items-center  text-lg  text-white/60'
								>
									<div className='font-light mb-2 md:mb:0 '>{item.title}</div>
									<div className='hidden xl:flex'>-</div>
									<div>{item.stage}</div>
									<div className='flex gap-x-4'>
										{item.icons?.map((icon, itemIndex) => {
											return (
												<div key={itemIndex} className='text-3xl text-white'>
													{icon}
												</div>
											)
										})}
									</div>
								</div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default About
