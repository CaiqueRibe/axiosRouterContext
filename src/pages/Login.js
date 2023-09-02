import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export function Login() {
   const [username, setUsername] = useState(
      JSON.parse(localStorage.getItem("userLocal"))?.user
   )
   const [password, setPassword] = useState("")

   const { login, user } = useContext(AuthContext)

   const navigate = useNavigate()

   const handleLogin = () => {
      login(username, password)
      navigate("/home")
   }

   useEffect(() => {
      if (user?.autenticated) {
         navigate("/home")
      }
   }, [navigate, user])

   return (
      <div>
         <h2>Login</h2>
         <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={handleLogin}>Login</button>
      </div>
   )
}
