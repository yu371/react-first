import { useState } from "react";

const Mause = () =>{

    const[mousePosition,setMousePosition] = useState({ x: 0,y:0});
    const moveMouse = (e) =>{
        if(isbool == true)
        {
        setMousePosition({x:e.clientX,y : e.clientY})
        }
    }
    const[isbool,Setisbool] = useState(false)
    const style = {
        backgroundColor: "green",
        position: "absolute",
        top: mousePosition.y,
        left: mousePosition.x,
        width: "100px",
        height: "100px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return(
        <div className='main' onMouseMove={moveMouse} onClick={() =>Setisbool(!isbool)} style={{ height: "100vh", width: "100vw",backgroundColor: "red"}}> 
        <h1>座標</h1> 
        <p>x : { mousePosition.x } , y : {mousePosition.y} </p> 
        <div style ={ style}></div>
    </div> 
    );

}
export default Mause;