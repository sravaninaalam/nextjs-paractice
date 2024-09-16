import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
        <h2>Welcome to the Dashboard!</h2>
        <p>This is your main dashboard content.</p>
      <Link href='/dashboard/settings' className='text-blue-400'>Click to Go Dashboard child page</Link>
    </div>
  )
}

export default page
