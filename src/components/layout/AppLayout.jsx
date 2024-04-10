import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='pl-[348px]'>
        <Sidebar />
        <Outlet />
    </div>
  )
}
