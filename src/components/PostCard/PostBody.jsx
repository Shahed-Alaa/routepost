import { BiLike } from 'react-icons/bi'
import { IoRepeat } from 'react-icons/io5'
import { Link } from 'react-router'


export default function PostBody({image, id ,commentsCount , likesCount ,sharesCount}) {

  return (
    <>
     <div className="max-h-155 overflow-hidden border-y border-slate-200">
                <button type='button' className='group relative block w-full cursor-zoom-in'>
                    <img className='w-full object-cover' src={image}/>
                    <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
                </button>
            </div>    

            <div className="px-4 pb-2 pt-3 text-sm text-slate-400">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
                             <BiLike/>
                        </span>
                        <button type="button" className='font-semibold transition cursor-default'>
                    {likesCount} Likes
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                        <span className="inline-flex items-center gap-1">
                            <IoRepeat/>
                            {sharesCount} shares
                        </span>

                        <span>{commentsCount} comments</span>
                        <Link to={`/posts/${id}`}
                        className='rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]'>
                            
                            View details
                        </Link>
                    </div>

                </div>
            </div>
    </>
  )
}
