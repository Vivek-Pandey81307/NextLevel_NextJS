import Image from "next/image"
import MyImage from '../../public/images/anonymous.jpg'
const LearnUseImage = () => {
  return (
    <>
        <Image src={MyImage}/>
    </>
  )
}

export default LearnUseImage