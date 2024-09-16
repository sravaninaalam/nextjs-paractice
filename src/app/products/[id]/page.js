'use client'
import { useParams } from 'next/navigation'

import React from 'react'
function page({params}) {
        // const params=useParams()
       
   
  return (
    <div>
      THIS IS DYNAMIC PRODUCTS PAGE WITH ID- -{params.id}
      </div>
  )
}

export default page
