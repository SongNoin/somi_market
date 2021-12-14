import {
  Wrapper,
  WrapperHeader,
  MainImage,
  InfoWrapper,
  Brand,
  Name,
  PriceWrapper,
  DiscountWrapper,
  Discount,
  OriginalPrice,
  SsomiPrice,
  DeliveryPrice,
  Price,
  OptionWrapper,
  ButtonWrapper,
  CartButton,
  BuyButton,
  ContentWrapper,
  ContentTitle,
  Content,
} from "./detail.styles";
import Dompurify from "dompurify";

export default function DetailUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MainImage src={props.detail.mainImage} />
          <InfoWrapper>
            <Brand>
              {props.detail.brand?.name} / {props.detail.shop?.name}
            </Brand>
            <Name>{props.detail.name}</Name>
            <PriceWrapper>
              {props.detail.originalPrice !== props.detail.ssomeePrice ? (
                <>
                  <DiscountWrapper>
                    <OriginalPrice>{props.detail.originalPrice}</OriginalPrice>
                    <Discount>{`${
                      100 -
                      Math.floor(
                        (props.detail.ssomeePrice /
                          props.detail.originalPrice) *
                          100
                      )
                    } %`}</Discount>
                  </DiscountWrapper>
                  <SsomiPrice>{props.detail.ssomeePrice} 원</SsomiPrice>
                </>
              ) : (
                <Price>{props.detail.originalPrice} 원</Price>
              )}
            </PriceWrapper>
            <DeliveryPrice></DeliveryPrice>
            <OptionWrapper></OptionWrapper>
            <ButtonWrapper>
              <CartButton>장바구니에 담기</CartButton>
              <BuyButton>구매하기</BuyButton>
            </ButtonWrapper>
          </InfoWrapper>
        </WrapperHeader>
        <ContentWrapper>
          <ContentTitle>상품정보</ContentTitle>
          {process.browser && (
            <Content
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.detail.description),
              }}
            />
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
