import { useParams ,useNavigate} from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"

const Updates = ()=>
{

    const {id} = useParams()
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
    .then(result=>{
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
        console.log(result)
    })
        .catch(error => console.log(error))
    },[])


    const Update=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/"+id,{
            name,
            age,
            email
        })
        .then((result)=>
        {
            console.log(result)
            navigate('/')
        })
        .catch((error)=>console.log(error))

    }
    return (
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
       <div className="w-50 bg-white rounded p-3 ">
       
       <form onSubmit={Update}>
        <h2>Update User</h2>
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" value={name} 
             onChange={(e)=>{setName(e.target.value)}}
             />
        </div>

        <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter Email" className="form-control" value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>

        <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder="Enter Age" className="form-control" value={age}
            onChange={(e)=>{setAge(e.target.value)}}
            />
        </div>

            <button className="btn btn-success">Update</button>
       </form>
       </div>
       </div>
        </>
    )
}

export default Updates