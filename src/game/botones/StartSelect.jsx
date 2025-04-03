import React from 'react'

function StartSelect() {
  return (
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
  )
}

export default StartSelect