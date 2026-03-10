import axios from "axios";

// const baseURL = import.meta.env.VITE_BASE_URL;

export async function getAllPosts() {

    const token = localStorage.getItem("userToken")

    let data = await axios.get(`https://linked-posts.routemisr.com/posts`  , {
        headers:{
            "Content-Type" :"application/json",
            "Authorization" :  `Bearer ${token}`
        }
    })

    return data;
    

}

export async function createPost(formData) {

    const token = localStorage.getItem("userToken")
// if (token) {
//   console.error('No token found');
//   return;
// }
    let data = await axios.post(`https://linked-posts.routemisr.com/posts`  , formData ,  {
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })

    return data;

}


export async function getPostById(id) {

    const token = localStorage.getItem("userToken")

    let data = await axios.get(`https://linked-posts.routemisr.com/posts/${id}`  , {
        headers:{
            "Content-Type" :"application/json",
            "Authorization":`Bearer ${token}`
        }
    })

    return data;
    
}