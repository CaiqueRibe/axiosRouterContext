import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { PrivateRoute } from "./components/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route
                  path="/home"
                  element={
                     <PrivateRoute authenticated>
                        <Home />
                     </PrivateRoute>
                  }
               />
            </Routes>
         </BrowserRouter>
      </AuthProvider>
   )
}

export default App
