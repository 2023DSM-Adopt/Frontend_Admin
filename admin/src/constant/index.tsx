interface dropdownType {
    initialState: string;
    option: string[];
  }
  
  export const genderDropDownItem: dropdownType = {
    initialState: "암컷",
    option: ["암컷", "수컷"],
  };
  
    
    export const stateDropDownItem: dropdownType = {
      initialState: "공고중",
      option: ["입양 가능", "입양 예정", "공고중"],
    };