import {
  Wrapper,
  CartTitle,
  CartItemsWrapper,
  BuyWrapper,
  CartItemLine,
  ItemWrapper,
  MainImage,
  ItemInfo,
  InfoWrapper,
  Brand,
  ItemName,
  Option,
  DeliveryPrice,
  ItemPriceWrapper,
  PriceWrapper,
  OriginalPrice,
  SsomiPrice,
  ButtonWrapper,
  DeleteButton,
  Line,
} from "./cart.styles";

export default function CartUI(props) {
  return (
    <>
      <Wrapper>
        <CartTitle>장바구니</CartTitle>
        <CartItemsWrapper>
          {props.cartItems.map((el) => (
            <>
              <CartItemLine
                key={el.prefix}
                onClick={props.onClickMoveToDetail}
                id={el.category.id + "#" + el.prefix}
              >
                <ItemWrapper>
                  <MainImage src={el.mainImage} />
                  <ItemInfo>
                    <InfoWrapper>
                      <Brand>
                        {el.brand?.name} | {el.shop?.name}
                      </Brand>
                      <ItemName>{el.name}</ItemName>
                      <Option>
                        {el.optionone} {el.optiontwo}
                      </Option>
                    </InfoWrapper>
                    <PriceWrapper>
                      <DeliveryPrice>
                        배송비{" "}
                        {el.shippingPrice === 0
                          ? "무료"
                          : Number(el.shippingPrice).toLocaleString("ko-KR") +
                            "원"}
                      </DeliveryPrice>
                      <ItemPriceWrapper>
                        <OriginalPrice>
                          {Number(el.originalPrice).toLocaleString("ko-KR")}
                        </OriginalPrice>
                        <SsomiPrice>
                          {Number(el.ssomeePrice).toLocaleString("ko-KR")} 원
                        </SsomiPrice>
                      </ItemPriceWrapper>
                    </PriceWrapper>
                  </ItemInfo>
                </ItemWrapper>
                <ButtonWrapper>
                  <DeleteButton>❌</DeleteButton>
                </ButtonWrapper>
              </CartItemLine>
              <Line />
            </>
          ))}
        </CartItemsWrapper>
        <BuyWrapper></BuyWrapper>
      </Wrapper>
    </>
  );
}
