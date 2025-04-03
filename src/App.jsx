import "./App.css";
import Screen from "./game/Screen";
import Pad from "./game/botones/Pad";
import Actions from "./game/botones/Actions";
import StartSelect from "./game/botones/StartSelect";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container Game */}
        <div
          style={{ width: "350px", height: "500px", backgroundColor: "#eee", border: "2px solid black", borderRadius: "5px 5px 35px 5px",}}
        >
          {/* Container screen */}
          <Screen />
          {/* container button */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            
            <Pad />

           <StartSelect />

           <Actions />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
