import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { getZipCode } from "../services/api"

export function Home() {
   const { logout } = useContext(AuthContext)
   const [zipCode, setZipCode] = useState("")
   const [result, setResult] = useState({})

   useEffect(() => {}, [zipCode])

   const getResulZipCode = async () => {
      if (zipCode === "") {
         return
      }

      const resultResponse = await getZipCode(zipCode)
      if (resultResponse.status === 200) {
         setResult(resultResponse.data)
      }
   }

   const handleBuscar = () => {
      if (zipCode === "") {
         setResult({})
         alert("Cant filter an empty String !")
      }

      if (zipCode.length === 8) {
         getResulZipCode()
      }
   }

   return (
      <div>
         <h2>Seja Bem Vindo! {localStorage.getItem("username")} </h2>
         <input type="text" placeholder="Cep" onChange={(e) => setZipCode(e.target.value)} />
         <br />
         <button onClick={handleBuscar}>Buscar</button> <button onClick={logout}>Sair</button>
         <ul className="teste123">
            {Object.keys(result).map((item) => (
               <li>
                  {item} - {result[item]}
               </li>
            ))}
         </ul>
      </div>
   )
}
