import {
  Wrapper,
  WrapperHeader,
  MainImage,
  InfoWrapper,
  InfoHeader,
  InfoFooter,
  Brand,
  Name,
  PriceWrapper,
  DiscountWrapper,
  Discount,
  OriginalPrice,
  SsomiPrice,
  DeliveryPrice,
  OptionWrapper,
  ButtonWrapper,
  DetailButton,
  Line,
  ContentWrapper,
  ContentTitle,
  Content,
  CartStickyButton,
} from "./detail.styles";
import Dompurify from "dompurify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DetailUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MainImage src={props.detail.mainImage} />
          <InfoWrapper>
            <InfoHeader>
              <Brand>
                {props.detail.brand?.name} | {props.detail.shop?.name}
              </Brand>
              <Name>{props.detail.name}</Name>{" "}
              <DeliveryPrice>
                배송비{" "}
                {props.detail.shippingPrice === 0
                  ? "무료"
                  : Number(props.detail.shippingPrice).toLocaleString("ko-KR") +
                    " 원"}
              </DeliveryPrice>
              <PriceWrapper>
                {props.detail.originalPrice !== props.detail.ssomeePrice ? (
                  <>
                    <DiscountWrapper>
                      <OriginalPrice>
                        {Number(props.detail.originalPrice).toLocaleString(
                          "ko-KR"
                        )}
                      </OriginalPrice>
                      <Discount>{`${
                        100 -
                        Math.floor(
                          (props.detail.ssomeePrice /
                            props.detail.originalPrice) *
                            100
                        )
                      } %`}</Discount>
                    </DiscountWrapper>
                    <SsomiPrice>
                      {Number(props.detail.ssomeePrice).toLocaleString("ko-KR")}{" "}
                      원
                    </SsomiPrice>
                  </>
                ) : (
                  <SsomiPrice>
                    {Number(props.detail.originalPrice).toLocaleString("ko-KR")}{" "}
                    원
                  </SsomiPrice>
                )}
              </PriceWrapper>
            </InfoHeader>
            <InfoFooter>
              {props.detail.options?.length > 0 && (
                <OptionWrapper>
                  {props.detail.options[0]?.options && (
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                      <InputLabel id="option1">
                        {props.detail.options[0].optionCategoryName}
                      </InputLabel>
                      <Select
                        labelId="option1"
                        id="option1"
                        value={props.optionOne}
                        onChange={props.handleChangeOne}
                      >
                        {props.detail.options[0].options.map((el, index) => (
                          <MenuItem key={index} value={el.name}>
                            {el.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  {props.detail.options[1]?.options && (
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                      <InputLabel id="option2">
                        {props.detail.options[1].optionCategoryName}
                      </InputLabel>
                      <Select
                        labelId="option2"
                        id="option2"
                        value={props.optionTwo}
                        onChange={props.handleChangeTwo}
                      >
                        {props.detail.options[1].options.map((el, index) => (
                          <MenuItem key={index} value={el.name}>
                            {el.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </OptionWrapper>
              )}
              <ButtonWrapper>
                <DetailButton onClick={props.onClickAddCart}>
                  장바구니에 담기
                </DetailButton>
                <DetailButton>구매하기</DetailButton>
              </ButtonWrapper>
            </InfoFooter>
          </InfoWrapper>
        </WrapperHeader>
        <Line />
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
      <CartStickyButton onClick={props.onClickMoveToCart}>🛒</CartStickyButton>
    </>
  );
}
