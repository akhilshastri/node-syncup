import axios from 'axios';

const base_url = "https://reqres.in";

const upload=(file)=>{
    console.log("Upload file service",file);
    // return axios.post(`${base_url}/upload`,file)
    // .then(response=>{
    //     console.log("File upload scessfully");
    // })
}

export default {
    upload
}