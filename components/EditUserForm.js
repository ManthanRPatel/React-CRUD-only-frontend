import React,{ useState , useEffect } from 'react'

function EditUserForm(props) {

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (e) =>{
        const { name , value } = e.target
        setUser({ ...user , [name]:value });
    }
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form onSubmit={e=>
            { e.preventDefault()
              props.updateUser(user.id , user )  }
        } >
            <input value={user.name} type="text" name="name" onChange={handleInputChange} placeholder="Name" />
            <input value={user.username} type="text" name="username" onChange={handleInputChange} placeholder="UserName" />
            <button type="submit">Update User</button>
            <button onClick={()=> props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm
