  
import axios from "axios";

// const base_url = "localhost:3001";
const base_url = "https://reqres.in";

const Login = (username,password)=>{
    console.log("Service login...",username,password);
    return axios.post(`${base_url}/auth/login`,{username,password})
    .then(response=>{
        console.log("TOKEN...",response.data.token);
        localStorage.setItem('login-user',response.data.token);  
    })
}

export default { Login };