//Use this Function if Payload Has Only Text Data(no file field)
export async function createRecord(collection,payload){
    try{
        let response = await fetch (`${VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:"POST",
            headers :{
                "content-type" : "application/json"
            },
            body :JSON.stringify(payload)
        })
        response = await response.json()
        return response
    } catch(error){
        console.log(`Error While Creating Record in API Calling Service :${error}`)
        return[]
    }
}
//Use this Function if Payload Has form Data( Contains Atleast 1 file field)
export async function createMultipartRecord(collection,payload){
    try{
        let response = await fetch (`${VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:"POST",
            headers :{
            },
            body :payload
        })
        response = await response.json()
        return response
    } catch(error){
        console.log(`Error While Creating Record in API Calling Service :${error}`)
        return[]
    }
}

export async function getRecord(collection){
    try{
        let response = await fetch (`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:"GET",
            headers :{
                "content-type":"application/json"
            }
        })
        response = await response.json()
       
        return response
    } catch(error){
        console.log(`Error While Getting Record in API Calling Service :${error}`)
        return[]
    }
}

//Use this Function if Payload Has form Data( Contains Atleast 1 file field)
export async function updateMultipartRecord(collection,payload){
    try{
        let response = await fetch (`${VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`,{
            method:"PUT",
            headers :{
            },
            body :payload
        })
        response = await response.json()
        return response
    } catch(error){
        console.log(`Error While Updating Record in API Calling Service :${error}`)
        return[]
    }
}
export async function deleteRecord(collection,payload){
    try{
        let response = await fetch (`${VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
            method:"DELETE",
            headers :{
                "content-type":"application/json"
            }
        })
        response = await response.json()
        return response
    } catch(error){
        console.log(`Error While Delete Record in API Calling Service :${error}`)
        return[]
    }
}