import axios from "axios"

// ------------------------------AUDIO SERVICE------------------------------

// GET AUDIO DEVICE

export const getAllAudioDevices = async () => {
    let response = await axios.get("http://localhost:1337/api/audio-devices")
 
    return response.data
 }
 
 export const getAudioDeviceById = async (id:string) => {
     let response = await axios.get("http://localhost:1337/api/audio-devices/" + id)
 
     return response.data
  }
 
 
 // POST AUDIO DEVICE
 
 export const postAudioDevice = async (name:string, description:string, manufacturer:string, price:number, effect:number) => {
 
  let response = await axios.post("http://localhost:1337/api/audio-devices", {
         "data": {
             "name": name,
             "description": description,
             "manufacturer": manufacturer,
             "price": price,
             "effect": effect
         }
     })
 
     return response.data
 
 }
 
 // UPDATE AUDIO DEVICE
 
 export const updateAudioDevice = async (name:string, description:string, manufacturer:string, price:number, effect:number, id:string) => {
 
     let response = await axios.put("http://localhost:1337/api/audio-devices/" + id, {
            "data": {
                "name": name,
                "description": description,
                "manufacturer": manufacturer,
                "price": price,
                "effect": effect
            }
        })
    
        return response.data
    
    }
 