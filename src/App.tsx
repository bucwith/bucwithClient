import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import List from "./pages/List";
import Me from "./pages/Me";
import AddList from "./pages/AddList";
import Guest from "./pages/Guest";
import BucketDetail from "./pages/BucketDetail";
import { ImagedWrapper } from "./components/Wrapper";
import { useQuery } from "react-query";
import { userDataAtom } from "./store/atoms";
import { getUserData } from "./api/my-api";
import { toPng } from "html-to-image";

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

  // user정보 가져오기
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const { data: userRawData } = useQuery(["getUserData"], () =>
    userData.userId === -1 ? getUserData() : null
  );

  if (userRawData) {
    setUserData(userRawData);
  }
  // 앨범에 저장하는 코드
  const captureRef = React.useRef<HTMLDivElement>();

  const exportElementAsPNG = () => {
    if (captureRef.current === undefined) {
      return null;
    }

    toPng(captureRef.current).then((image) => {
      const link = window.document.createElement("a");
      link.download = "bucket" + ".png";
      link.href = image;
      link.click();
    });
  };

  return (
    <div
      className="App"
      ref={(ref) => {
        if (ref) {
          captureRef.current = ref;
        }
      }}
    >
      <ImagedWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nickname" element={<SetNickname />} />
            <Route path="/me/add" element={<AddList />} />
            <Route path="/me/list" element={<List />} />
            <Route
              path="/me/bucket/:bucketId"
              element={<BucketDetail exportElementAsPNG={exportElementAsPNG} />}
            />
            <Route
              path="/me/completion"
              element={<BucketDetail exportElementAsPNG={exportElementAsPNG} />}
            />
            <Route path="/me" element={<Me />} />
            <Route path="/guest/:bucketId" element={<Guest />} />
          </Routes>
        </BrowserRouter>
      </ImagedWrapper>
    </div>
  );
}

export default App;
