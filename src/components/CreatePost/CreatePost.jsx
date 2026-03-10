import { Button, Input, Textarea } from '@heroui/react'
import { useContext, useRef, useState } from 'react'
import { FiSmile } from 'react-icons/fi'
import { IoMdCloseCircle } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { LuImage, LuSend } from 'react-icons/lu'
import person3 from "../../assets/imges/person3.png";
import { ProfileContext } from '../../context/ProfileContext'
import UpdatePost from '../UpdatePost/UpdatePost'



export default function CreatePost({handleFetchingPost , isLoading ,setPostContent , setSendPhoto}) {
  
  // console.log(handleFetchingPost);
  
  const [displayedPhoto, setDisplayedPhoto] = useState("")
    let {profileData} = useContext(ProfileContext)

   const inputPhoto = useRef();
  
    function handlUploadImage() {
      inputPhoto.current.click()
    }
  
    function removeHandleImage() {
      console.log("remove");
      setSendPhoto("")
      setDisplayedPhoto("") 
    }
  
    function handleSelectedImage() {
      setSendPhoto(inputPhoto.current.files[0])
      setDisplayedPhoto(URL.createObjectURL(inputPhoto.current.files[0]))
    }

    return (
    <>
    <div >
          <div className="create-post rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                
                  <div className="mb-3 flex items-center gap-3">
                    <img src={profileData?.photo} alt={profileData?.name} className='h-11 w-11 rounded-full object-cover'/>
                    <div className="flex-1">
                      <p className="text-base font-extrabold text-slate-900">{profileData?.name}</p>
                      <div className="mt-1 inline-flex items-center p-2 gap-2 rounded-full bg-slate-100 py-0.5 text-sm font-semibold text-slate-700">
                        <IoEarth/>
                        <select className='bg-transparent outline-non'>
                                <option value="public">Public</option>
                                <option value="following">Followers</option>
                                <option value="only-me">Only me</option>
                        </select>
                      </div>
                    </div>
                  </div>

                    
         

                  <div className="relative">
                    <Textarea
                    onChange={(e)=>setPostContent(e.target.value)}
                    minRows={displayedPhoto ? "0" : "50"} 
                    placeholder={`What's on your mind , ${profileData?.name} ?`}
                    className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[17px] leading-relaxed text-slate-800 outline-none transition focus:border-[#1877f2] focus:bg-white'
                    >
                    </Textarea>
                    {displayedPhoto && 
                    
                    <div className="relative">
                      <img src={displayedPhoto} className='h-62.5 rounded-xl w-full object-cover'
                      />  <IoMdCloseCircle onClick={()=>removeHandleImage()}  className='absolute text-xl text-white cursor-pointer top-2.5 right-2.5'/>
                    </div>
                    }

                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                      <div  className="relative flex items-center gap-2">
                        <div onClick={()=>handlUploadImage()} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 cursor-pointer">
                          <LuImage className="text-green-700  text-xl"/>
                          <p className=" hover:text-green-700 transition-all">Photo/video</p>
                          <Input onInput={()=>handleSelectedImage()} ref={inputPhoto} type="file" className="hidden"/>
                        </div>

                          <button type='button' className='flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100'>
                                  <FiSmile className='text-amber-500 text-xl'/>
                            <span className='hidden sm:inline'>Feeling/activity</span>
                          </button>
                  
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button onPress={()=>handleFetchingPost()} isLoading={isLoading} className='flex items-center gap-2 rounded-lg bg-[#1877f2] px-5 py-2 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#166fe5] disabled:opacity-60'>
                          Post
                          <LuSend/>
                        </Button>
                      </div>
                    </div>
          </div>
        </div>
    </>
  )
}
