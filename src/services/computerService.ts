import axios from 'axios'
// ------------------------------COMPUTERS SERVICE------------------------------

// GET COMPUTERS

export const getAllComputers = async () => {
   let response = await axios.get("http://localhost:1337/api/computers")

   return response.data
}

export const getComputerById = async (id:string) => {
    let response = await axios.get("http://localhost:1337/api/computers/" + id)

    return response.data
 }


// POST COMPUTER

export const postComputer = async (name:string, description:string, manufacturer:string, price:number, processor:string) => {

 let response = await axios.post("http://localhost:1337/api/computers", {
        "data": {
            "name": name,
            "description": description,
            "manufacturer": manufacturer,
            "price": price,
            "processor": processor
        }
    })

    return response.data

}

// UPDATE COMPUTER

export const updateComputer = async (name:string, description:string, manufacturer:string, price:number, processor:string, id:string) => {

    let response = await axios.put("http://localhost:1337/api/computers/" + id, {
           "data": {
               "name": name,
               "description": description,
               "manufacturer": manufacturer,
               "price": price,
               "processor": processor
           }
       })
   
       return response.data
   
   }
