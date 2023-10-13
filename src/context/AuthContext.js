import { createContext, useState } from "react"

const AuthContext = createContext()

function AuthProvider({ children }) {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("userLocal")))

   const login = (username, password) => {
      const isAuthenticated = username === "Caique123" && password === "12345"
      const teste = {
         user: username,
         authenticated: isAuthenticated,
      }
      setUser(teste)
      localStorage.setItem("userLocal", JSON.stringify(teste))

      if (!isAuthenticated) {
         window.alert("Usuário sem permissão")
      }
   }

   const logout = () => {
      setUser({})
      localStorage.setItem("userLocal", JSON.stringify({}))
   }

   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
