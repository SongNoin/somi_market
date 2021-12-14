import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: NotoSans;
  }
  @font-face {
    font-family: "NotoSans"; // 폰트이름
    src: url("/fonts/NotoSansKR-Regular.otf"); // 폰트위치
  }
  @font-face {
    font-family: "NotoSans-Bold"; // 폰트이름
    src: url("/fonts/NotoSansKR-Bold.otf"); // 폰트위치
  }
`;
