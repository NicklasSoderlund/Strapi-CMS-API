import axios from "axios"

// ------------------------------TELEVISION SERVICE------------------------------

// GET TELEVISIONS

export const getAllTvs = async () => {
    let response = await axios.get("http://localhost:1337/api/televisions")
 
    return response.data
 }
 
 export const getTvById = async (id:string) => {
     let response = await axios.get("http://localhost:1337/api/televisions/" + id)
 
     return response.data
  }
 
 
 // POST TELEVISION
 
 export const postTv = async (name:string, description:string, manufacturer:string, price:number, screen_size:number) => {
 
  let response = await axios.post("http://localhost:1337/api/televisions", {
         "data": {
             "name": name,
             "description": description,
             "manufacturer": manufacturer,
             "price": price,
             "screen_size": screen_size
         }
     })
 
     return response.data
 
 }
 
 // UPDATE TELEVISION
 
 export const updateTv = async (name:string, description:string, manufacturer:string, price:number, screen_size:number, id:string) => {
 
     let response = await axios.put("http://localhost:1337/api/televisions/" + id, {
            "data": {
                "name": name,
                "description": description,
                "manufacturer": manufacturer,
                "price": price,
                "screen_size": screen_size
            }
        })
    
        return response.data
    
    }
 