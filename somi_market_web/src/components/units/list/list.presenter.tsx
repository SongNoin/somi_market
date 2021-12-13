export default function ListUI(props) {
  return (
    <>
      {props.products.map((el) => (
        <div key={el.prefix}>{el.name}</div>
      ))}
    </>
  );
}
