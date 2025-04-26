import { useState } from "react";


const Todo = () => {
    const [stylelist, setStylelist] = useState([]);
    const [mousepoj, setMousepoj] = useState({ x: 0, y: 0 });
    const [text, setText] = useState("");
    const [index,setIndex] = useState();
    const addElement = () => {
        setStylelist([...stylelist, { x: 50, y: 50, text: text ,size:50}]);
        setText("");
    };

    const moveMouse = (e) => {
        setMousepoj({ x: e.clientX, y: e.clientY });
        if(index != null)
        {
        setStylelist(prevList => {
            const list = [...prevList];
            list[index] = {
                ...list[index],
                x: mousepoj.x,
                y: mousepoj.y,  
            };
            return list;
        })
    }
    };
    const [bool,setBool] = useState(false);
    const Move = (index) => {
        setBool(!bool);
        if(bool === true)
        {
        setIndex(index)
        }
        else
        {
        Off();
        }
    };
    const Off = () =>{
        setIndex(null)
    }

  
    return (
        <div>
            
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addElement}>追加</button>
            <div onMouseMove={moveMouse} style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
                {stylelist.map((l, index) => (
                    <div 
                        variant="outlined"
                        key={index} 
                        style={{
                            position: "absolute",
                            top: l.y-l.size/2,
                            left: l.x-l.size/2,
                            backgroundColor: "green",
                            color: "white",
                            padding: "5px",
                            marginBottom: "5px",
                            height: l.size,
                            width: l.size,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() => Move(index)}
                    >
                        {l.text}
                    </div>
                ))}                
            </div>
        </div>
    );
};

export default Todo;

// import { useState } from "react"
// const Todo =() =>
// {
//     const[stylelist,setStylelist] = useState([])
//     const addElement = () => {
//         setStylelist([...stylelist,{"x":0,"y":0,"text": text}])
//         setText("");
//     }
//     const[mousepoj,setMousepoj] = useState([{"x":0,"y":0}])
//     const[text,setText] = useState("")
//     const[i,setI] = useState(0);
//     const moveMouse = (e) =>{
 
//         setMousepoj({x:e.clientX,y : e.clientY})
        
//     }
//     const Move = (index,e) =>
//     {
//         setStylelist(
//             prevList =>{
//                 const list = [...stylelist];
//                 list[index] = {
//                     "x":mousepoj.x,
//                     "y":mousepoj.y,
//                     "text":`${list[index].text}`
//                 }
//             }
//         )
//     }
//     return(
//         <div>
//             <input onChange ={(e) => {setText(e.target.value)}}></input>
//             <button onClick={addElement}>追加</button>
//             <div onMouseMove={moveMouse}>
//                 {stylelist.map((l,index) =>(
//                     <div key={index} style={{position: 'relative',marginTop:`${l.x}px`,marginLeft:`${l.y}`, backgroundColor :"green"}}  onMouseMove = {(index) => Move(index)}>
//                         {l.text}
//                     </div>
//                 ))}                
//             </div>
//         </div>
//     )
// }
// export default Todo