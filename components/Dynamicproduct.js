'use client'

import { useState } from "react"
import Link from "next/link"
function Dynamicproduct() {
    const [num,setNum]=useState(0)
  return (
    <div>
       <input type="number" className="border border-black" value={num} onChange={(e)=>setNum(e.target.value)} />
       
       <br></br>
       <Link href={`/products/${num}`} className='text-blue-700'>goto {num}</Link>
    </div>
  )
}

export default Dynamicproduct
