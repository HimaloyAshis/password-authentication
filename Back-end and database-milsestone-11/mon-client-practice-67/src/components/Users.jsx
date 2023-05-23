import Swal from 'sweetalert2'
import {Link, useLoaderData} from 'react-router-dom'
import { useState } from 'react';

const Users = () => {

    const userData = useLoaderData()
    const [allData, setAllData] = useState(userData)

    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                const remaining = allData.filter(alls=>alls._id !== id)
                setAllData(remaining)
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    

    return (
        <div>
            <h3>ok</h3>
            <div>
                {
                    allData.map(all=> <p key={all._id}> {all.name} : {all.email}<Link to={`/updateUser/${all._id}`}>Update</Link> <button onClick={()=>handleDelete(all._id)}>Delete</button> </p> )
                }
            </div>
        </div>
    );
};

export default Users;