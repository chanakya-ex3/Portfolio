import React, {useState} from 'react'
import Typewriter from 'typewriter-effect'
import { SocialIcon } from 'react-social-icons'
import './Home.css'

const Home = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className='w-full h-full flex flex-row gap-10'>
            <div className='m-10 p-10 flex flex-col gap-10 w-full rounded-2xl bg-gray-200'>
                <div>div1</div>
                <div>
                    <div className='font-bold text-5xl'>Hello, My Name is Chanakya </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-5xl'>and, I am</div>
                    <div className='font-bold text-5xl text-orange-500'>
                        <Typewriter
                            options={{
                                strings: ['AWS Certified Developer', 'AWS Solutions Architect', 'MERN Stack Developer', 'Flutter Developer'],
                                autoStart: true,
                                loop: true,
                            }} />
                    </div>
                </div>
                <div>
                    <div className='text-xl'>Based in Chennai, India</div>
                    <div className='text-xl'>Currently Intern at I4sight Technologies</div>
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-4'>
                        <button className='px-5 py-2 border-black bg-black text-white rounded-3xl hover:bg-gray-700'>Contact</button>
                        <button className='px-5 py-2 border-black rounded-3xl hover:bg-gray-200'>Resume</button>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <button className='p-0 border-none bg-transparent'><SocialIcon url='www.linkedin.com' href='https://www.linkedin.com/in/chanakya-bhardwaj-mudunuru-4953b4232/' />
                        </button>
                        <button className='p-0 border-none bg-transparent'><SocialIcon url='www.github.com' href='https://github.com/chanakya-ex3' /></button>
                    </div>
                </div>
            </div>
            <div>
            <label className="switchx">
                <input id="switch" type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)} />
                <span className="sliderx"></span>
              </label>
            </div>
        </div>
    )
}

export default Home