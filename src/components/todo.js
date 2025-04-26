import { useState } from "react";
import { setItem, getItem, removeItem } from "./localStorage";
import { useEffect } from "react";

const Todo = () => {
  const [stylelist, setStylelist] = useState([]);
  const [mousepoj, setMousepoj] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const [index, setIndex] = useState();
  const addElement = () => {
    setStylelist([...stylelist, { x: 50, y: 50, text: text, size: 50 }]);
    setText("");
  };
  useEffect(() => {
    const savedList = getItem("list");
    if (savedList !== null) {
      setStylelist(savedList);
    }
  }, []);

  useEffect(() => {
    if (stylelist.length >= 1) setItem("list", stylelist);
  }, [stylelist]);
  const moveMouse = (e) => {
    setMousepoj({ x: e.clientX, y: e.clientY });
    if (index != null) {
      setStylelist((prevList) => {
        const list = [...prevList];
        list[index] = {
          ...list[index],
          x: mousepoj.x,
          y: mousepoj.y,
        };
        return list;
      });
    }
  };
  const Remove = (index) =>
    setStylelist(stylelist.filter((s) => s.text !== stylelist[index].text));
  const handleChange = (e,index) => {
    setIndex(index)
    setStylelist((prevList) => {
        const t = e.target.value
        const list = [...prevList];
        list[index] = {
          ...list[index],
          text: `${t}`,
        };
        console.log(index)
        return list;
        
      });
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addElement}>追加</button>
      <div
        onMouseMove={moveMouse}
        style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
        onMouseUp={() => setIndex(null)}
      >
        {stylelist.map((l, index) => (
          <div
            variant="outlined"
            key={index}
            style={{
              position: "absolute",
              top: l.y - l.size / 2,
              left: l.x - l.size / 2,
              backgroundColor: "green",
              color: "white",
              padding: "5px",
              marginBottom: "5px",
              height: l.size + l.text.length * 5,
              width: l.size + l.text.length * 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseDown={() => setIndex(index)}
            onMouseUp={() => setIndex(null)}
          >
            <textarea
              wrap="soft"
              onChange={(e) =>handleChange(e,index)}
              value={stylelist[index].text}
              style={{
                fontSize:"15px",
                border:"none",
                right: l.size/2,
                top: l.size/2,
                backgroundColor:"green",
                height: (l.size + l.text.length * 5),
                width: (l.size + l.text.length * 5),
              }}
            >
    
            </textarea>
      
            <div
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                backgroundColor: "red",
                height: (l.size + l.text.length * 5) / 5,
                width: (l.size + l.text.length * 5) / 5,
              }}
              onClick={() => Remove(index)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
