import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductListWrapper = styled.div`
  width: 1360px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`;

export const ProductBox = styled.div`
  width: 300px;
  margin: 20px;
  height: 450px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  cursor: pointer;
  :hover {
    color: #707dd4;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const SoldoutProductName = styled.s`
  font-family: NotoSans-Bold;
  font-size: 18px;
  margin-top: 5px;
  text-align: center;
`;
export const Soldout = styled.span`
  font-family: NotoSans-Bold;
  font-size: 18px;
  color: red;
  text-align: center;
`;
export const ProductName = styled.div`
  font-family: NotoSans-Bold;
  font-size: 18px;
  margin-top: 5px;
  text-align: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const OriginalPrice = styled.div`
  font-size: 16px;
  color: black;
`;
export const DiscountOriginalPrice = styled.s`
  margin-left: 10px;
  font-size: 16px;
  color: black;
`;
export const SsomiPrice = styled.div`
  margin-left: 5px;
  font-size: 16px;
  color: red;
`;

export const Discount = styled.div`
  color: red;
`;

export const CartStickyButton = styled.div`
  position: sticky;
  bottom: 20px;
  left: 1750px;
  width: 100px;
  height: 100px;
  font-size: 50px;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  cursor: pointer;
`;

export const NoProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

export const NoProductEmoji = styled.div`
  font-family: NotoSans-Bold;
  font-size: 100px;

  margin-bottom: 50px;
`;

export const NoProductContent = styled.div`
  font-family: NotoSans-Bold;
  font-size: 50px;
`;
