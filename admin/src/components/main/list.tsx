import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  title: string;
  date_created: string;
}
const List = ({ name, title, date_created }: Props) => {
  
  const navigate = useNavigate();
  return (
    <ListWrapper onClick={()=>{navigate("/detail")}}>
      <p>{title}</p>
      <p>{name}</p>
      <p>{date_created}</p>
    </ListWrapper>
  );
};



const ListWrapper = styled.div`
 display: grid;
 grid-template-columns: 300px 1fr 350px;
 margin-left: 0;
 width: 100px;
  padding: 18px 0;
  & > p {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  width: 55%;
  cursor: pointer;
  height: 59px;
  border-radius: 5px;
  background: #f5f5f5;
  margin-top: 22px;
  &:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    border-radius: 10px;
  }
`;

export default List;
