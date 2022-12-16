import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { worker } from "./mocks/browser";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { BASE_URL } from "./constant";

// if (process.env.NODE_ENV === 'development') {
//     worker.start()
//   }
const queryClient = new QueryClient();
axios.defaults.baseURL = BASE_URL;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
