import Cookies from "js-cookie"
import axios from "axios"

const useRefresh = async (setLoading , setUser) => {

    const email = Cookies.get("email")
    const token = Cookies.get("token")


    if(!token || !email){
        await setUser({email : "",roles : [] , token : ""})

        setLoading(false)

    }
    else{
        
        //has to be fixed *********************************
        axios({
            method: "Post",
            url: "/api/auth/refresh",
            baseURL : 'http://localhost:5000',
            headers : { 'Content-Type': 'application/json'},
            withCredentials: true,
            data : JSON.stringify({ token : token})
        }).then( async (response) => {

            const roles = response.data.roles
            const cart = response.data.cart

            console.log(roles)

            await setUser({email : email , roles : roles ,token : token})
            setLoading(false)


        }).catch( async () => {
            
            await setUser({email : "",roles : [0] , token : ""})
            setLoading(false)


        })

    }

    
}

export default useRefresh