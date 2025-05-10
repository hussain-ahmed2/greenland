import React from 'react'
import Button from './Button'
import { useForm } from '@inertiajs/react'

const LogoutButton = () => {
    const { post } = useForm();
    const handleSubmit = (event) => {
        event.preventDefault();
        post('/logout');
    }
  return (
    <form onSubmit={handleSubmit}>
        <Button label='Logout' type='submit' className='bg-rose-500 hover:bg-rose-600 active:bg-rose-600 ring-rose-500/50' />
    </form>
  )
}

export default LogoutButton