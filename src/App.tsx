import React from "react";

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
      <h1>{fruits.join(', ')}</h1>
    </div>
  );
}

export default App;
