import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function PrivateRoute({ children }) {
   const { user } = useContext(AuthContext)
   // console.log(user)
   const isAuthenticated = user?.authenticated

   return isAuthenticated ? (
      <>
         {console.log("User Autenticated")}
         {children}
      </>
   ) : (
      <>
         {console.log("User not Autenticated")}
         <Navigate to="/" />
      </>
   )
}

export { PrivateRoute }
