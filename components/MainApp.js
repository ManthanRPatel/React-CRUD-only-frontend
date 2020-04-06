import React , { useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

function MainApp() {

    const usersData = [
        { id: 1, name: 'Manthan', username: 'Macmax' },
        { id: 2, name: 'Zeel', username: 'bhanvadiya' },
        { id: 3, name: 'Vipul', username: 'Goriya' },
      ]
    const initialFormState = { id:null , name: '' , username: '' }

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const AddUser = (user)=>{
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const DeleteUser = (id) =>{
        setUsers( users.filter(user => user.id !== id ) )
    }

    ///// switch that show that edit mode is on
    const EditRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id:user.id, name:user.name , username: user.username
        });
    }
    const updateUser = ( id , updatedUser ) => {
        setEditing( false )
        setUsers(
            users.map( user => (user.id === id ? updatedUser : user)  )
        )
    }


    return (
        <div>
            <h1>CRUD Application</h1>
				<div className="flex-row">
                    {editing ? (
                        <div>
                            <h2>Edit User</h2>
                            <EditUserForm
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                            />
                        </div>
                    ) : (
                    <div className="flex-large">
						<h2>Add user</h2>
                        <AddUserForm addUser={AddUser} />
					</div>
                    )
                    }
                    <br /><br /><br />
					<div className="flex-large">
						<h2>View users</h2>
                        <UserTable users={users} editRow={EditRow} deleteUser={DeleteUser} />
					</div>
				</div>
        </div>
    )
}

export default MainApp
