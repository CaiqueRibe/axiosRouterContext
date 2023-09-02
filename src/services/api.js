import axios from "axios"

const URL = axios.create({
   baseURL: "https://viacep.com.br/ws",
   headers: { "content-type": "application/json" },
})

export const getZipCode = async (zipCode = "", type = "json") => {
   try {
      const response = await URL.get(`/${zipCode}/${type}`)
      return response
   } catch (error) {
      return error
   }
}
