import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import BackArrow from "../components/BackArrow";
import { inputCss } from "../components/main/TextArea";
import PostChip, { PostType } from "../components/community/PostChip";
import { FlexBox } from "../components/Wrapper";
import { isDarkWrapper, userDataAtom } from "../store/atoms";
import { PageTitle } from "./List";
import rightArrow from "../assets/icon_arrow-right.png";
import { PrimaryButton } from "../components/Button";
import CategoryDrawer from "../components/community/CategoryDrawer";
import { useMutation } from "react-query";
import { postCommunityPost } from "../api/community-api";
import { useNavigate } from "react-router-dom";
const Community = () => {
  const setIsDark = useSetRecoilState(isDarkWrapper);
  const navigate = useNavigate();

  useEffect(() => {
    setIsDark(true);
  }, []);

  const [type, setType] = useState<PostType>(PostType.Party);
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);
  const [contents, setContents] = useState("");
  const [categories, setCategories] = useState<number[]>([]);

  const userData = useRecoilValue(userDataAtom);

  const convertType = (type: PostType) => {
    switch (type) {
      case PostType.Party:
        return "CT001";

      case PostType.Question:
        return "CT002";

      case PostType.Recommend:
        return "CT003";

      default:
        return null;
    }
  };

  const convertCategories = (categories: number[] | string[]) => {
    return categories.map((category) => (category = `CC00${category + 1}`));
  };

  const { mutate } = useMutation(["postCommunityPost"], () =>
    postCommunityPost({
      userId: userData?.userId,
      contents: contents,
      type: convertType(type),
      categories: convertCategories(categories),
    })
  );
  return (
    <>
      <BackArrow />
      <PostButton>
        <PostButtonText>게시하기</PostButtonText>
      </PostButton>
      <FlexBox gap="30px" style={{ height: "100%" }} justify="stretch">
        <PageTitle>벅윗 커뮤니티 글쓰기</PageTitle>
        <FlexBox gap="30px" style={{ flexGrow: 1 }}>
          <FlexBox align="flex-start" gap="16px">
            <SubTitle>어떤 종류의 글인가요?</SubTitle>
            <FlexBox direction="row" gap="8px">
              <PostChip
                type={PostType.Party}
                active={type === PostType.Party}
                onClick={() => setType(PostType.Party)}
              />
              <PostChip
                type={PostType.Question}
                active={type === PostType.Question}
                onClick={() => setType(PostType.Question)}
              />
              <PostChip
                type={PostType.Recommend}
                active={type === PostType.Recommend}
                onClick={() => setType(PostType.Recommend)}
              />
            </FlexBox>
          </FlexBox>
          <FlexBox align="flex-start" gap="16px" style={{ flexGrow: 1 }}>
            <SubTitle>어떤 내용의 글인가요?</SubTitle>
            <FlexBox style={{ flexGrow: 1 }} gap="8px" align="stretch">
              <CategorySelectButton>
                <FlexBox
                  direction="row"
                  justify="space-between"
                  onClick={() => setOpenCategoryDrawer(true)}
                >
                  <pre>{`#    카테고리를 선택해주세요`}</pre>
                  <img src={rightArrow} />
                </FlexBox>
              </CategorySelectButton>
              <PostTextArea
                placeholder="게시글을 작성해보세요."
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <PrimaryButton
          onClick={() => {
            mutate();
            navigate("/community");
          }}
        >
          게시하기
        </PrimaryButton>
      </FlexBox>
      {openCategoryDrawer && (
        <CategoryDrawer
          setCategories={setCategories}
          categories={categories}
          setOpenCategoryDrawer={setOpenCategoryDrawer}
        />
      )}
    </>
  );
};

export default Community;

const PostButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const PostButtonText = styled.button`
  color: #7958fc;
`;

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

const CategorySelectButton = styled.button`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  text-align: left;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.8);
`;

const PostTextArea = styled.textarea`
  ${inputCss}
  height: 100%;
`;
