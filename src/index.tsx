import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { RecoilRoot } from "recoil";

// if (process.env.NODE_ENV === 'development') {
//     worker.start()
//   }
const queryClient = new QueryClient();
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
  // </React.StrictMode>
);
