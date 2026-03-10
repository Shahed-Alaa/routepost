import React, { useState } from 'react'
import backSign from "../../assets/imges/leftside.jpeg";
import alexPhoto from "../../assets/imges/alex.jpeg";
import { FaMessage } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function AuthLeftSection({h2 , span , p}) {
  
    return (
    <>
    <div className="min-h-[150vh]  px-8 py-13 ">
                <div className="">
                    
                   <h1 className='text-5xl mt-15 font-bold text-blue-900'>Route Posts</h1>
                    <p className='my-4 text-[22px]'>Connect with friends and the world around you on Route Posts.</p>   

                    <div className="box bg-white p-5 shadow shadow-blue-900/50 rounded-2xl">

                        <p className='font-bold text-blue-900 text-md '>ABOUT ROUTE ACADEMY</p>
                        <p className='font-bold text-md mt-1'>Egypt's Leading IT Training Center Since 2012</p>

                        <p className='text-gray-600 text-[13px] my-3'>Route Academy is the premier IT training center in Egypt, established in 2012. We specialize in delivering high-quality training courses in programming, web development, and application development. We've identified the unique challenges people may face when learning new technology and made efforts to provide strategies to overcome them.</p>

                        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            <div className=" bg-blue-100/50 rounded-2xl border border-blue-900/20 px-3 py-2">
                                <p className='font-extrabold text-blue-900 text-md'>2012</p>
          <p className='text-gray-500 text-[11px] font-bold'>FOUNDED</p>
                            </div>

                             <div className=" bg-blue-100/50 rounded-2xl border border-blue-900/20 px-3 py-2">
                                <p className='font-extrabold text-blue-900 text-md'>40K+</p>
          <p className='text-gray-500 text-[11px] font-bold uppercase'>Graduates</p>
                            </div>

                             <div className=" bg-blue-100/50 rounded-2xl border border-blue-900/20 px-3 py-2 ">
                                <p className='font-extrabold text-blue-900 text-md'>50+</p>
          <p className='text-gray-500 text-[11px] font-bold uppercase'>Partner Companies</p>
                            </div>

                             <div className=" bg-blue-100/50 rounded-2xl border border-blue-900/20 px-3 py-2 mr-2">
                                <p className='font-extrabold text-blue-900 text-md'>5</p>
          <p className='text-gray-500 text-[11px] font-bold uppercase'>Branches</p>
                            </div>

                             <div className=" bg-blue-100/50 rounded-2xl border border-blue-900/20 px-3 py-2">
                                <p className='font-extrabold text-blue-900 text-md'>20</p>
          <p className='text-gray-500 text-[11px] font-bold uppercase'>Diplomas Available</p>
                            </div>

                        </div>
                    </div>    
                    {/* <div className="parent  space-y-3">

                        <div className="child-1 flex items-center gap-4">
                            <div className="flex  items-center w-1/2 gap-4 border border-white/40 rounded-2xl px-4 py-3 bg-blue-200/25 hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                                <span className='w-9 h-9 rounded-lg bg-green-200/35 flex items-center justify-center '>
                                    <FaMessage className=' size-4   text-green-300'/>
                                </span>
                                 <p>Real-time Chat <br />
                                    Instant messaging</p>
                            </div>    
                            <div className="w-1/2 flex items-center gap-4 border border-white/40 rounded-2xl px-4 py-3 bg-blue-200/25 hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                               <span className="w-9 h-9 rounded-lg bg-blue-200/40 flex items-center justify-center ">
                                 <MdInsertPhoto className=' size-5  text-gray-300'/>
                               </span>
                                <p>Share Media <br/>
                                    Photos & videos</p>    
                            </div>    
                        </div>

                        <div className="child-2  flex items-center gap-4">
                            <div className="w-1/2 flex items-center  gap-4 border border-white/40 rounded-2xl px-4 py-3 bg-blue-200/25 hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                                <span className="w-9 h-9 rounded-lg bg-purple-400/60 flex items-center justify-center ">
                                 <IoIosNotifications className=' size-5 text-purple-200'/>
                               </span>
                                <p>Smart Alerts <br/>
                                    Stay updated</p> 
                            </div>

                            <div className="w-1/2 flex items-center  gap-4 border border-white/40 rounded-2xl px-4 py-3 bg-blue-200/25 hover:scale-105 transition-transform duration-200 backdrop-blur-sm">
                                 <span className="w-9 h-9 rounded-lg bg-green-200/35 flex items-center justify-center ">
                                 <FaPeopleGroup className=' size-5  text-green-300'/>
                               </span>
                                <p>Communities<br/>
                                    Find your tribe</p>    
                            </div>
                        </div>   

                    </div> 

                    <div className="flex items-center gap-4 my-5">
                        <div className="child-1">
                            <div className="flex items-center gap-2 font-bold text-2xl">
                                <FaPeopleGroup/>
                                <h3>2M+</h3>    
                            </div>  

                            <p>Active Users</p>      

                        </div>

                        <div className="child-2">
                            <div className="flex items-center gap-2 font-bold text-2xl">
                                <FaHeart  className='size-4'/>
                                <h3>10M+</h3>    
                            </div>  

                            <p>Posts Shared</p>  
                        </div>

                        <div className="child-3">
                                <div className="flex items-center gap-2 font-bold text-2xl">
                                <FaMessage className='size-4'/>
                                <h3>50M+</h3>    
                            </div>  

                            <p>Messages Sent</p>  
                        </div>
                    </div>

                        
                    <div className="border border-white/40 rounded-2xl p-4  bg-white/20 backdrop-blur-sm hover:bg-white/25 transition-colors duration-200">
                        <div className="flex items-center gap-1 text-xl text-amber-300 mb-4">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <div className="italic text-lg mb-4">
                            "SocialHub has completely changed how I connect with friends and discover new communities. The experience is seamless!"
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={alexPhoto} className='w-10 h-10 rounded-full object-cover' alt="" />

                            <div className="">
                                <p className='italic'>Alex Johnson</p>
                                <p className="text-gray-300"> Product Designer</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            
    </div>

    </>
  )
}
