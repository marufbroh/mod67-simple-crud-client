import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
            // headers: {
            //     "content-type": "application/json"
            // }, 
            // body: ''
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount> 0){
                alert('User successfully deleted')
            }
        })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;