import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./pages/List";
import Me from "./pages/Me";
import AddList from "./pages/AddList";
import Guest from "./pages/Guest";
import BucketDetail from "./pages/BucketDetail";
import { tokenAtom } from "./store/atoms";
import axios from "axios";
import { BASE_URL } from "./constant";

function App() {
  const queryClient = new QueryClient();
  const token = localStorage.getItem("token");
  const URLSearch = new URLSearchParams(location.search);
  const TOKEN = URLSearch.get("token");

  if (TOKEN !== null) {
    localStorage.setItem("token", TOKEN);
  }

  if (!token) {
    window.open(BASE_URL);
  }

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("token");

  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
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
      </RecoilRoot>
    </div>
  );
}

export default App;
