import { useContext, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import {  FaRegComment, FaSpinner } from 'react-icons/fa6'
import { LuShare2 } from 'react-icons/lu'
import { getAvatar} from '../../lib/HelperFunction/Function'
import { ProfileContext } from '../../context/ProfileContext'
import { createComments, getAllComments } from '../../services/commentServices'
import { toast } from 'react-toastify'

import CommentHeader from '../Comments/CommentHeader'
import CommentInput from '../Comments/CommentInput'
import CommentItem from '../Comments/CommentItem'
import { useMutation } from '@tanstack/react-query'


export default function PostFooter({topComment , comments ,setComments , id ,name ,commentsCount}) {

    let{profileData} = useContext(ProfileContext)

    const [showAllComments, setShowAllComments] = useState(false);
    const [showMoreComments, setShowMoreComments] = useState(2)
    const [isLoading, setIsLoading] = useState(false)
    // const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [commentBody, setCommentBody] = useState("")
    const [commentsCounter, setCommentsCounter] = useState(commentsCount)

    async function fetchAllComments(postId) {
        try{
            setIsLoading(true)
            const response = await getAllComments(postId);
            // console.log(response.data.data.comments)
            setComments(response.data.data.comments)
            setShowAllComments(true)
        }catch(error){
            console.log(error);
                    
        }finally{
            setIsLoading(false)
        }
    }


    const {mutate:handleAppComment , isPending:isLoadingComments} =   useMutation({
        mutationFn: (postId)=> createComments(postId , {"content" : commentBody}),
        onSuccess:(response)=>{
            setCommentBody("")
            setComments(prev => [response.data.data.comment, ...(prev || [])])            
            setShowMoreComments(prev => prev + 1)
            setCommentsCounter(prev => prev + 1)
            fetchAllComments(id)
            toast.success(response.data.message)
        },
        onError:(error)=>{
            fetchAllComments(id),
            toast.error(error.response.data.message || error.message)
        }
    })

  return (
    <>
      
    <div className="mx-4 border-t border-slate-200"></div>

    <div className="grid grid-cols-3 gap-1 p-1">
        <button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
            <BiLike/>
            <span>Like</span>
        </button>

        
        <button onClick={()=>fetchAllComments(id)} className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
            {isLoading ?     
        <>
        <FaSpinner className='animate-spin'/>
            <span>Comment</span>
        </> 
        
        :
        <>
        <FaRegComment/>
            <span>Comment</span>
        </> 
    }
        </button>

        <button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
            <LuShare2/>
            <span>Share</span>
        </button>

    </div>

      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 space-y-3">
              {!showAllComments && topComment && ( <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">Top Comment</p>
                    <div className="flex items-start gap-2">
                        <img src={getAvatar(topComment.commentCreator?.photo)}  alt="" className='h-8 w-8 rounded-full object-cover'/>
                        <div className="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
                            <p className='truncate text-xs font-bold text-slate-900'>{topComment.commentCreator?.name ?? 'Unknown'}</p>
                            <p className="mt-0.5 whitespace-pre-wrap text-sm text-slate-700">{topComment.content}</p>
                        </div>
                    </div>
                    <button
                     onClick={() => fetchAllComments(id)}
                    className='mt-2 text-xs cursor-pointer font-bold text-[#1877f2] hover:underline'>
                        View all comments</button>
                </div>
            )}  

    </div>


    {showAllComments && comments?.length > 0 && (
        <div className="border-t border-slate-200 bg-[#f7f8fa] px-4 py-4">

            <CommentHeader commentsCount={commentsCounter} />
            
            <div className="space-y-2">
              {comments.slice(0,showMoreComments).map((comment)=>(
                <CommentItem key={comment._id} comment={comment}/>
                ))}
            </div>

            <CommentInput
            profileData={profileData}
            name={name}
            commentBody={commentBody}
            setCommentBody={setCommentBody}
            handleAppComment={handleAppComment}
            id={id}
            isLoadingComments={isLoadingComments}
            />
        </div>
            
        )}

   
        { showAllComments && comments?.length === 0 && (
            <div  className="border-t border-slate-200 bg-[#f7f8fa] px-4 py-4">

                <CommentHeader commentsCount={commentsCounter} />

                <div className="space-y-2">
                    <div className="relative flex items-center justify-center py-5 gap-2 ">
                        <FaRegComment/>
                        No Comment yet
                    </div>
                </div>

                <CommentInput
                    profileData={profileData}
                    name={name}
                    commentBody={commentBody}
                    setCommentBody={setCommentBody}
                    handleAppComment={handleAppComment}
                    id={id}
                    isLoadingComments={isLoadingComments}
                    />
            </div>
        ) }


        {comments.length > showMoreComments && (

            <div className="flex justify-center mt-3">

                <button
                onClick={() => setShowMoreComments(prev => prev + 1)}
                className="text-sm font-bold text-[#1877f2] hover:underline">

                Show more comments

                </button>

            </div>

        )}
    </>

  )
}
