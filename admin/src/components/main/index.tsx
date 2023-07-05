import styled from "styled-components";

const Main = () => {
  return (
    <MainWapper>
      <Headers>
        <p>입양 신청 목록</p>
        <Button>공고 등록</Button>
      </Headers>
    </MainWapper>
  );
};

const Headers = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin-top: 40px;
  width: 55%;
  margin-left: 339px;
  `;
const MainWapper = styled.div`
  color: #000;
  font-size: 32px;
  font-family: Noto Sans KR;
  font-weight: 700;
`;
const Button=styled.button`
display: inline-flex;
padding: 5px 12px 4px 12px;
justify-content: center;
align-items: center;
border-radius: 5px;
background: var(--c-main, #1867FF);
color: var(--c-white, #FFF);
font-size: 16px;
font-weight: 700;
border: none;
`

export default Main;
