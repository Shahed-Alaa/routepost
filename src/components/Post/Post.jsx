import PostHeader from '../PostCard/PostHeader';
import PostBody from '../PostCard/PostBody';
import PostFooter from '../PostCard/PostFooter';
import { useState } from 'react';


export default function Post({post}) {
// console.log(post);

    const [comments, setComments] = useState([])
     
  return (
    <>
      <div className="space-y-4">
        <article className='overflow-visible rounded-xl border border-slate-200 bg-white shadow-sm'>
            
            <PostHeader post={post} user={post.user}  createdAt={post.createdAt} name={post.user?.name} username={post.user?.username} photo={post.user?.photo} body={post.body} id={post._id}/>

            <PostBody  image={post.image}  id={post.id} commentsCount={post.commentsCount} likesCount={post.likesCount} sharesCount={post.sharesCount}/>

            <PostFooter name={post.user?.name} setComments={setComments} comments={comments} commentsCount={post.commentsCount} topComment={post.topComment} id={post.id}/>
            
        </article>
      </div>
    </>
  )
}
