import { useState } from 'react'
import Post from '../../components/Post/Post';
import CreatePost from '../../components/CreatePost/CreatePost';
import { createPost } from '../../services/postServices';
import { toast } from 'react-toastify';
import NewsFeedLayout from '../../components/NewsFeedLayout/NewsFeedLayout';



export default function NewsFeed() {

  const [sendPhoto, setSendPhoto] = useState("")

  const [posts, setPosts] = useState([])

  const [postContent, setPostContent] = useState("")

  const [isLoading, setIsLoading] = useState(false)


    async function handleFetchingPost() {
        try {
            setIsLoading(true)
            const formData = new FormData();
           if(postContent){
             formData.append("body" , postContent)
           }
             if (sendPhoto) {
              formData.append("image", sendPhoto)
            }
            const response = await createPost(formData);
            console.log(response);
            
            console.log(response.data.data.post);
            const newPost = response.data.data.post;
            
            toast.success(response.data.message)
            
            setPosts(prevPosts => [newPost, ...prevPosts]);
          
        } catch (error) {
            console.log(error);
            toast.error("Post Not Created")
        }finally{
            setIsLoading(false)
        }
    }
    

  return (
    <>
        <NewsFeedLayout/>
       <div className="container mx-auto">
        <div className='space-y-4  m-3'>
            <CreatePost setSendPhoto={setSendPhoto} handleFetchingPost={handleFetchingPost}  isLoading={isLoading} setPostContent={setPostContent}/>

            {posts.length === 0 ? <div className="shadow-sm bg-white border border-slate-200 text-slate-500 rounded-2xl p-14 w-full flex  items-center justify-center ">
                No posts yet. Be the first one to publish.
              </div>  
              :    <div>
                    {Array.isArray(posts) &&
                      posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}       
                </div>}
          
        </div>
       </div>

    </>
  )
}
