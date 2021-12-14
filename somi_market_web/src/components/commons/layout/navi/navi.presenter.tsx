import { Wrapper, CategoryWrapper, Category } from "./navi.styles";

export default function NaviUI(props) {
  return (
    <>
      <Wrapper>
        <CategoryWrapper>
          {props.category.map((el) => (
            <>
              <Category
                onClick={props.onClickMoveToList}
                key={el.id}
                id={el.id}
                isActive={props.isActive}
                el={el}
              >
                {el.name}
              </Category>
            </>
          ))}
        </CategoryWrapper>
      </Wrapper>
    </>
  );
}
