import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import List from "./pages/List";
import Me from "./pages/Me";
import AddList from "./pages/AddList";
import Guest from "./pages/Guest";
import BucketDetail from "./pages/BucketDetail";

function App() {
  const pathname = window.location.pathname;
  const URLSearch = new URLSearchParams(location.search);
  const TOKEN = URLSearch.get("token");
  const hasTokenUrl = pathname === "/me/list" || pathname === "/nickname";
  const localToken = localStorage.getItem("token");

  if (pathname !== "/" && !pathname.includes("guest") && localToken === null) {
    console.log("token is null");
    window.location.href = "http://localhost:3000/";
  }

  if (hasTokenUrl && TOKEN) {
    localStorage.setItem("token", TOKEN);
  }

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nickname" element={<SetNickname />} />
            <Route path="/me/add" element={<AddList />} />
            <Route path="/me/list" element={<List />} />
            <Route path="/me/bucket/:bucketId" element={<BucketDetail />} />
            <Route path="/me/completion" element={<BucketDetail />} />
            <Route path="/me" element={<Me />} />
            <Route path="/guest/:bucketId" element={<Guest />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
