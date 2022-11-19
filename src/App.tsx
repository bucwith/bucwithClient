import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import background from "../src/assets/bgImg.png";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  const [fruits, setFruits] = React.useState<string[]>([]);

  const getFruits = async () => {
    try {
      const response = await (await fetch("/fruits")).json();
      setFruits(response);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getFruits();
  }, []);

  return (
    <div className="App">
      <StyledWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <h1>{fruits.join(", ")}</h1>
        </BrowserRouter>
      </StyledWrapper>
    </div>
  );
}

export default App;
