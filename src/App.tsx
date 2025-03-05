import React from "react";
import "./App.css";
import image from "./assets/download.png"
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
                      <header  className="App-header">
                UM COS420 with React  and TypeScript - Anthony Veilleux
            </header>
            <Container>
                <Row><div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    />
                    <Col><div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    /></Col>
                    <Col></Col>
                    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    />
                <h1><div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    /></h1>

                </Row>
            

            <img src={image} alt="TypeScript Logo" />

            <ul>
            <li>First thing</li>
            <li>Another thing</li>
            <li>A third item</li>
            return <div>
        <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
    </div>
        </ul>Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </Container>
        </div>
    );
}

export default App;
