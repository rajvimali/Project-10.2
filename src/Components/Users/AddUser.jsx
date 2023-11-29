import React, { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddUser = () => {
        setValues({ name: '', email: '' });
        dispatch(addUser({
            id: '3',
            name: values.name,
            email: values.email
        }));
        navigate('/')
    }

    return (
        <>
            <div className="container ">
                <div className="mt-5 col-6 mx-auto">
                    <h2 className='text-center  mb-5'>Add User</h2>
                    <TextField label="Name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} inputProps={{ type: 'text', placeholder: 'Enter user name' }} /><br />
                    <TextField label="Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} inputProps={{ type: 'email', placeholder: 'Enter user email' }} />
                    <Button onclick={handleAddUser}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default AddUser