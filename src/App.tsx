import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SetNickname from "./pages/SetList";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./pages/List";
import AddList from "./pages/AddList";
import SetList from "./pages/SetList";

function App() {
  const queryClient = new QueryClient();

  // 로컬에서 유저정보 가져오고 없으면 로그인창으로 redirect.
  const isAuthorized = localStorage.getItem("");

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/nickname" element={<SetNickname />} />
            <Route path="/me/add" element={<AddList />} />
            <Route path="/me/list" element={<List />} />
            <Route path="/me/setList" element={<SetList />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
