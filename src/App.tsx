import React from "react";
import "./App.css";
import image from "./Assets/ts.png";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <h1>This is a heading</h1>
            <header className="App-header">
                <img
                    src={image}
                    alt="A picture of my dog Ada"
                    width="100"
                    height="100"
                />
                UM COS420 with React Hooks and TypeScript - Anthony Veilleux
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
        </div>
    );
}

export default App;
