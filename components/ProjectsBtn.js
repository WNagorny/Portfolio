import Link from 'next/link'
import Image from 'next/image'

import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
	return (
		<div className='mx-auto xxl:mx-0'>
			<Link
				href='/work'
				className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
			>
				<Image
					className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] z-10'
					src={'/rounded-text.png'}
					width={141}
					height={148}
					alt=''
				/>
				<HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-translate duration-300' />
			</Link>
		</div>
	)
}

export default ProjectsBtn
