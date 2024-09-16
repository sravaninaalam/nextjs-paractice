import React from 'react'

function DashboardLayout({children}) {
  return (
    <div className='p-10 m-5 shadow-md'>
      <h1 className='m-3'>WELCOME USER !</h1>
      {children}
    </div>
  )
}

export default DashboardLayout
