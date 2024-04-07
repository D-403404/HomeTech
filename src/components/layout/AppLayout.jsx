import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='p-[500px]'>
        <Sidebar />
        <Outlet />
    </div>
  )
}
