import axios from "axios"
import { useEffect, useState } from "react"

const UseCustomNewData = () => {
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios("../NewData.json")
        .then(data => setDatas(data.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))
    },[])
    return {datas,loading,error}
}

export default UseCustomNewData;