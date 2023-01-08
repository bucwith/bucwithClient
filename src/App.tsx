import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Login from "./pages/Login";
import SetNickname from "./pages/SetNickname";
import List from "./pages/List";
import Me from "./pages/Me";
import MyPage from "./pages/MyPage";
import AddList from "./pages/AddList";
import Guest from "./pages/Guest";
import BucketDetail from "./pages/BucketDetail";
import { ImagedWrapper } from "./components/Wrapper";
import { useQuery } from "react-query";
import { isDarkWrapper, userDataAtom } from "./store/atoms";
import { getUserData } from "./api/my-api";
import { toPng } from "html-to-image";
import CommunityPost from "./pages/CommunityPost";
import CommunityMain from "./pages/CommunityMain";

function App() {
  const location = window.location;
  const url = new URL(location.href);
  const URLSearch = new URLSearchParams(location.search);

  let refreshToken = URLSearch.get("refreshToken");
  let accessToken = URLSearch.get("accessToken");
  const hasTokenUrl =
    location.pathname === "/me/list" || location.pathname === "/nickname";

  if (hasTokenUrl && accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    accessToken = URLSearch.get("accessToken");
    refreshToken = URLSearch.get("refreshToken");
    url.searchParams.delete("accessToken");
    url.searchParams.delete("refreshToken");
    window.history.replaceState({}, "", url);
  }

  const isDark = useRecoilValue(isDarkWrapper);

  // user정보 가져오기
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const { data: userRawData } = useQuery(["getUserData"], () =>
    userData?.userId === -1 || !userData ? getUserData() : null
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

  window.FB?.init({
    appId: process.env.REACT_APP_FACEBOOK_JS_KEY,
    autoLogAppEvents: true,
    xfbml: true,
    version: "v15.0",
  });

  if (!window.Kakao?.isInitialized()) {
    window.Kakao?.init(process.env.REACT_APP_KAKAO_JS_KEY);
  }

  return (
    <div
      className="App"
      ref={(ref) => {
        if (ref) {
          captureRef.current = ref;
        }
      }}
    >
      <ImagedWrapper isDark={isDark} />
      <div style={{ width: "100vw", height: "100vh", padding: "20px" }}>
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
            <Route path="/me/mypage" element={<MyPage />} />
            <Route path="/guest/:bucketId" element={<Guest />} />
            <Route path="/community" element={<CommunityMain />} />
            <Route path="/community/addPost" element={<CommunityPost />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
