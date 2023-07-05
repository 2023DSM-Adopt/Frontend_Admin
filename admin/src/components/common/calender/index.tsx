import { Korean } from "flatpickr/dist/l10n/ko.js"
import { styled } from "styled-components";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export const Calender = () =>{

    return(
       <Editor
       placeholder="예약시간을 설정해주세요" 
       options={{
        time_24hr: true,
        enableTime: true,
        minDate: "today",
        locale: Korean,
       }}/>
    );
}

const Editor = styled(Flatpickr)`
    width: 300px;
    height: 40px;
    font-size: 18px;
    margin-left: 2%;
    padding-left: 1%;
`;