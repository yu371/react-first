import { useState } from "react"
import Mause from "./DetectMause";

const InstanceTag = () =>{
    const [elements, setElements] = useState([]);
    const [text, setText] = useState(""); 
    // 新しい要素を追加する関数
    const addElement = () => {
        setElements([...elements,text]);
    };
    const handlechange =(e) =>{
        setText(e.target.value);
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>動的要素の追加</h1>
          <input type="text" value={text} onChange={handlechange}></input>
          <button onClick={addElement}>要素を追加</button>
          <div>
            {elements.map((element, index) => (
              <div key={index}>{element}
              </div>
            ))}
          </div>
        </header>
      </div>
    );
}
export default InstanceTag