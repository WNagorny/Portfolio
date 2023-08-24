import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'


const Home = () => {
  return (

    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30'>
        <div className='text-center flex flex-col justify-center xl:pt40 xl:text-left h-full container mx-auto'> 
          <h1 className='h1'>Transforming Ideas <br /> {''} Into <span className='text-accent'>Digital Reality</span> </h1>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni id amet perferendis rem inventore delectus!</p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
        </div>
      </div>


      <div>image</div>
    </div>

  )
};

export default Home;
