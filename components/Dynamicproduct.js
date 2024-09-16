'use client'

import {useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
function Dynamicproduct() {
    const [num,setNum]=useState(0)
    const router=useRouter()
  return (
    <div>
       <input type="number" className="border border-black" value={num} onChange={(e)=>setNum(e.target.value)} />
       
       <br></br>
       {/* <Link href={`/products/${num}`} className='text-blue-700'>goto {num}</Link> */}
       <button onClick={()=>router.push(`/products/${num}`)}>GoTO {num}</button>
    </div>
  )
}

export default Dynamicproduct
