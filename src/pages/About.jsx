import React from 'react'
import { team } from '../helper/data'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className='py-12 bg-gray-200 min-h-screen'>
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className='text-4xl font-semibold'>Meet My Team</h3>
          <p className='my-5 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis tenetur eos modi accusantium doloremque, molestias possimus! Quis, laboriosam culpa.</p>
        </div>

        <div className='mt-10'>
          <div className="grid gap-24 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 p-8">
          {team.map((item, index) =>(
              <div key={index}>
                <div className="mx-auto">
                  <img src={item.avatar} alt={item.name} className='w-32 h-32 rounded-full mx-auto' />
                </div>
                <div className='mt-2'>
                  <h4 className='font-semibold text-2xl'>{item.name}</h4>
                  <p className='font-[500] text-blue-800'>{item.title}</p>
                  <p className='text-gray-500'>{item.desc}</p>
                  <div className='flex justify-center items-center gap-4 mt-4'>
                    <a href={item.linkedin} target='_blank' rel='noreferrer' className='text-2xl text-[#0270AD]'><FaLinkedin /></a>
                    <a href={item.github} target='_blank' rel='noreferrer' className='text-2xl text-gray-900'><FaGithub /></a>
                  </div>
                </div>
              </div>
            ))}
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default About