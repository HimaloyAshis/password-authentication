import React from 'react';
import {useLoaderData} from "react-router-dom"

const UpdateUser = () => {
    const update = useLoaderData()

    const handleUpdate = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const name = form.name.value

        const user = {email, name}
        fetch(`http://localhost:5000/users/${update._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div>
            <h2>Here is all update data</h2>
            <p>data name : {update.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={update?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={update?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>

        </div>
    );
};

export default UpdateUser;