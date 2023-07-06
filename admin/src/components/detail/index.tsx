import { styled } from "styled-components";
import { Color } from "../../style/color";
import { DetailInformation } from "../contance";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate();
  const detailData = DetailInformation;

  return (
    <Background>
      <ApplicationInfoFlex>
        <ApplicationTitle>입양신청자 정보</ApplicationTitle>
        <Graph>
          <GraphFlex>
            <Name>입양자 이름</Name>
            <DataStyle>김이박</DataStyle>
            <PhoneNumber>휴대전화</PhoneNumber>
            <DataStyle>01012345678</DataStyle>
          </GraphFlex>
          <GraphFlex>
            <Name>입양 예정 일/시</Name>
            <DataStyle>2023-7-6 13:00</DataStyle>
          </GraphFlex>
          <GraphFlex>
            <Name>신청 제목</Name>
            <DataStyle>입양하고 싶습니다.</DataStyle>
          </GraphFlex>
          <GraphFlex>
            <Name>작성일</Name>
            <DataStyle>2023-7-5</DataStyle>
          </GraphFlex>
          <GraphFlex>
            <Content>내용</Content>
            <ContentFlex>
              <div>
                이 아이를 데려가면 저는 엄청난 보호자가 될 수 있습니다.
              </div>
            </ContentFlex>
          </GraphFlex>
        </Graph>
      </ApplicationInfoFlex>
      <PetInformationFlex>
        <Flex>
          <PetImg src="/assets/img/dog/DetailImg.svg" />
          <FlexFlex>
            {detailData.map((data, index) => (
              <InfoFlex key={index}>
                <InfoBold>{data.bold}</InfoBold>
                <InfoMidum>{data.medium}</InfoMidum>
              </InfoFlex>
            ))}
          </FlexFlex>
        </Flex>
      </PetInformationFlex>
      <BtnFlex>
        <ApplyBtn
          onClick={() => {
            navigate("/main");
          }}
        >
          수락하기
        </ApplyBtn>
      </BtnFlex>
    </Background>
  );
};

const DataStyle = styled.div`
  padding-left: 20px;
  font-size: 18px;
`;

const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
`;

const PetInformationFlex = styled.div`
  width: 50%;
  height: 280px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
  margin-top: 2%;
  border-radius: 10px;
`;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const PetImg = styled.img`
  width: 45%;
  object-fit: cover;
  border-radius: 10px;
`;

const FlexFlex = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-top: 3%;
`;

const InfoFlex = styled.div`
  display: flex;
  width: 85%;
  gap: 5%;
`;

const InfoBold = styled.div`
  width: 24%;
  font-size: 20px;
  font-weight: bold;
`;

const InfoMidum = styled.div`
  font-size: 20px;
  color: #505050;
`;

const ApplicationInfoFlex = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const ApplicationTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  padding: 1% 1%;
  margin-top: 7%;
  border-bottom: 2px solid ${Color.MainColor};
`;

const Graph = styled.div`
  width: 100%;
`;

const GraphFlex = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Color.GrayMain};
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 60px;
  background-color: ${Color.headerColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 200px;
  background-color: ${Color.headerColor};
  padding-top: 20px;
`;

const PhoneNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  padding: 2% 0;
  background-color: ${Color.headerColor};
  margin-left: 30%;
`;

const ContentFlex = styled.div`
  width: 72%;
  margin-left: 20px;
  margin: 1% 0 1% 20px;
`;

const ApplyBtn = styled.button`
  width: 500px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 0;
  background-color: ${Color.MainColor};
  border-radius: 10px;
  &:hover {
    background-color: ${Color.MainColor};
    filter: brightness(1.25);
    transition: all 0.3s;
  }
`;

const BtnFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6%;
`;
