
import Image from "next/image"




const Avatar = () => {
  return (
  <div classname="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar.png'} width={737} height={678} alt="" className="w-full h-full"/>
  </div>
  )
};

export default Avatar;
