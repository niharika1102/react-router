import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    return (
        <h1 className='text-center text-3xl bg-fuchsia-600 text-yellow-200 p-5'>Hello user!! ID: {userid} </h1>
    )
}

export default User