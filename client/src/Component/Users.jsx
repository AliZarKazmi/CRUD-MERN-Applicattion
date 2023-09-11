import { useState } from "react"
import {Link} from 'react-router-dom'
const Users = ()=>
{
    const [user,setUser] = useState([
        {
            name: 'Ali Zar Kazmi',
            email: 'alizarkazmi55@gmail.com',
            age: 21
        }
    ])
    return (
        <>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
       <div className="w-50 bg-white rounded p-3 ">
        <Link to='/create' className="btn btn-success">Add</Link>
       <div className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((user)=>{
                        return <tr> 
                             <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to='/update' className="btn btn-success">Update</Link>
                            </td> 
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    }
                    
                    )
                }
            </tbody>

        </div>
       </div>
       
       
        
        </div>
        </>
    )
}

export default Users