import axios from "axios"
// ------------------------------MOBILES SERVICE------------------------------

// GET MOBILES

export const getAllMobiles = async () => {
    let response = await axios.get("http://localhost:1337/api/mobiles")
 
    return response.data
 }
 
 export const getMobileById = async (id:string) => {
     let response = await axios.get("http://localhost:1337/api/mobiles/" + id)
 
     return response.data
  }
 
 
 // POST MOBILES
 
 export const postMobile = async (name:string, description:string, manufacturer:string, price:number, screen_type:string) => {
 
  let response = await axios.post("http://localhost:1337/api/mobiles", {
         "data": {
             "name": name,
             "description": description,
             "manufacturer": manufacturer,
             "price": price,
             "screen_type": screen_type
         }
     })
 
     return response.data
 
 }
 
 // UPDATE MOBILES
 
 export const updateMobile = async (name:string, description:string, manufacturer:string, price:number, screen_type:string, id:string) => {
 
     let response = await axios.put("http://localhost:1337/api/mobiles/" + id, {
            "data": {
                "name": name,
                "description": description,
                "manufacturer": manufacturer,
                "price": price,
                "screen_type": screen_type
            }
        })
    
        return response.data
    
    }
 