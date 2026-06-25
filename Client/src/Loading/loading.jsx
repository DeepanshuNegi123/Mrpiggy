import React from "react";

import { useEffect , useState } from "react";

const Loading =()=>{


return (

<div className=" h-screen flex flex-col items-center justify-center gap-20 bg-black">

<img src="serious.png"
className="h-100 w-98 border rounded-full " alt="loading">
</img>


<h2 className="text-6xl font-bold text-[rgb(108,77,69)] animate-pulse">Loading... </h2>

</div>


)
}

export default Loading;