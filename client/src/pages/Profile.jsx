import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
    
    useEffect(()=>{
      axios.get("http://localhost:3000/api/auth/profile")
        .then(res =>console.log(res.data))
        .catch(error => console.error(error))
    },[])

    return(
        <>
            <h2>PROFILE</h2>
        </>
    )
}
export default Profile;