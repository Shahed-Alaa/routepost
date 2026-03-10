import { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../services/postServices";
import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostSkeletons from "../../components/Skeletons/PostSkeletons";
import NewsFeedLayout from "../../components/NewsFeedLayout/NewsFeedLayout";
import { toast } from "react-toastify";
import { useQuery } from '@tanstack/react-query';
import { data } from "react-router";

export default function Community() {
  const [allposts, setAllPosts] = useState([]);


//   async function fetchAllPosts() {
//     try {
//       setLoading(true);
//       const response = await getAllPosts();
//       console.log(response.data.data.posts);
//       setAllPosts(response.data.data.posts || []);
//     } finally {
//       setLoading(false);
//     }
//   }

// useEffect(() => {

//   fetchAllPosts();
// }, [])

const { data: posts, isLoading, isError, error } = useQuery(
    ["getPosts"],
    getAllPosts,
    {
        select: (data) => data.data.data.posts,
        onSuccess: (data) => {
            // عند إضافة أو تعديل البوست، قم بتحديث البيانات المحفوظة في الـ cache
            queryClient.setQueryData(["getPosts"], data);
        }
    }
);
        
    const [sendPhoto, setSendPhoto] = useState("")
  
    const [postContent, setPostContent] = useState("")
  
    const [Loading, setIsLoading] = useState(false)
  
  
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
              
              setAllPosts(prevPosts => [newPost, ...prevPosts]);
            
          } catch (error) {
              console.log(error);
              toast.error("Post Not Created")
          }finally{
              setIsLoading(false)
          }
      }

  return (
  <>
   <div className="container mx-auto">
            <NewsFeedLayout/>

        <div className="m-3 space-y-6">
        <CreatePost setSendPhoto={setSendPhoto} handleFetchingPost={handleFetchingPost}  isLoading={Loading} setPostContent={setPostContent} />

        {isLoading
            ? [...Array(3)].map((_, index) => <PostSkeletons key={index} />)
            :<>
              { posts && posts.map((post)=> <Post key={post.id} post={post}/>)}
            </>  
          }
        </div>
    

   </div>
  </>
  );
}