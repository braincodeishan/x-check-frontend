import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'

const UpdateMobilePart2 = () => {
    const [data,setData]=useState({});
    const phoneId=useParams('id');
    useEffect(() => {
      getData()
    }, [])

    const getData=async()=>{
        try{
            const result=await axios.get(process.env.REACT_APP_DOMAIN_NAME+'/admin/updateMobilePart2')
            if(result.status===200){
                
            }else{
    
            }
        }catch(err){
            
        }
        
    }
    
  return (
    <>
    <div>shdjhsjdhkjdh</div>
    </>
  )
}

export default UpdateMobilePart2