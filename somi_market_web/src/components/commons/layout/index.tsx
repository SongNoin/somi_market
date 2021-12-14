import styled from "@emotion/styled";
import Navi from "./navi/navi.container";

const Body = styled.div``;
export default function Layout(props) {
  return (
    <>
      <Navi></Navi>
      <Body>{props.children}</Body>
    </>
  );
}
