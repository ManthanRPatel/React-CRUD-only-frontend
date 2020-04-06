import React,{useState} from 'react'

function AddUserForm(props) {

    const initialFormState  = { id:null , name: '', username: ''  }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (e) =>{
        const { name, value } = e.target
        setUser({ ...user, [name]: value });
        // setUser({      [ e.target.name ]: e.target.value    })
        // console.log(user);
        // console.log( e.target.name , e.target.value )
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
    }

    return (
        <form onSubmit={submitHandler} >
           <input placeholder="Name" name="name" type="text" value={user.name} onChange={handleInputChange} /><br />
           <input placeholder="UserName" name="username" type="text" value={user.username} onChange={handleInputChange} /><br />
           <button>Add User</button>
        </form>
    )
}

export default AddUserForm
