import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 50px;
`;

export const CartTitle = styled.div`
  width: 1200px;
  font-family: NotoSans-Bold;
  font-size: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const CartItemsWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuyWrapper = styled.div``;

export const CartItemLine = styled.div`
  width: 1000px;
  height: 200px;

  display: flex;
  justify-content: space-between;

  margin-top: 30px;
  cursor: pointer;
  :hover {
    color: #707dd4;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const MainImage = styled.img`
  height: 200px;
`;
export const ItemInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div``;

export const Brand = styled.div`
  font-size: 13px;

  color: black;
`;

export const ItemName = styled.div`
  font-family: NotoSans-Bold;
  font-size: 20px;

  margin-top: 20px;
`;
export const Option = styled.div`
  margin-top: 10px;
  color: #8c8c8c;
`;

export const DeliveryPrice = styled.div`
  font-size: 13px;
  color: black;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OriginalPrice = styled.s`
  color: black;
`;
export const SsomiPrice = styled.div`
  font-family: NotoSans-Bold;
  color: red;

  margin-left: 5px;
`;

export const ButtonWrapper = styled.div``;
export const DeleteButton = styled.button`
  border: none;
  background-color: white;
`;

export const Line = styled.hr`
  width: 1000px;
  border: 1px solid #f5f5fb;
  margin-top: 20px;
`;
