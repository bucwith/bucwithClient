import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./pages/List";
import Me from "./pages/Me";
import AddList from "./pages/AddList";
import Guest from "./pages/Guest";
import BucketDetail from "./pages/BucketDetail";

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
            <Route path="/me/bucket/:bucketId" element={<BucketDetail />} />
            <Route path="/me/completion" element={<BucketDetail />} />
            <Route path="/me" element={<Me />} />
            <Route path="/guest" element={<Guest />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
