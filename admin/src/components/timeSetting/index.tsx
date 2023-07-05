import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TimeSetting = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Wrapper>
      <Form>
        <PhotoLabel htmlFor="profileImg">이미지를 업로드 해주세요</PhotoLabel>
        <Photofile type="file" id="profileImg" accept="image/*" />
      </Form>
      <TimeWrapper>
        <Title>공고 기간 설정</Title>
        <Line />
        <StartText>공고 시작일</StartText>
      </TimeWrapper>
      <TimeWrapper>
        <Title>입양 기간 설정</Title>
        <Line />
      </TimeWrapper>
    </Wrapper>
  );
};

const StartText=styled.div`
color: #000;
font-size: 20px;
font-weight: 700;
`
const Line = styled.div`
  height: 2px;
  flex-shrink: 0;
  background-color: #1867ff;
  margin-top: 14px;
  width: 690px;
`;

const Title = styled.div`
  display: flex;
  margin-top: 42px;
  flex-shrink: 0;
  color: #000;
  font-size: 32px;
  font-weight: 700;
 
`;
const TimeWrapper = styled.div``;
const Form = styled.form`
  width: 690px;
  height: 358px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--c-main, #1867ff);
  margin-top: 46px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const PhotoLabel = styled.label`
  font-size: 30px;
  font-weight: 800;
  color: white;
  justify-content: center;
`;

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Photofile = styled.input`
  display: none;
`;

export default TimeSetting;
