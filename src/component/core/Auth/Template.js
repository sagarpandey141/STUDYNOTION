import React from 'react'
import frame from "../../../../src/assets/Images/frame.png"
import LogInForm from './LogInForm'
import SignupForm from './SignupForm'
const Template = ({title,desc1,desc2,image,formtype}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 mt-5'>
         <div className='w-11/12 max-w-[450px]'>
             <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
             <p className='text-[1.125rem] leading[1.625rem] mt-4'>
             
             <span className='text-richblack-100'>{desc1}</span>
             <span className='text-blue-100 italic'>{desc2}</span>

             </p>

             {formtype==="signup" ?
             <SignupForm /> :
             <LogInForm/>}
            
           


         </div>

         <div >
            <img
             src={frame}
             alt="pattern"
           
         
             loading='lazy'
            className='relative w-11/12 max-w-[450px] mt-1 -right-[20%] h-[494px] w-[558px]'
            />
          
          <img
                src={image}
                alt="Pic"
                width={558}
                height={404}
                loading='lazy'
                className='absolute  top-[14%] right-28 h-[504px] '
            />
          
         </div>
    </div>
  )
}

export default Template