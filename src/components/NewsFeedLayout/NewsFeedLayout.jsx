import { useState } from 'react'
import { FaRegNewspaper } from "react-icons/fa6";
import { IoSparklesOutline ,IoEarth } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";

import person1 from "../../assets/imges/person1.png";
import person2 from "../../assets/imges/person2.webp";
import person3 from "../../assets/imges/person3.png";
import person4 from "../../assets/imges/person3.png";
import person5 from "../../assets/imges/alex.jpeg";

import { Button, Input } from '@heroui/react';
import { useLocation, useNavigate } from 'react-router';

export default function NewsFeedLayout() {
   const navigate = useNavigate();
  const { pathname } = useLocation();

  const [button, setButton] = useState("hide")

  function toggleButton() {
    setButton((prev) => (prev === "show" ? "hide" : "show"));
  }

  return (
    <>
      <div  className=" container mx-auto font-cairo">
              <div className= "m-3 bg-white shadow-sm rounded-2xl p-2  border border-gray-200">
                 <div className="grid grid-cols-2 gap-2">
                        <Button
                            onClick={() => navigate("/")}
                            className={`
                            flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition
                            ${pathname === "/" ? "!bg-[#e7f3ff] !text-[#1877f2]" : "!bg-slate-50 !text-slate-700 hover:!bg-slate-100"}
                            `}
                        >
                            <FaRegNewspaper />
                            Feed
                        </Button>

                        <Button
                            onClick={() => navigate("/my-post")}
                            className={`
                            flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition
                            ${pathname === "/my-post" ? "!bg-[#e7f3ff] !text-[#1877f2]" : "!bg-slate-50 !text-slate-700 hover:!bg-slate-100"}
                            `}
                        >
                            <IoSparklesOutline />
                            My Posts
                        </Button>

                        <Button
                            onClick={() => navigate("/community")}
                            className={`
                            flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition
                            ${pathname === "/community" ? "!bg-[#e7f3ff] !text-[#1877f2]" : "!bg-slate-50 !text-slate-700 hover:!bg-slate-100"}
                            `}
                        >
                            <IoEarth />
                            Community
                        </Button>

                        <Button
                            onClick={() => navigate("/saved")}
                            className={`
                            flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition
                            ${pathname === "/saved" ? "!bg-[#e7f3ff] !text-[#1877f2]" : "!bg-slate-50 !text-slate-700 hover:!bg-slate-100"}
                            `}
                        >
                            <CiBookmark />
                            Saved
                        </Button>
                 </div>
              </div>
      
              <div className="m-3 space-y-3">
                 
                <button 
                onClick={()=>toggleButton()}
                type='button' className='inline-flex w-full text-left items-center justify-between  bg-white shadow-sm rounded-xl p-4 border border-gray-200 cursor-pointer'>
                      <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                        <LuUsers className='text-[#1877f2]'/>
                        Suggested Friends
                      </span>
                      <span className="inline-flex items-center gap-2 ">
                        
                        <span className='text-xs font-bold rounded-full bg-slate-100 px-2 py-0.5 text-slate-600'>5</span>
                        {button === "show" ?
                        <span className='text-xs font-bold text-[#1877f2]'>Hide</span>
                          :
                        <span className='text-xs font-bold text-[#1877f2]'>Show</span>
                        }
                      </span>
                </button>
      
                  {button === "show"?
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                              <LuUsers className='text-[#1877f2]'/>
                              Suggested Friends
                            </span>
                            <span className="inline-flex items-center gap-2 ">
                              <span className='text-xs font-bold rounded-full bg-slate-100 px-2 py-0.5 text-slate-600'>5</span>
                            </span>
                        </div>
      
                        <div className="mb-3">
                          <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                      <Input
                                      placeholder="Search friends..."
                                      className='border border-gray-300 rounded-xl'
                                      startContent={
                                          <IoIosSearch className="text-xl text-default-400 pointer-events-none shrink-0" />
                                      }
                                      type="email"
                                      />
                              </div>
                          </div>
                      
                            <div className="space-y-3">
                              {[
                                { img: person1, name: "Ahmed Bahnasy", user: "@bahnasy20222" },
                                { img: person2, name: "Ahmed Dbd Al-Muti", user: "@ahmedmutti" },
                                { img: person3, name: "Ahmed Bahnasy", user: "@bahnasy20222w2" },
                                { img: person4, name: "Nurhan", user: "@nourhan" },
                                { img: person5, name: "Ahmed Abd", user: "@ahmedabd22" },
                              ].map((p, idx) => (
                                <div key={idx} className="rounded-xl border border-slate-200 p-2.5">
                                  <div className="flex items-center justify-between gap-2">
                                    <button
                                      type="button"
                                      className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left trnsition hover:bg-slate-50"
                                    >
                                      <img src={p.img} alt="" className="h-10 w-10 rounded-full object-cover" />
                                      <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-slate-900 hover:underline">
                                          {p.name}
                                        </p>
                                        <p className="truncate text-sm text-slate-500">{p.user}</p>
                                      </div>
                                    </button>
                
                                    <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                      <FiUserPlus />
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                        
      
                        <button type='button' className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                              View more
                        </button>
                      </div>
                  :""}
              </div>
       </div>
      
    </>
  )
}
