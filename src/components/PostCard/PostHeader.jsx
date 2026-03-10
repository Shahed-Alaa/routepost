import React, { useContext , useEffect, useState } from 'react'
import { FaEllipsis } from 'react-icons/fa6'
import { HiOutlineLockClosed } from 'react-icons/hi2'
import { IoEarth } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { Link } from 'react-router'
import { getAvatar, getCurrentTime } from '../../lib/HelperFunction/Function'
import { ProfileContext } from '../../context/ProfileContext'
import { CiBookmark } from 'react-icons/ci'
import { GoTrash } from "react-icons/go";
import { TiPencil } from "react-icons/ti";
import UpdatePost from '../UpdatePost/UpdatePost'
import { Button } from '@heroui/react'

export default function PostHeader({createdAt , body , user ,name,photo, onOpen , username ,post}) {
    let {profileData} = useContext(ProfileContext);
    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(false)

// console.log(user._id);

    // const {isOpen , onOpen , onOpenChange} = useDisclosure({})

    // console.log(profileData.id);
    //  console.log(user);
     
       // تغيير العرض عند الضغط على "Edit post"
    const handleEditClick = () => {
        console.log("opprrm");
        
        setOpen(!open);
    };

  return (
    <>
    <div className="p-4">
        <div className="flex items-center gap-3">
            <Link to="#" className="shrink-0">
                <img src={getAvatar(photo || profileData?.photo)} alt={name || profileData?.name} className='h-11 w-11 rounded-full object-cover' />
            </Link>
            <div className="min-w-0 flex-1">
                <Link to="#" className="truncate text-sm font-bold text-foreground hover:underline">{name || profileData?.name || 'Unknown'}</Link>
                <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">@{username || profileData?.username}

                    <button type="button" className='rounded px-0.5 py-0.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 hover:underline'>
                        {getCurrentTime(createdAt)}
                    </button>
                    <span className='mx-1'>.</span>
                    <div className="relative inline-flex items-center">
                        <button type="button" className='inline-flex items-center gap-1 rounded-md px-1 py-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60'>
                            <div className="inline-flex items-center gap-1 py-0.5 text-xs text-muted-foreground">
                                <IoEarth/>
                                <select className='bg-transparent outline-non'>
                                        <option value="public">
                                            <span className="flex items-center gap-1">
                                                <IoEarth/>
                                                Public
                                            </span>
                                            </option>
                                        <option value="following">
                                            <span className="flex items-center gap-1">
                                                <LuUsers/>
                                                Followers
                                            </span>
                                            
                                            </option>
                                        <option value="only-me">
                                            <span className="flex items-center gap-1">
                                                <HiOutlineLockClosed/>
                                                Only me
                                            </span>
                                        </option>
                                </select>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative">
            <button 
                type="button"
                onClick={() => setToggle((prev) => !prev)}
                className="rounded-full cursor-pointer p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                >
            <FaEllipsis/>
            </button>

                   
                  {toggle && profileData?.id === post?.user && ( 
                    <div  className=" absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                          <button className='flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50'>
                              <CiBookmark/>
                              Save post
                          </button>
                          <button onClick={handleEditClick}  className='flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50'>
                              <TiPencil/>
                              Edit post
                          </button>
                          <Button onPress={onOpen} className='flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50'>
                              <GoTrash/>
                              Delete post
                              
                          </Button>

                  </div>
                  )}
              
                
              
            </div>
        </div>
               {open &&  <UpdatePost  post={post}/>}
        <div className="mt-3">
            <p className='whitespace-pre-wrap text-sm leading-relaxed text-foreground'>
                {body}
            </p>
        </div>

    </div>
    </>
  )
}
