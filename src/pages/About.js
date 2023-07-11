import React from 'react'
import image1 from "../../src/assets/Images/aboutus1.webp"
import image2 from "../../src/assets/Images/aboutus2.webp"
import image3  from "../../src/assets/Images/aboutus3.webp"
import foundingStory from "../../src/assets/Images/FoundingStory.png"
import Quote from '../component/core/About/Quote'
import HighlightText from '../component/core/HomePage/HighlightText'
import StatComponent from '../component/core/About/StatComponent'
import LearningGrid from '../component/core/About/LearningGrid'
import ContactUsForm from '../component/core/About/ContactUsForm'
import Footer from "../../src/component/common/Footer"
import RatingandReview from '../component/core/HomePage/RatingandReview'
const About = () => {
  return (
    <div className='text-white'>
        {/*section 1*/}
        <section className="bg-richblack-700">
             <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white ">
             <h1 className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">Driving Innovation in Online Education for a 
             <HighlightText  text={"Brighter Future"}/></h1>
             <p className="mx-auto mt-[-4%] text-center text-base font-medium text-richblack-300 lg:w-[63%]">Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>

             <div className='mt-4 flex lg:flex-row gap-7'>
                <img src={image1}></img>
                <img src={image2}></img>
                <img src={image3}></img>
             </div>
             </div>
        </section>
          
          {/*section 2*/}
         <section  className="border-b border-richblack-700 mt-8">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
              <Quote/>
          </div>
          </section>

          {/*section 3*/}
          <section className='mt-[10%]'>
          <h1 className=" ml-[12%] mt-[-5%] mb-[2%] bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">Our Founding Story</h1>
              <div className='flex justify-evenly'>
              <div className='max-w-[39%] '>
          
             <p className="  text-base font-medium text-richblack-300 lg:w-[95%]">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
             <p className="text-base font-medium text-richblack-300 lg:w-[95%] mt-[8%]">As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>

               </div>

               {/*founding story left side*/}

               <div className='mt-[-5%]'>
                <img src={foundingStory}></img>
               </div>
              </div>
               
               {/*bottom part*/}
               <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between ml-[5%]">
                   <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                    <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">Our Vision</h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
               
                   </div>

                   <div className="my-24 flex lg:w-[40%] flex-col gap-10 mr-[5%]">
                    <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">Our Mission</h1>
                    <p className="text-base font-medium text-richblack-300 lg:w-[95%]">Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                   </div>
               </div>
          </section>

          {/*section 4*/}
         <section className='mt-32 text-white'>
         <StatComponent/>
         </section>
          
          {/*section 5*/}
          <section>
            <LearningGrid/>
            <ContactUsForm/>
          </section>

          {/*section 6*/}
           <section>
              <h2 className='text-center font-semibold text-4xl mt-[90px] '>Reviews from other Learners</h2>
            <RatingandReview/>
         
           </section>
       <Footer/>
    </div>
  )
}

export default About