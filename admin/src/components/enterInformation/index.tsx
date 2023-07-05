import styled from "styled-components";

const EnterInformation = () => {
  return (
    <>
      <Information>
        <Form>
          <PhotoLabel htmlFor="profileImg" >
           이미지를 업로드 해주세요
          </PhotoLabel>
          <Photofile type="file" id="profileImg" accept="image/*" />
        </Form>
      </Information>
    </>
  );
};

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
  flex-direction: column;`;

const Photofile = styled.input`
  display: none;
`;

export default EnterInformation;
