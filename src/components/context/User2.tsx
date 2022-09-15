import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User2 = () => {
const userContext = useContext(UserContext)

const handleLogin= () => {
if(userContext){
    userContext.setUser({
        name:'usecontext future value',
        email:'usecontextfuturevalue@mail.com'
    })
}
}

const handleLogout= () => {
    if(userContext){
        userContext.setUser(null)
    }
}

    return(
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>context APi example name:{userContext?.user?.name} </div>
            <div>context APi example email:{userContext?.user?.email} </div>
        </div>
    )
}