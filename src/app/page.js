import Image from "next/image";
import Link from "next/link";
import Dynamicproduct from "../../components/Dynamicproduct";
export default function Home() {
  return (
    
        <div className="max-w-6xl p-5 m-7 shadow-md">
              <h2 className="text-red-500">This is home page</h2>
              <br></br>
              <Link href='/about' className="text-blue-700">Go To About</Link>
              <br></br>

             <h2> It will take you to product 2 defaultly </h2>
              <Link href='/products/2' className="text-blue-700">Goto default product -2</Link>
           
              <p className="text-orange-500">If you want to go on your own choice to product page please enter a number</p>
                 <Dynamicproduct/>

            <div className="px-10 bg-gray-400">
                  <Link href='/dashboard' >Click to go Dashboard</Link>
                  <br></br>
                  <Link href='/dashboard/settings'>Click to Go Dashboard child page</Link>
            </div>
        </div>
  );
}
