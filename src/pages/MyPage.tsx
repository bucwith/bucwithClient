import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox, VerticalCentered, CategoryWrapper } from "../components/Wrapper";
import { PrimaryText } from "../components/Title";
import { MypageSectionTitle, ProfileIcon, ProfileName, Category, MypageSectionWrapper } from "../components/MyPage/MypageStyledComponent";
import { ToggleBtnWrapper, ToggleBtn } from "../components/Button";
import { getUserData } from "../api/my-api";
import heart from "../assets/icon_heart.png";
import post from "../assets/icon_post.png";
import bell from "../assets/icon_bell.png";
import IconSelectModal from "../components/MyPage/IconSelectModal";
import SetNicknameModal from "../components/MyPage/SetNicknameModal"
import SelectCategoryModal from "../components/MyPage/SelectCategoryModal"
import { ICON_CODE, ICON_COLOR } from "../constant";

const MyPage = () => {
  const navigate = useNavigate();
  const [iconSelectModal, setIconSelectModal] = React.useState(false);
  const [nicknameModal, setNicknameModal] = React.useState(false);
  const [interestCategoryModal, setInterestCategoryModal] = React.useState(false);
  const [nickname, setNickname] = React.useState("");
  const [profileIcon, setProfileIcon] = React.useState<string[]>([]);
  const [selectCategoryList, setSelectCategoryList] = React.useState<string[]>(["#영화", "#여행", "#대학합격", "#미용/뷰티", "#연애", "#공부", "#다이어트"]);
  const dataTextList: string[] = ["댓글", "대댓글", "좋아요"];
  getUserData().then((res) => {
    setNickname(res.name);
    setProfileIcon([res.iconCode, ICON_COLOR.bg_color[res.bgColor]]);
  })

  return (
    <div>
      <VerticalCentered gap="20px">
        <PrimaryText fontSize="18px" lineHeight="22px" padding="10px 0" textAlign="center" fontWeight="500">마이 페이지</PrimaryText>
        <ProfileIcon type="button" onClick={() => setIconSelectModal(true)} color={profileIcon[1]} icon={ICON_CODE[profileIcon[0]]} />
        <ProfileName type="button" onClick={() => setNicknameModal(true)}>{nickname}</ProfileName>
        <MypageSectionWrapper>
          <MypageSectionTitle type="button" onClick={() => setInterestCategoryModal(true)} icon={heart}>관심 카테고리</MypageSectionTitle>
          <CategoryWrapper as="ul" gap="12px 8px" margin="16px 0 0 0">
            {selectCategoryList.map((v, index) => {
              return <Category key={index}>{v}</Category>
            })}
          </CategoryWrapper>
        </MypageSectionWrapper>
        <MypageSectionWrapper>
          <MypageSectionTitle type="button" icon={post} onClick={() => {navigate("/me/myposting");}}>내가 쓴 게시글</MypageSectionTitle>
        </MypageSectionWrapper>
        <MypageSectionWrapper>
          <MypageSectionTitle as="h2" icon={bell}>알림 설정</MypageSectionTitle>
          <FlexBox as="ul" gap="12px" align="end">
            {dataTextList.map((v, index) => {
              return (
                <ToggleBtnWrapper key={index} as="li" data-text={v} className={index === 2 ? "isOn" : ""}>
                  <ToggleBtn className={index === 2 ? "isOn" : ""} type="button" onClick={(e) => {(e.target as Element).classList.toggle("isOn"); ((e.target as Element).parentNode as Element).classList.toggle("isOn")}} />
                </ToggleBtnWrapper>
              )
            })}
          </FlexBox>
        </MypageSectionWrapper>
      </VerticalCentered>
      {iconSelectModal && <IconSelectModal setIconSelectModal={setIconSelectModal} profileIcon={profileIcon} />}
      {nicknameModal && <SetNicknameModal setNicknameModal={setNicknameModal} nickname={nickname} />}
      {interestCategoryModal && <SelectCategoryModal setInterestCategoryModal={setInterestCategoryModal} interestCategoryModal={interestCategoryModal} selectCategoryList={selectCategoryList} setSelectCategoryList={setSelectCategoryList} />}
    </div>
  );
};

export default MyPage;
