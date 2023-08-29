import React, { useState } from 'react'

// icons
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
} from 'react-icons/fa'

import {
	SiNextdotjs,
	SiFramer,
	SiAdobexd,
	SiAdobephotoshop,
} from 'react-icons/si'

//  data
const aboutData = [
	{
		title: 'skills',
		info: [
			{
				title: 'Web Development',
				icons: [
					<FaHtml5 />,
					<FaCss3 />,
					<FaJs />,
					<FaReact />,
					<SiNextdotjs />,
					<SiFramer />,
					<FaWordpress />,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
			},
		],
	},
	{
		title: 'awards',
		info: [
			{
				title: 'Webby Awards - Honoree',
				stage: '2011 - 2012',
			},
			{
				title: 'Adobe Design Achievement Awards - Finalist',
				stage: '2009 - 2010',
			},
		],
	},
	{
		title: 'experience',
		info: [
			{
				title: 'UX/UI Designer - XYZ Company',
				stage: '2012 - 2023',
			},
			{
				title: 'Web Developer - ABC Agency',
				stage: '2010 - 2012',
			},
			{
				title: 'Intern - DEF Corporation',
				stage: '2008 - 2010',
			},
		],
	},
	{
		title: 'credentials',
		info: [
			{
				title: 'Web Development - ABC University, LA, CA',
				stage: '2011',
			},
			{
				title: 'Computer Science Diploma - AV Technical Institute',
				stage: '2009',
			},
			{
				title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
				stage: '2006',
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
				<div className='flex-1 flex flex-col justify-center'>text</div>
				<div className='flex flex-col w-full xl:max-w-[48%] h-[780px]'>
					<div className='flex gap-x-4 md:gap-x-9 text-lg md:text-xl xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={` ${
										index === itemIndex &&
										'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-500'
									} cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-2 after:left-0 z-10`}
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
								<div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-2-max gap-x-2 items-center text-white/60'>
									<div>{item.title}</div>
									<div className='hidden xl:flex'>-</div>
									<div>{item.stage}</div>
									<div className='flex gap-x-4'>
										{item.icons?.map((icon, itemIndex) => {
											return <div key={itemIndex} className='text-3xl'>{icon}</div>
										})}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
