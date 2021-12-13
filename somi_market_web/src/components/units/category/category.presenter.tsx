export default function CategoryUI(props) {
  return (
    <>
      <div>카테고리페이지</div>
      {props.category.map((el) => (
        <button onClick={props.onClickMoveToList} key={el.id} id={el.id}>
          {el.name}
        </button>
      ))}
    </>
  );
}
