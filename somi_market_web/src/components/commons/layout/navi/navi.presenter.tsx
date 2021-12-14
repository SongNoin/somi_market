import { Wrapper, Category } from "./navi.styles";

export default function NaviUI(props) {
  return (
    <>
      <Wrapper>
        {props.category.map((el) => (
          <Category onClick={props.onClickMoveToList} key={el.id} id={el.id}>
            {el.name}
          </Category>
        ))}
      </Wrapper>
    </>
  );
}
