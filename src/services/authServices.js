import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export async function registerUser(body) {
    
    let data = await axios.post( `${baseURL}/users/signup`,body , {
        headers:{
            "Content-Type" : "application/json"
        }
    })

    return data ; 
}

export async function loginUser(body) {
    
    let data = await axios.post( `${baseURL}/users/signin`,body , {
        headers:{
            "Content-Type" : "application/json"
        }
    })

    return data ; 
}


export function changePassword(data){

 return axios.patch(`${baseURL}/users/change-password`,
  {
   password: data.password,
   newPassword: data.newPassword
  },
  {
   headers:{
    Authorization: `Bearer ${localStorage.getItem("userToken")}`
   }
  }
 )

}