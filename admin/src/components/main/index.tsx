import styled from "styled-components";
import { AdoptionList } from "../../contance";
import List from "./list";

const Main = () => {
  return (
    <MainWapper>
      <Headers>
        <MainTitle>입양 신청 목록</MainTitle>
        <Button>공고 등록</Button>
      </Headers>
      <Line />
      <TitleRow>
        <p>제목</p>
      <p>작성자</p>
        <p>작성일</p>
        
      </TitleRow>
      {AdoptionList.map((item) => (
            <List
            name={item.name} 
            title={item.title}
            date_created={item.date_created}
            />
        ))}

    </MainWapper>
  );
};


const Line = styled.div`
  width: 55%;
  height: 2px;
  flex-shrink: 0;
  background-color: #1867ff;
  margin-top: 24px;
`;

const TitleRow = styled.div`
display: grid;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  width: 55%;
  height: 29px;
  margin-top: 22px;
  grid-template-columns: 300px 1fr 350px;
  > p {
    color: var(--c-main, #1867ff);
    text-align: center;
    font-size: 20px;
    font-family: Noto Sans KR;
    font-weight: 500;

  }
`;
const MainTitle = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin-top: 40px;
`;
const MainWapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display: inline-flex;
  padding: 5px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--c-main, #1867ff);
  color: var(--c-white, #fff);
  font-size: 16px;
  font-weight: 700;
  border: none;
  &:hover {
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`;

export default Main;
