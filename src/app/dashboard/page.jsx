import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
        <h1>welcome to dashboard</h1>
      <h2>This is parent page </h2>
      <Link href='/dashboard/settings' className='text-blue-400'>Click to Go Dashboard child page</Link>
    </div>
  )
}

export default page
