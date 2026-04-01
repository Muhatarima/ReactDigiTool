import { useState } from "react";

function Pricing(){
        const [activePlan , setActivePlan]=useState('Pro');

return(
    <div className=" max-w-6xl mx-auto grid grid-cols-1  my-10  md:grid-cols-3 gap-6">
        <div className={activePlan==="Starter" ?"bg-purple-600 text-white shadow-sm my-8 p-6 space-y-2 gap-3  rounded-xl" : "bg-slate-200  shadow-sm p-6 rounded-xl   "} onClick={()=>setActivePlan("Starter")} >




            <h3 className="text-2xl font-bold">Starter</h3>
  <p className="mt-3 text-sm">Perfect for getting started</p>
    <p className="text-4xl font-bold mt-2">$0<small>/months</small></p>

  <ul className="mt-10 space-y-2 text-sm">
  <li>✔ 10 projects</li>
  <li>✔ Basic analytics</li>
  <li>✔ Email support</li>
</ul>
  <button  className={activePlan==="Starter"?"bg-white text-purple-600 border border-white rounded-full py-3 px-12  mt-10 font-medium":"bg-purple-600 text-white border border-white rounded-full py-3 px-12  mt-10  font-medium"}>Get Started Free</button>
        </div>



        <div   className={activePlan==="Pro"?"bg-purple-600 relative text-white shadow-sm p-6  my-8 space-y-2 gap-3 rounded-xl":"bg-slate-200 shadow-sm p-6 relative  rounded-xl  "}  onClick={()=>setActivePlan("Pro")} >

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-orange-500 text-sm px-4 py-1 rounded-full font-medium">
  Most Popular
</span>
<h3 className="text-2xl font-bold">Pro</h3>
  <p className="mt-3">For growing teams and creators.</p>
    <p className="text-4xl font-bold mt-2">$29<small>/months</small></p>
    <ul className="mt-10 space-y-2 text-sm">
  <li>✔ Access to all premium tools</li>
  <li>✔ Unlimited templates</li>
  <li>✔ Priority support</li>
  <li>✔ Unlimited projects</li>
  <li>✔ Cloud sync</li>
  <li>✔ Advanced analytics</li>
</ul>

  
   
  <button  className={activePlan==="Pro"?"bg-white text-purple-600 border border-white rounded-full py-3 px-12 mb-5 mt-22 font-medium":"bg-purple-600 text-white border border-white rounded-full py-3 px-12 mb-5  mt-22 font-medium"}>Start Pro Trial</button>

        </div>
        <div className={activePlan==="Enterprise"? "bg-purple-600   text-white my-8 shadow-sm p-6 space-y-2 gap-3  rounded-xl  ":"bg-slate-200 shadow-sm p-6 rounded-xl "} onClick={()=>setActivePlan("Enterprise")}  >


            
  <h3 className="text-2xl font-bold">Enterprise</h3>
  
  <p className="mt-10">For teams and businesses</p>
    <p className="text-4xl font-bold mt-2">$99<small>/months</small></p>

      <ul className="mt-5 space-y-2 text-sm">
  <li>✔ Everything in Pro</li>
  <li>✔ Team collaboration</li>
  <li>✔ Custom integrations</li>
  <li>✔ Dedicated support</li>
  <li>✔ SLA guarantee</li>
  <li>✔ Custom branding</li>
</ul>
  <button className={activePlan==="Enterprise"?"bg-white   text-purple-600 border border-white rounded-full py-3 px-12  mt-12 font-medium":"bg-purple-600 text-white border border-white py-3 px-12  mt-12 rounded-full p-5 font-medium"}>Contact Sales</button>
        </div>

    </div>

)

}
export default Pricing;