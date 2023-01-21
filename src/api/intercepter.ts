import { userDataAtom } from "./../store/atoms";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useQuery } from "react-query";
import { getUserData } from "./my-api";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.request.use((config) => {
  const isDeleteStar =
    config?.url?.startsWith("/star") && config.method == "delete";

  if (
    isDeleteStar ||
    !config?.url?.startsWith("/star") ||
    !config?.url?.startsWith("/bucket/id")
  ) {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = {
      Authorization: accessToken,
    };
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errResponseStatus = null;
    const originalRequest = error.config;
    console.log(error);
    try {
      errResponseStatus = error.response.status;
    } catch (e) {
      /* empty */
    }

    // access token이 만료되어 발생하는 에러인 경우
    if (
      (error.message === "Network Error" || errResponseStatus === 401) &&
      !originalRequest.retry
    ) {
      originalRequest.retry = true;
      const preRefreshToken = localStorage.getItem("refreshToken");
      if (preRefreshToken) {
        // refresh token을 이용하여 access token 재발행 받기
        return axios
          .post("/account/reissue", {
            refreshToken: preRefreshToken,
          })
          .then((res) => {
            const { accessToken, refreshToken } = res.data.data;

            // 새로 받은 token들의 정보 저장
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            // 유저정보 다시 저장
            const setUserData = useSetRecoilState(userDataAtom);
            const { data } = useQuery(["getUserData"], getUserData);

            if (data) {
              setUserData(data);
            }
            originalRequest.headers = {
              Authorization: accessToken,
            };

            return axios(originalRequest);
          })
          .catch(() => {
            console.log("error");
            // access token을 받아오지 못하는 오류 발생시 logout 처리
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("profile");
            window.location.href = "/login";

            return false;
          });
      }
      // 오류 발생 시 오류 내용 출력 후 요청 거절
      return Promise.reject(error);
    }
    // 오류 발생 시 오류 내용 출력 후 요청 거절
    return Promise.reject(error);
  }
);

export default axios;
