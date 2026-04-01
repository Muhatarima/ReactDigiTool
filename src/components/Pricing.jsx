import { useState } from "react";

function Pricing(){
        const [activePlan , setActivePlan]=useState('Pro');

return(
    <div>
        <div className={activePlan==="Starter" ?"bg-purple-600" : "bg-white"} onClick={()=>setActivePlan("Starter")} >Starter</div>



        <div onClick={()=>setActivePlan("Pro")} >Pro</div>
        <div onClick={()=>setActivePlan("Enterprise")}  >Enterprise</div>

    </div>

)

}
export default Pricing;