import Swal from 'sweetalert2'
import './App.css'

function App() {

  const handleUser = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const name = form.name.value
    const users = {email, name}

    console.log(users)

    fetch('http://localhost:5000/users',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(users)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
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
    <div className='app'>
      <h2>Simple CRUD</h2>
        <form onSubmit={handleUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="AddUser" />
        </form>
    </div>
  )
}

export default App
