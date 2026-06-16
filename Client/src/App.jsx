import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import piggy from './assets/piggy.jpeg'
import { useEffect } from 'react'
import Loading from './Loading/loading'

function App() {
  
const [loading ,setloading] = useState(true);

useEffect(()=>{

setTimeout(()=>{
  setloading(false);
},5000)



},[])


return(

<>
{

loading===true && <Loading/>

 }
{
  loading===false &&
<div className=''>
  data ahead
</div>
}
</>



)


}

export default App
