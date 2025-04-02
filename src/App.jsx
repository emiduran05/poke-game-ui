import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container Game */}
        <div
          style={{ width: "350px", height: "500px", backgroundColor: "#eee", border: "2px solid black", borderRadius: "5px 5px 35px 5px",}}
        >
          {/* Container screen */}
          <div
            style={{
              paddingTop: "5%",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "25%",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "200px",
                backgroundColor: "#bdae58",
              }}
            ></div>
          </div>
          {/* container button */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "black",
                
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "red",
                    width: "40px",
                    height: "40px",
                  }}
                ></button>
              </div>
              <div></div>
            </div>
            <div style={{ paddingTop: "30%",  }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  // backgroundColor: "gray",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div><div style={{backgroundColor: "#999", border: "1px solid #000", height: "10px", width: "40px", borderRadius: "30%", transform: "rotate(-30deg)"}}> <button style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "none"}}></button> <p style={{marginTop: "-2px"}}><b>Select</b></p> </div></div>
                <div><div style={{backgroundColor: "#999", border: "1px solid #000", height: "10px", width: "40px", borderRadius: "30%", transform: "rotate(-30deg)"}}> <button style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "none"}}></button> <p style={{marginTop: "-2px"}}><b>Start</b></p> </div></div>
              </div>
            </div>
            <div
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                backgroundColor: "black",
              }}
            >
              <div>
                {" "}
                <button
                  style={{
                    backgroundColor: "#a93671",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
              <div>
              <button
                  style={{
                    backgroundColor: "#a93671",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
