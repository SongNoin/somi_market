import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Navi from "./navi/navi.container";

const Body = styled.div``;
export default function Layout(props) {
  return (
    <>
      <Banner></Banner>
      <Navi></Navi>
      <Body>{props.children}</Body>
    </>
  );
}
