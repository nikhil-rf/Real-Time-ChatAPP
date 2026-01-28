import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState(["hi there", "kasa hai loda"]);
  const wsRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessage((m) => [...m, event.data]);
    }
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    return () => { 
      ws.close();
     };
  }, []);

  return (
    <>
      <div className="h-screen bg-black">
        <br />
        <br />
        <div className="h-[80vh]">
          {message.map((message) => (
            <div className="m-8">
              <span className="bg-white text-black rounded p-3">
                {message}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white flex p-4">
          <input ref={inputRef} id="message" className=" flex-1" />
          <button onClick={() => {
            const message = inputRef.current?.value;
            wsRef.current.send(JSON.stringify({                              //converting msg into string before sending to backend 
              type: "chat",
              payload: {
                message: message
              }
            }))
          }} className="bg-purple-600 text-white p-4">Send Message</button>
        </div>
      </div>
    </>
  );
}

export default App;
