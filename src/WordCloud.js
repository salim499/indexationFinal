import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import { Modal, Button } from "react-bootstrap";



function App(props) {
  const options = {
    rotations: 5,
    rotationAngles: [-5, -5, +5, +5],
  };
  return (
    <Modal.Dialog style={{  color: "black" }}>
      <ReactWordcloud
        words={props.word}
        options={options}
        style={{ background: "rgba(0,0,0,1)", opacity: "1" }}
      />
    </Modal.Dialog>
  );
}
export default App;
