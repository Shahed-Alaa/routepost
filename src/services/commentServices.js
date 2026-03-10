import axios from "axios";

// const baseURL = import.meta.env.VITE_BASE_URL;

export async function getAllComments(postId) {

    const token = localStorage.getItem("userToken")

    let data = await axios.get(`https://route-posts.routemisr.com/posts/${postId}/comments?page=1&limit=10`  , {
        headers:{
            "Content-Type" :"application/json",
            "Authorization" :  `Bearer ${token}`
        }
    })

    return data;
    
}


export async function createComments(postId , formData) {

    const token = localStorage.getItem("userToken")

    let data = await axios.post(`https://route-posts.routemisr.com/posts/${postId}/comments`  , formData , {
        headers:{
            "Authorization" :  `Bearer ${token}`,

        } 
    })

    return data;
    
}
