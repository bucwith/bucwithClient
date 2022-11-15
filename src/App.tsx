import React from "react";
import GlobalStyle from 'styled-components'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

  // if (isServer) {
  //   (async () => {
  //     const { server } = await import('./mocks/server');
  //     server.listen();
  //   })();
  // } else {
  //   (async () => {
  //     const { worker } = await import('./mocks/browser');
  //     worker.start();
  //   })();
  // }

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
