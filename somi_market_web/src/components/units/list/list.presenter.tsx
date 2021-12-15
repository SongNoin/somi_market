import {
  Wrapper,
  ProductListWrapper,
  PriceWrapper,
  ProductBox,
  ProductImage,
  SoldoutProductName,
  ProductName,
  OriginalPrice,
  Soldout,
  Discount,
  DiscountOriginalPrice,
  SsomiPrice,
  CartStickyButton,
  NoProductWrapper,
  NoProductEmoji,
  NoProductContent,
} from "./list.styles";

export default function ListUI(props) {
  return (
    <>
      <Wrapper>
        {props.products[0] ? (
          <ProductListWrapper>
            {props.products.map((el) => (
              <>
                <ProductBox
                  key={el.prefix}
                  id={el.prefix}
                  onClick={props.onClickMoveToDetail}
                >
                  <ProductImage src={el.mainImage} />
                  {el.soldOut ? (
                    <>
                      <SoldoutProductName>{el.name}</SoldoutProductName>
                      <Soldout> [품절]</Soldout>
                    </>
                  ) : (
                    <ProductName>{el.name}</ProductName>
                  )}
                  {el.originalPrice === el.ssomeePrice ? (
                    <PriceWrapper>
                      <OriginalPrice>
                        {Number(el.originalPrice).toLocaleString("ko-KR")} 원
                      </OriginalPrice>
                    </PriceWrapper>
                  ) : (
                    <PriceWrapper>
                      <Discount>{`${
                        100 -
                        Math.floor((el.ssomeePrice / el.originalPrice) * 100)
                      } %`}</Discount>
                      <DiscountOriginalPrice>
                        {Number(el.originalPrice).toLocaleString("ko-KR")}
                      </DiscountOriginalPrice>
                      <SsomiPrice>
                        {Number(el.ssomeePrice).toLocaleString("ko-KR")} 원
                      </SsomiPrice>
                    </PriceWrapper>
                  )}
                </ProductBox>
              </>
            ))}
          </ProductListWrapper>
        ) : (
          <NoProductWrapper>
            <NoProductEmoji>🙏</NoProductEmoji>
            <NoProductContent>판매중인 상품이 없습니다.</NoProductContent>
          </NoProductWrapper>
        )}
      </Wrapper>
      <CartStickyButton onClick={props.onClickMoveToCart}>🛒</CartStickyButton>
    </>
  );
}
