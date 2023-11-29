import React, { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './userSlice'

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleEditUser = () => {
        setValues({ name, email });
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    return (
        <>
            <div className="container ">
                <div className="mt-5 col-6 mx-auto">
                    <h2 className='text-center mb-5'>Add User</h2>
                    <TextField label="Name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} inputProps={{ type: 'text', placeholder: 'Enter User Name' }} /><br />
                    <TextField label="Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} inputProps={{ type: 'email', placeholder: 'Enter User Email' }} />
                    <Button onclick={handleEditUser}>Edit</Button>
                </div>
            </div>
        </>
    )
}

export default EditUser