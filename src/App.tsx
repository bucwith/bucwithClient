import React from "react";
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {   
 
  const [fruits, setFruits] = React.useState<string[]>([])
  
  const getFruits = async () => {
    try {
      const response =  await (await fetch("/fruits")).json()
      setFruits(response);
    } catch(error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
   getFruits()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <h1>{fruits.join(', ')}</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
