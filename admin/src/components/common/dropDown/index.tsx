import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: { initialState: string; option: string[] };
  width: number;
  onClick: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, width, onClick }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectItem, setSelectItem] = useState<string>(options.initialState);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectItem(option);
    setIsOpen(false);
    onClick(option);
  };

  return (
    <DropContainer width={width}>
      <input
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        value={selectItem}
      />
      {isOpen && (
        <OptionList current={options.option.length > 4} width={width}>
          {options.option.map((option) => {
            return (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            );
          })}
        </OptionList>
      )}
    </DropContainer>
  );
};

const DropContainer = styled.div<{ width: number }>`
  display: block;
  input {
    color: #1867ff;
    font-weight: 500;
    text-align: left;
    margin-left: 19px;
    margin-top: 10px;
    padding-left: 14px;
    font-size: 24px;
    width: ${({ width }) => width}px;
    height: 45px;
    border-radius: 5px;
border: 1px solid var(--c-01, #EDEDED);
background: #FFF;
    background: no-repeat calc(100% - 9px) center url("/assets/img/DropImg.svg");
  }
`;

const OptionList = styled.ul<{ width: number; current: boolean }>`
 margin-left: 19px;
  position: absolute;
  margin-top: 5px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 176px;
  list-style-type: none;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 13px 20px;
  z-index: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: ${(props) => (props.current ? "block" : "none")};
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1867ff;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f6f6f6;
    border-radius: 8px;
    box-shadow: inset 0px 0px 5px white;
  }
  li {
    
    font-size: 20px;
    
    &:hover {
      background-color: #f6f6f6;
      border-radius: 5px;
      height: 100%;
    }
    cursor: pointer;
  }
`;
export default Dropdown;
