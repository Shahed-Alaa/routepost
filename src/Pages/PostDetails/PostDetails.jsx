import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import PostHeader from '../../components/PostCard/PostHeader';
import PostBody from '../../components/PostCard/PostBody';
import PostFooter from '../../components/PostCard/PostFooter';
import { getPostById } from '../../services/postServices';
import { FaLongArrowAltLeft } from "react-icons/fa";
import PostSkeletons from '../../components/Skeletons/PostSkeletons';

export default function PostDetails() {

  const [post , setPost] = useState("");
  const {id} = useParams();
   const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchPostDetails(postId) {
      const response = await getPostById(postId)
      setPost(response.data.data.post)
    }

    fetchPostDetails(id)
  }, [id])
  
  return (
    <>
      <div className="container mx-auto">
         <div className="space-y-4 m-3">

        <Link to="/" className='inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 bg-white py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50'>
        <FaLongArrowAltLeft/>
        Back
        </Link>

        {
            post ?

              <article className='overflow-visible rounded-xl border border-slate-200 bg-white shadow-sm'>
                  
                  <PostHeader user={post.user}  createdAt={post.createdAt} name={post.user?.name} username={post.user?.username} photo={post.user?.photo} body={post.body}/>
      
                  <PostBody image={post.image}  id={post.id} commentsCount={post.commentsCount} likesCount={post.likesCount} sharesCount={post.sharesCount}/>
      
                  <PostFooter name={post.user?.name} setComments={setComments} comments={comments} commentsCount={post.commentsCount} topComment={post.topComment} id={post.id}/>
                  
              </article>
        :
        <PostSkeletons/>
        }
            </div>
      </div>
    </>
  )
}
