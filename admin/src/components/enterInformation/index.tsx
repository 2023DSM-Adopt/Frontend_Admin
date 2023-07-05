import styled from "styled-components";
import { useState } from "react";
import { genderDropDownItem, stateDropDownItem } from "../../constant";
import Dropdown from "../common/dropDown";
import { useNavigate } from "react-router-dom";


const EnterInformation = () => {

  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };


  return (
    <>
      <Information>
        <Form>
          <PhotoLabel htmlFor="profileImg" >
           이미지를 업로드 해주세요
          </PhotoLabel>
          <Photofile type="file" id="profileImg" accept="image/*" />
        </Form>
        <InformationWrapper>
          <Title>정보 입력</Title>
          <Line />
          <ListWrapper>
            <Text>보호소 이름</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>보호소 상세주소</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>이름</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>입양 상태</Text>
            <Dropdown
            options={stateDropDownItem}
            width={160}
            onClick={handleDropdownOption}
          />
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>품종</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>성별</Text>
            <Dropdown
            options={genderDropDownItem}
            width={160}
            onClick={handleDropdownOption}
          />
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>몸무게</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>나이</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>지역 분류</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>관리 번호</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
          <ListWrapper>
            <Text>기타 정보</Text>
            <InformationInput/>
          </ListWrapper>
          <SubLine />
        </InformationWrapper>
        <Button onClick={()=>{navigate("/timeSetting")}} >다음</Button>
      </Information>
    </>
  );
};

const Button=styled.button`
display: flex;
width: 690px;
justify-content: center;
height: 60px;
align-items: center;
border-radius: 5px;
background: var(--c-main, #1867FF);
border: none;
margin-top: 40px;
color: var(--c-white, #FFF);
font-size: 20px;
font-weight: 700;
&:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`
const InformationInput=styled.input`
width: 492px;
height: 40px;
flex-shrink: 0;
border: 1px solid var(--c-main, #D3D3D3);
margin-top: 10px;
margin-left: 19px;
padding-left: 20px;
color: #000;
font-size: 16px;
font-weight: 500;
&:focus{
 outline: none;
}
`
const Text=styled.div`
display: flex;
width: 180px;
height: 60px;
flex-direction: column;
justify-content: center;
color: #000;
text-align: center;
font-size: 20px;
font-weight: 700;
background-color:#F6F6F6;
`
const ListWrapper=styled.div`
height: 60px;
background-color: white;
display: flex;

`

const Line = styled.div`
  height: 2px;
  flex-shrink: 0;
  background-color: #1867ff;
  margin-top: 14px;
`;


const SubLine = styled.div`
  height: 2px;
  flex-shrink: 0;
  background-color: #D3D3D3;
`;



const Title=styled.div`
display: flex;
width: 140px;
margin-top: 42px;
flex-shrink: 0;
color: #000;
font-size: 32px;
font-weight: 700;
margin-right: 560px;

`
const InformationWrapper=styled.div`
  
`
const Form = styled.form`
width: 690px;
height: 358px;
flex-shrink: 0;
border-radius: 10px;
background: var(--c-main, #1867FF);
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

const Information = styled.div`
justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`
  ;

const Photofile = styled.input`
  display: none;
`;

export default EnterInformation;
