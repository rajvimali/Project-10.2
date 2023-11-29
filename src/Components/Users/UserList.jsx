import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { deleteUser } from './userSlice';

const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users);
    const handleRemoveUser = (id) => {
        dispatch(deleteUser({ id }))
    }

    const renderCard = () => users.map(user => (

        <div className="container  bg-grey p-3 d-flex flex-wrap justify-content-center" key={user.id}>
            <div className='col-6 p-3 text-white rounded bg-secondary'>
                <h4 className=' text-grey fs-5'>{user.name}</h4>
                <span className=' text-grey fs-5'>{user.email}</span>
                <div className='mt-3 fs-5 '>
                    <Link to={`edit-user/${user.id}`}>
                        <button className='border-0 me-2 '><i class="fa-solid fa-pen"></i></button>
                    </Link>

                    <button onClick={() => handleRemoveUser(user.id)} className='border-0 '><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div >
    ))
    return (
        <>
            <div>
                <h1 className='text-center mb-3'>Crud Operation</h1>
                <Link to="/add-user"><Button>Add User</Button></Link>

                <div className="grid gap-5 "></div>
                {users.length ? renderCard() : <p className='text-center fw-bold'>No users</p>}
            </div>

        </>
    )
}

export default UserList