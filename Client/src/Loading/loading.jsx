import React from "react";

import { useEffect , useState } from "react";

const Loading =()=>{


return (

<div className=" h-screen flex flex-col items-center justify-center gap-20 bg-black">

<img src="Piggy.jpeg"
className="h-100 w-98" alt="loading">
</img>

<h2 className="text-6xl font-bold text-gray-200 animate-pulse"> Loading... </h2>

</div>


)
}

export default Loading;