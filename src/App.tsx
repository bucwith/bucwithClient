import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./pages/List";
import Me from "./pages/Me";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Login />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/nickname" element={<SetNickname />} />
            <Route path="/me/list" element={<List />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
