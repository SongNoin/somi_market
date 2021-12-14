import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryWrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Category = styled.div`
  height: 20px;
  margin: 10px;
  font-size: 15px;
  color: ${(props) =>
    props.isActive === String(props.el.id) ? "red" : "#normal"};
  cursor: pointer;
`;
