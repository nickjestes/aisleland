const URL_PREFIX= "https://aisleland-backend.herokuapp.com"

const API = {
    multiStoreAPI:(store,zipCode)=>{
        return fetch(`u${URL_PREFIX}/api/stores/${store}/${zipCode}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    checkToken:token=>{
        return fetch(`${URL_PREFIX}/api/users/check-token`,{
            headers:{
              Authorization:`Bearer ${token}`
            }
         })
    },
    login: (email,password)=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
        method:"POST",
        body:JSON.stringify({
          email,
          password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    },
    signup: (email,password)=>{
        return fetch(`${URL_PREFIX}/users`,{
        method:"POST",
        body:JSON.stringify({
          email,
          password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    },
    getUserById:userId=>{
      return fetch(`${URL_PREFIX}/users/${userId}`)
    },
  
}


export default API