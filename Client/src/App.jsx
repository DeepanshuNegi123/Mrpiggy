import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import piggy from './assets/piggy.jpeg'
import { useEffect } from 'react'
import Loading from './Loading/loading'
import { Navbar } from './global/navbar'
import { Routes, Route } from "react-router-dom";
import { About } from './global/About'

function App() {
  
const [loading ,setloading] = useState(true);

// useEffect(()=>{

// setTimeout(()=>{
//   setloading(false);
// },5000)



// },[])


return(

<>
{

// loading===true && <Loading/>

 }

 <Navbar/>
 



<Routes>

<Route path='/about' element={<About/>}></Route>


</Routes>


</>



)


}

export default App
