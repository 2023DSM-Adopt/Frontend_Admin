import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calender } from "../common/calender";

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
        <Div>
          <StartText>공고 시작일</StartText>
          <Calender />
          <EndText>공고 마감일</EndText>
          <Calender />
        </Div>
      </TimeWrapper>
      <TimeWrapper>
        <Title>입양 기간 설정</Title>
        <Line />
        <Div>
          <StartText>입양 시작일</StartText>
          <Calender />
        </Div>
      </TimeWrapper>
      <ButtonWrapper>
      <PreviousButton onClick={()=>{navigate("/enterInformation")}}>이전</PreviousButton>
        <AddButton onClick={()=>{navigate("/main")}}>공고 등록</AddButton>
        
       </ButtonWrapper>
    </Wrapper>
  );
};

const ButtonWrapper=styled.div`
  display: flex;
  justify-content: space-between;
margin-top: 75px;
width: 690px;
`

const AddButton=styled.button`
display: inline-flex;
width: 118px;
height: 60px;
justify-content: center;
align-items: center;
border-radius: 5px;
background: var(--c-main, #1867FF);
color: var(--c-white, #FFF);
font-size: 20px;
font-weight: 700;
border: none;
&:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`

const PreviousButton=styled.button`
width: 118px;
height: 60px;
display: inline-flex;
padding: 15px 20px 16px 19px;
justify-content: center;
align-items: center;
border-radius: 5px;
background: var(--c-main, #1867FF);
color: var(--c-white, #FFF);
font-size: 20px;
font-weight: 700;
border: none;
 &:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`
const Div=styled.div`
  display: flex;
  margin-top: 29px;
 
`

const EndText=styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
margin-top: 5px;
margin-left: 48px;
 
`
const StartText = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;
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
