import React from "react";
import styled from "styled-components";
import { FlexBox, VerticalCentered } from "../components/Wrapper";
import blue_comet from "../assets/main_icons/blue_comet.png";
import glow from "../assets/list_glow.png";
import pencil from "../assets/icon-pencil.png";
import heart from "../assets/icon_heart.png";
import post from "../assets/icon_post.png";
import bell from "../assets/icon_bell.png";
import arrow from "../assets/icon_arrow-right.png";
import IconSelectModal from "../components/MyPage/IconSelectModal";
import SetNicknameModal from "../components/MyPage/SetNicknameModal"
import SelectCategoryModal from "../components/MyPage/SelectCategoryModal"

interface profileIconProps {
  icon: string;
}

interface mypageSectionHeaderIconProps {
  icon: string;
}

const MyPage = () => {
  const [iconSelectModal, setIconSelectModal] = React.useState(false);
  const [nicknameModal, setNicknameModal] = React.useState(false);
  const [interestCategoryModal, setInterestCategoryModal] = React.useState(false);
  const [nickname, setNickname] = React.useState("풍등이");
  const [profileIcon, setProfileIcon] = React.useState<string[]>([blue_comet, "#172C5F"]);
  const [selectCategoryList, setSelectCategoryList] = React.useState<string[]>(["#영화", "#여행", "#대학합격", "#미용/뷰티", "#연애", "#공부", "#다이어트"]);

  return (
    <div>
      <VerticalCentered gap="20px">
        <Title>마이 페이지</Title>
        <ProfileIcon type="button" onClick={() => setIconSelectModal(true)} color={profileIcon[1]} icon={profileIcon[0]} />
        <ProfileName type="button" onClick={() => setNicknameModal(true)}>{nickname}</ProfileName>
        <MypageSectionWrapper>
          <MypageSectionHeader type="button" onClick={() => setInterestCategoryModal(true)} icon={heart}> {/*component화 대상*/}
            <MypageSectionTitle>관심 카테고리</MypageSectionTitle> {/*component화 대상*/}
          </MypageSectionHeader>
          <CategoryWrapper> {/*component화 대상*/}
            {selectCategoryList.map((v, index) => {
              return <Category key={index}>{v}</Category>
            })}
          </CategoryWrapper>
        </MypageSectionWrapper>
        <MypageSectionWrapper>
          <MypageSectionHeader type="button" icon={post}>
            <MypageSectionTitle>내가 쓴 게시글</MypageSectionTitle>
          </MypageSectionHeader>
        </MypageSectionWrapper>
        <MypageSectionWrapper>
          <MypageSectionHeader as="header" icon={bell}>
            <MypageSectionTitle>알림 설정</MypageSectionTitle>
          </MypageSectionHeader>
          <FlexBox as="ul" gap="12px" align="end">
            <ToggleBtnWrapper data-text="댓글"> {/*component화 대상*/}
              <ToggleBtn type="button" onClick={(e) => {(e.target as Element).classList.toggle("isOn"); ((e.target as Element).parentNode as Element).classList.toggle("isOn")}} /> {/*component화 대상*/}
            </ToggleBtnWrapper>
            <ToggleBtnWrapper data-text="대댓글">
              <ToggleBtn type="button" onClick={(e) => {(e.target as Element).classList.toggle("isOn"); ((e.target as Element).parentNode as Element).classList.toggle("isOn")}} />
            </ToggleBtnWrapper>
            <ToggleBtnWrapper data-text="좋아요" className="isOn">
              <ToggleBtn type="button" className="isOn" onClick={(e) => {(e.target as Element).classList.toggle("isOn"); ((e.target as Element).parentNode as Element).classList.toggle("isOn")}} />
            </ToggleBtnWrapper>
          </FlexBox>
        </MypageSectionWrapper>
      </VerticalCentered>
      {iconSelectModal && <IconSelectModal setIconSelectModal={setIconSelectModal} setProfileIcon={setProfileIcon} />}
      {nicknameModal && <SetNicknameModal setNicknameModal={setNicknameModal} setNickname={setNickname} nickname={nickname} />}
      {interestCategoryModal && <SelectCategoryModal setInterestCategoryModal={setInterestCategoryModal} interestCategoryModal={interestCategoryModal} selectCategoryList={selectCategoryList} setSelectCategoryList={setSelectCategoryList} />}
    </div>
  );
};

export default MyPage;

const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: white;
  font-weight: 500;
  padding: 10px 0;
`

const ProfileIcon = styled.button<profileIconProps>`
  background-color: ${(props) => props.color};
  width: 80px;
  height: 80px;
  border-radius: 100%;
  transform: translateX(calc(50vw - 50% - 20px));
  background-image: ${(props) => `url(${props.icon}), url(${glow})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px 60px, cover;
  position: relative;
  &::after{
    content: "";
    background-color: #141415;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 4px;
    background-image: url(${pencil});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }
`

const ProfileName = styled.button`
  transform: translateX(calc(50vw - 50% - 20px));
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: white;
  text-align: center;
  width: fit-content;
  &::after{
    content: "";
    width: 25px;
    height: 23px;
    position: absolute;
    right: -15px;
    bottom: 1px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
  }
`

const MypageSectionWrapper = styled.section`
  margin-top: 30px;
`

const MypageSectionHeader = styled.button<mypageSectionHeaderIconProps>`
  width: 100%;
  padding-left: 24px;
  background-image: ${(props) => props.icon === bell ? `url(${props.icon})` : `url(${props.icon}), url(${arrow})`};
  background-repeat: no-repeat;
  background-position: left center, right center;
  background-size: 18px 18px, 20px 20px;
  text-align: left;
  margin-bottom: ${(props) => props.icon === bell ? "20px" : "0"};
`

const MypageSectionTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`

const CategoryWrapper = styled.ul`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  gap: 12px 8px;
`

const Category = styled.li`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px 13.9px;
  border: 1px solid #4D4E54;
  border-radius: 30px;
`

const ToggleBtnWrapper = styled.li`
  width: 50px;
  height: 30px;
  background-color: #7958FC;
  border-radius: 20px;
  position: relative;
  transition: 1s;
  &::after{
    content: attr(data-text);
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    position: absolute;
    left: -300px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.isOn{
    background-color: #434657;
  }
`

const ToggleBtn = styled.button`
  width: 26px;
  height: 26px;
  background: #D9D9D9;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  transition: 1s;
  &.isOn{
    left: 2px;
  }
`