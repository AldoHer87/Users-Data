import axios from 'axios';
import React from 'react';

const UsersList = ({userData, getUser, selectUser}) => {
    const userDataOrd = userData.sort((a, b) => a.first_name.localeCompare(b.first_name));

    const deleteUser = (user) => {
        alert('Se eliminara este usuario')
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getUser())
    }


    return (
        <div className='user_list'>
           <h1>Users</h1>
           <br />
           <br /> 
           <ul>
            {
                userDataOrd.map(user => (
                    <li key={user.id}>
                        <h4>{user.first_name} {user.last_name}</h4>
                        <hr />
                        <h5><b>Correo</b><br /> {user.email}</h5>
                        <h5><b>Cumpleaños</b><br /> {user.birthday}</h5>
                        <hr />
                        <div className="buttons">
                            <button onClick={() => deleteUser(user)}>Delete</button>
                            <button onClick={() => selectUser(user)}>Select</button> 
                        </div>
                    </li>
                    
                ))
            }
           </ul>
        </div>
    );
};

export default UsersList;