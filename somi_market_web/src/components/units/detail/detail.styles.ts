import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;
`;
export const WrapperHeader = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;

  /* padding-right: 200px; */
`;

export const MainImage = styled.img`
  height: 600px;
  border-radius: 15px;
`;

export const InfoWrapper = styled.div`
  width: 550px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 20px;
  padding-bottom: 20px;
`;
export const InfoHeader = styled.div``;
export const InfoFooter = styled.div``;

export const Brand = styled.div`
  color: #8c8c8c;
`;
export const Name = styled.div`
  font-family: NotoSans-Bold;
  font-size: 25px;

  margin-top: 20px;
`;
export const DeliveryPrice = styled.div`
  font-family: NotoSans-Bold;
  font-size: 18px;
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Discount = styled.div`
  font-family: NotoSans-Bold;
  font-size: 20px;
  color: red;

  margin-left: 10px;
`;
export const OriginalPrice = styled.s`
  font-family: NotoSans-Bold;
  font-size: 25px;
`;
export const SsomiPrice = styled.div`
  font-family: NotoSans-Bold;
  font-size: 25px;

  color: red;
`;

export const OptionWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
export const DetailButton = styled.button`
  width: 250px;
  height: 70px;
  line-height: 78px;
  font-size: 20px;
  font-family: NotoSans-Bold;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00e6f6;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "ALTERNATE TEXT";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  :hover:after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }

  @media (min-width: 768px) {
    .button-49,
    .button-49:after {
      width: 200px;
      height: 86px;
      line-height: 88px;
    }
  }
  cursor: pointer;
`;
export const Line = styled.hr`
  width: 1200px;
  border: 1px solid #f7f8fa;

  margin-top: 20px;
`;
export const ContentWrapper = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentTitle = styled.div`
  width: 1200px;

  height: 150px;
  font-family: NotoSans-Bold;
  font-size: 40px;
  background-color: #f7f8fa;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;
