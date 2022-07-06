import { useState } from "react";
import Frame1 from "./image/Frame1.png"
import Frame2 from "./image/Frame2.png"
import Frame3 from "./image/Frame3.png"
import Frame4 from "./image/Frame4.png"


function App() {
  const [color,serColor] = useState("Purple")
  const blueHanlder = ()=>{
      serColor("Blue")
  }

  const redHandler = ()=>{
    serColor("Red")
  }

  const greenHandler = ()=>{
    serColor("Green")
  }
  const purpleHandler = ()=>{
    serColor("Purple")
  }
  return (
    <div className="w-full h-full">
     <div className="flex justify-between">
      <div className="flex p-8">
        <h1 className="font-bold text-primery">Medi.</h1>
        <nav>
          <ul className="flex pl-14 text-primery">
          <li className="pr-5"><a href="/#">Home</a></li>
          <li className="pr-5"><a href="/#">About</a></li>
          <li className="pr-5"><a href="/#">Blog</a></li>
          <li className="pr-5"><a href="/#">Contact</a></li>

          </ul>
        </nav>
      </div>
      <div className="p-2 mr-32">
      <button onClick={purpleHandler} className="mr-2 rounded-full border-Purple bg-Purple w-10 h-10 cursor-pointer"></button>
        <button onClick={blueHanlder} className="mr-2 rounded-full border-blue2 bg-blue2 w-10 h-10 cursor-pointer"></button>
        <button onClick={redHandler} className="mr-2  rounded-full border-red2 bg-red2 w-10 h-10 cursor-pointer"></button>
        <button  onClick={greenHandler} className="mr-2 rounded-full border-green2 bg-green2 w-10 h-10 cursor-pointer"></button>


      </div>
      <div className="flex items-center pr-16 pt-5">
        <button className="pr-5 bg-transparent  text-primery w-20 h-12">Sign In</button>
        <button className={color === "Purple" ? "bg-Purple text-white w-20 h-12 rounded-md" : color === "Blue" ? "bg-blue2 rounded-md text-white w-20 h-12" : color === "Red" ? "bg-red2 text-white w-20 h-12 rounded-md" : "bg-green2 text-white w-20 h-12 rounded-md"}>Sign Up</button>

      </div>
     </div>
     <div className="flex justify-around items-center">
      <div className="flex flex-col my-52 ml-20 xl:mx-48">
        <h1 className="pb-5 text-2xl text-primery xl:text-4xl">Stay Productive & Work Remotely</h1>
        <p className="pb-8 text-primery2 text-md">The key to work-from-home success is to create an<br/> 
enviroment that allows you to focus on the tasks  at hand.<br/> Whether you are working from home for the first time.</p>
<button className={color === "Purple" ? "bg-Purple text-white w-28 h-12 rounded-md" : color === "Blue" ? "bg-blue2 rounded-md text-white w-28 h-12" : color === "Red" ? "bg-red2 text-white w-28 h-12 rounded-md" : "bg-green2 text-white w-28 h-12 rounded-md"}>Learn more</button>

      </div>
      <div className="object-contain max-w-sm mr-20 xl:max-w-lg xl:mr-32">
        {color === "Purple" ? <img src={Frame1} className="w-3/4" alt="frame"/> : color === "Green" ? <img src={Frame2} alt="frame"/> : color === "Red" ? <img src={Frame3} alt="frame"/> : <img src={Frame4} alt="frame"/> }
      </div>
     </div>
    </div>
  );
}

export default App;
