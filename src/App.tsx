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
  const url = window.location;
  const URLSearch = new URLSearchParams(location.search);

  let refreshToken = URLSearch.get("refreshToken");
  let accessToken = URLSearch.get("accessToken");
  const hasTokenUrl =
    url.pathname === "/me/list" || url.pathname === "/nickname";
  const localToken = localStorage.getItem("accessToken");

  if (hasTokenUrl && accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    accessToken = URLSearch.get("accessToken");
    refreshToken = URLSearch.get("refreshToken");
  }

  // if (
  //   url.pathname !== "/" &&
  //   !url.pathname.includes("guest") &&
  //   localToken === null
  // ) {
  //   window.location.href = `${url.protocol}//${url.host}`;
  // }

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
