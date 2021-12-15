import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #707dd4;

  margin-bottom: 100px;
`;

export const CategoryWrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Category = styled.div`
  font-family: Jua;

  height: 20px;
  margin: 10px;
  font-size: 18px;
  color: ${(props) =>
    props.isActive === String(props.el.id) ? "white" : "#normal"};
  cursor: pointer;
`;
