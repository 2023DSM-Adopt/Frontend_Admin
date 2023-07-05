import { Korean } from "flatpickr/dist/l10n/ko.js";
import { styled } from "styled-components";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export const Calender = () => {
  return (
    <Editor
      placeholder="예정일을 설정해주세요"
      options={{
        time_24hr: false,
        enableTime: false,
        minDate: "today",
        locale: Korean,
      }}
    />
  );
};

const Editor = styled(Flatpickr)`
  width: 200px;
  height: 40px;
  justify-content: center;
  font-size: 18px;
  margin-left: 2%;
  padding-left: 1%;
`;
