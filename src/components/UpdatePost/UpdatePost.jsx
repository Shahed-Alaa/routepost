import { Button, Textarea } from '@heroui/react';
// import { useMutation } from '@tanstack/react-query';
import React, {  useRef } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router';
import { useMutation } from '@tanstack/react-query';

export default function UpdatePost({post}) {
console.log(post);

  // const baseURL = import.meta.env.VITE_BASE_URL;

  const contentInput  = useRef(null);

// handle update post
 function handleUpdatePost(formData) {
    return  axios.put(`https://route-posts.routemisr.com/posts/${post.id}`, formData, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`
          }
      })
    }

const {mutate ,data} =useMutation({
  mutationFn :handleUpdatePost

})

console.log("data" , data);


function handleUpdateRequest() {
      const formData = new FormData()
      if(contentInput.current.value)   {
        formData.append("body" , contentInput.current.value)
      } 

      mutate(formData ,

        {
        onSuccess: (data) => {
          
            // عند نجاح التعديل، قم بتحديث قائمة البوستات في الصفحة الأم (Feed أو Community)
            // في هذا المثال سأستخدم setPosts لتحديث البيانات مباشرة في الواجهة
            setPosts((prevPosts) => prevPosts.map(post => 
                post.id === data.id ? { ...post, body: data.body } : post
            ));
        },
        onError: (error) => {
            console.log(error);
        }
    }
      )
      
}

  return (
    <>
       <div className="mt-3">
          <Textarea
           ref={contentInput}
            defaultValue={post.body}  
            minRows= {10}
            className='w-full rounded-2xl border border-slate-200  text-[17px] leading-relaxed text-slate-800 outline-none transition focus:border-[#1877f2] focus:bg-white'
            >
              
         </Textarea>

         <div className="mt-2 flex items-center justify-end gap-2">
            <Button className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100">
                Cancel
            </Button>

            <Button onClick={handleUpdateRequest} type='submit' className="rounded-full bg-[#1877f2] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#166fe5] disabled:opacity-60">
                Save
            </Button>  
         </div>
       </div>
    </>
  )
}
