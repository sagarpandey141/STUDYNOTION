import React from 'react'
import { FaCheck } from 'react-icons/fa'
import CourseInfromationForm from './courseInformation/CourseInfromationForm'
import { useSelector } from 'react-redux'
import CourseBuilderForm  from "./CourseBuilder/CourseBuilderForm"
import PublishCourse from './PublishCourse'
const RenderSteps = () => {
     
    const{step}=useSelector((state)=>state.course)
   console.log("step is",step);
    const steps=[
        {
            id:1,
            title:"Course Information",
        },
        {
            id:2,
            title:"Course Builder",
        },
        {
            id:3,
            title:"Publish"
        }
    ]
  return (
    <>
        <div  className="relative mb-2 flex w-full justify-center">
            {steps.map((item,index)=>(
                  <div   className="flex flex-col items-center "
                   key={index}>
                       <div>

                       <div className={` grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${step===item.id ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                                : "bg-richblack-800 border-richblack-700 text-richblack-300"}`}>
                            {
                                step>item.id ? (<FaCheck
                                    className="font-bold text-richblack-900"
                                />) : (item.id)
                            }

                       </div>

                       </div>
                       {
                        item.id!==steps.length && (
                            <>
                            <div
                                className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                                step > item.id  ? "border-yellow-50" : "border-richblack-500"
                                } `}
                                ></div>
                            </>
                        )
                       }

                  </div>
            ))}
        </div>
         <div  className="relative mb-16 flex w-full select-none justify-between"> 
           {steps.map((item)=>(
               <>
                 <div
                     className="flex min-w-[130px] flex-col items-center gap-y-2">
                    <p
                    className={`text-sm ${
                  step >= item.id ? "text-richblack-5" : "text-richblack-500"
                }`}>{item.title}</p>
                 </div>
               </>
           ))}
         </div>

         {step===1 && <CourseInfromationForm/>}
         {step === 2 && <CourseBuilderForm/>}
        {step===3 && <PublishCourse/>}

    </>
  )
}

export default RenderSteps