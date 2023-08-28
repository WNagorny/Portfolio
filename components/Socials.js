import Link from 'next/link'

import { RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
	return (
		<div className='flex items-center gap-x-5 text-3xl xl:text-4xl'>
			<Link href={'https://www.facebook.com/nagornyi.valerka'} target='_blank' className='hover:text-accent transition-all duration-300'>
				<RiFacebookLine />
			</Link>

			<Link href={'https://www.instagram.com/walery_nagorny'} target='_blank' className='hover:text-accent transition-all duration-300'>
				<RiInstagramLine />
			</Link>
			<Link href={'https://www.linkedin.com/in/walery-nagorny/'} target='_blank' className='hover:text-accent transition-all duration-300'>
				<RiLinkedinLine />
			</Link>

			<Link href={'https://github.com/WNagorny'} target='_blank' className='hover:text-accent transition-all duration-300'>
				<RiGithubLine />
			</Link>
		</div>
	)
}

export default Socials
