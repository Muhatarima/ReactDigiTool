import { useState } from "react";

function Pricing(){
        const [activePlan , setActivePlan]=useState('Pro');

return(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={activePlan==="Starter" ?"bg-purple-600 text-white shadow-sm p-6 rounded-xl" : "bg-white  shadow-sm p-6 rounded-xl   "} onClick={()=>setActivePlan("Starter")} >




            <h3 className="text-2xl font-bold">Starter</h3>
  <p className="text-4xl font-bold mt-2">$0<small>/months</small></p>
  <p className="mt-3">Perfect for getting started</p>
  <button className="mt-6 btn rounded-full">Get Started Free</button>
        </div>



        <div   className={activePlan==="Pro"?"bg-purple-600  text-white shadow-sm p-6 rounded-xl":"bg-white  shadow-sm p-6 rounded-xl  "}  onClick={()=>setActivePlan("Pro")} >


<h3 className="text-2xl font-bold">Pro</h3>
  <p className="text-4xl font-bold mt-2">$29</p>
  <p className="mt-3">For growing teams and creators.</p>
  <button className="mt-6 btn rounded-full">Start Pro Trial</button>

        </div>
        <div className={activePlan==="Enterprise"? "bg-purple-600   text-white shadow-sm p-6 rounded-xl  ":"bg-white shadow-sm p-6 rounded-xl "} onClick={()=>setActivePlan("Enterprise")}  >


            
  <h3 className="text-2xl font-bold">Enterprise</h3>
  <p className="text-4xl font-bold mt-2">$29</p>
  
  <p className="mt-3">For teams and businesses</p>
  <button className="mt-6 btn rounded-full">Contact Sales</button>
        </div>

    </div>

)

}
export default Pricing;